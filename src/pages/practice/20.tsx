import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useReactHookForm02 } from '@/hooks/useReactHookForm02';

const Page: NextPage = () => {
  const { register, errors, handleClickPost, loading, watch, getValues } = useReactHookForm02();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="mb-3 mt-8">
        <div className="mt-10">
          <label htmlFor="name">名前</label>
          <input
            id="name"
            type="text"
            placeholder="名前を入力して下さい。"
            {...register('name')}
            className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.name ? 'border-error' : 'border-theme-medium'}`}
          />
          {/* <p>{watch('name')}</p> */}
          <p>{getValues('name')}</p>

          {/* エラーメッセージ */}
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        </div>

        <div className="mt-8">
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="text"
            placeholder="メールアドレスを入力して下さい。"
            {...register('email')}
            className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.email ? 'border-error' : 'border-theme-medium'}`}
          />

          <p>{watch('email')}</p>
          {/* <p>{getValues('email')}</p> */}

          {/* エラーメッセージ */}
          {errors.email && <p className="text-red-400">{errors.email.message}</p>}
        </div>

        <div className="mt-8">
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="password"
            placeholder="パスワードを入力して下さい。"
            {...register('password')}
            className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light ${errors.password ? 'border-error' : 'border-theme-medium'}`}
          />
          {/* <p>{watch('password')}</p> */}
          {/* <p>{getValues('password')}</p> */}

          {/* エラーメッセージ */}
          {errors.password && <p className="text-red-400">{errors.password.message}</p>}
        </div>

        {/* 送信ボタン */}
        <Button
          label="送信"
          variant="primary"
          className="mt-7 "
          onClick={handleClickPost}
          loading={loading}
        />
      </div>

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
