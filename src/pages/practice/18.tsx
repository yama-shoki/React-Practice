import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import Button from '@/components/common/parts/Button';
import { httpClient } from '@/lib/api/apibase';

const schema = z.object({
  name: z.string().min(1, '名前を入力して下さい。').max(50, '50文字以内で入力して下さい。').trim(),
  email: z.string().email('正しいメールアドレスを入力してください').trim(),
  password: z
    .string()
    .min(8, '8文字以上で入力して下さい。')
    .trim()
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

const Page: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    watch,
    getValues,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FORM_INPUT,
  });

  const onSubmit = async (data: FormInput) => {
    const { name, email, password } = data;

    let isSuccess = true;

    setLoading(true);
    // APIをたたく
    try {
      await httpClient({
        method: 'post',
        url: '/api/form/01',
        data: { name, email, password },
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      // エラーハンドリング
      window.alert('送信が失敗しました');
      isSuccess = false;
    }

    // 成功時の処理
    if (isSuccess) {
      window.alert('送信しました。');
      reset();
    }
    setLoading(false);
  };

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="mt-8">
        <div className="mb-3 mt-8">
          <div className="mt-8">
            <label htmlFor="name">名前</label>
            <input
              type="text"
              placeholder="名前を入力して下さい。"
              id="name"
              {...register('name')}
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.name ? 'border-error' : 'border-theme-medium'}`}
            />
            <div>{watch('name')}</div>
            {errors.name && <div className="mt-1 text-body3 text-error">{errors.name.message}</div>}
          </div>

          <div className="mt-8">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレスを入力して下さい。"
              id="email"
              {...register('email')}
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.email ? 'border-error' : 'border-theme-medium'}`}
            />
            <div>{watch('email')}</div>
            {errors.email && (
              <div className="mt-1 text-body3 text-error">{errors.email.message}</div>
            )}
          </div>

          <div className="mt-8">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              placeholder="パスワードを入力して下さい。"
              id="password"
              {...register('password')}
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.password ? 'border-error' : 'border-theme-medium'}`}
            />
            <div>{getValues('password')}</div>
            {errors.password && (
              <div className="mt-1 text-body3 text-error">{errors.password.message}</div>
            )}
          </div>

          <Button
            label="送信"
            variant="primary"
            className="mt-7 "
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
