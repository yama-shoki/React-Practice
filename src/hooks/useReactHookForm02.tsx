import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormWatch,
  useForm,
} from 'react-hook-form';
import * as z from 'zod';

import { httpClient } from '@/lib/api/apibase';

const schema = z.object({
  name: z.string().min(1, '名前を入力して下さい。').max(50, '50文字以内で入力して下さい。'),
  email: z.string().email('正しいメールアドレスを入力して下さい'),
  password: z
    .string()
    .min(8, '8文字以上で入力して下さい')
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      '半角英数記号で入力し、少なくとも1文字以上の大文字・小文字・数字・記号（!@#$%^&*()_+-=[]{};\':"|,.<>/?）を含めてください',
    ),
});

type FormInput = z.infer<typeof schema>;

const DEFAULT_FORM_INPUT = {
  name: '',
  email: '',
  password: '',
};

type UseReactHookForm02 = () => {
  loading: boolean;
  errors: FieldErrors<FormInput>;
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
  getValues: UseFormGetValues<FormInput>;
  handleClickPost: () => Promise<void>;
};

export const useReactHookForm02: UseReactHookForm02 = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FORM_INPUT,
  });

  const onSubmit = async (data: FormInput) => {
    const { name, email, password } = data;

    let isSuccess = true;
    setLoading(true);
    try {
      await httpClient({
        method: 'put',
        url: '/api/form/01',
        data: { name, email, password },
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      isSuccess = false;
      window.alert('送信が失敗しました。');
    }
    if (isSuccess) {
      window.alert('送信しました。');
      reset();
    }
    setLoading(false);
  };

  return { loading, errors, register, watch, getValues, handleClickPost: handleSubmit(onSubmit) };
};
