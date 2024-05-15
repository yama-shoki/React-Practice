import { NextPage } from 'next';
import Link from 'next/link';

<<<<<<< HEAD
const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
=======
import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import { useReactHookForm } from '@/hooks/useReactHookForm';

const Page: NextPage = () => {
  const { register, errors, handleClickPost, loading } = useReactHookForm();

  return (
    <Container maxWidth="max-w-4xl">
      <div className=" mb-3 mt-8">
        <label htmlFor="name">名前</label>
        <input
          type="text"
          id="name"
          placeholder="名前"
          {...register('name')}
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary-light ${errors['name'] ? 'border-error' : 'border-theme-medium'}`}
        />
        {errors['name'] && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['name'].message}</span>
          </div>
        )}
      </div>

      <div className=" mb-3 mt-8">
        <label htmlFor="email">メールアドレス</label>
        <input
          type="text"
          id="email"
          placeholder="メールアドレス"
          {...register('email')}
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary-light ${errors['email'] ? 'border-error' : 'border-theme-medium'}`}
        />
        {errors.email && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['email'].message}</span>
          </div>
        )}
      </div>

      <div className=" mb-3 mt-8">
        <label htmlFor="password">パスワード</label>
        <input
          type="text"
          id="password"
          placeholder="パスワード"
          {...register('password')}
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary-light ${errors['password'] ? 'border-error' : 'mt-4 border-theme-medium'}`}
        />
        {errors['password'] && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['password'].message}</span>
          </div>
        )}
      </div>
      <Button label="送信" variant="primary" onClick={handleClickPost} loading={loading} />

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </Container>
>>>>>>> ab936b8 (first commit)
  );
};

export default Page;
