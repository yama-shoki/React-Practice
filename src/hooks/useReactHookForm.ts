import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import * as z from 'zod';

import { httpClient } from '@/lib/api/apibase';

const schema = z.object({
  name: z.string().min(1, '名前を入力してください').max(50, '50文字以内で入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      '半角英数記号で入力し、少なくとも1文字以上の大文字・小文字・数字・記号（!@#$%^&*()_+-=[]{};\':"|,.<>/?）を含めてください',
    ),
});

type FormInput = z.infer<typeof schema>;

const DEFAULT_FORM_INPUT: FormInput = {
  name: '',
  email: '',
  password: '',
};

type UseReactHookForm = () => {
  loading: boolean;
  handleClickPost: () => Promise<void>;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
};

export const useReactHookForm: UseReactHookForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FORM_INPUT,
  });

  const onSubmit = async (data: FormInput) => {
    const { name, email, password } = data;

    setLoading(true);
    // TODO APIをたたく
    try {
      await httpClient({
        method: 'post',
        url: '/api/form/01',
        data: { name, email, password },
        headers: { 'Content-Type': 'application/json' },
      });
      window.alert('送信しました');
      reset();
    } catch (error) {
      // TODO エラーハンドリング
      window.alert('送信が失敗しました');
    }
    setLoading(false);
  };

  return { loading, handleClickPost: handleSubmit(onSubmit), register, errors };
};
