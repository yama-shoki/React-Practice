import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useUserSearch } from '@/hooks/useUserSearch';

const Page: NextPage = () => {
  const {
    query,
    userName,
    userAge,
    handleChangeUserName,
    handleChangeUserAge,
    userNameError,
    userAgeError,
    handleAddUser,
    handleDeleteUser,
    handleChangeQuery,
    filteredUsers,
  } = useUserSearch();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">ユーザー検索アプリ</h2>

          {/* ユーザー追加フォーム */}
          <div className="mt-8">
            <h3 className="text-base ">ユーザー追加フォーム</h3>
            <input
              type="text"
              placeholder="名前"
              onChange={handleChangeUserName}
              value={userName}
              className="mt-4 w-full rounded-md border-2 border-blue-400 px-3 py-2 outline-none"
            />

            {/* 名前のエラーメッセージ */}
            {userNameError && <p className=" text-red-400">名前を入力して下さい</p>}

            <input
              type="text"
              placeholder="年齢"
              onChange={handleChangeUserAge}
              value={userAge}
              className="mt-5 w-full rounded-md border-2 border-blue-400 px-3 py-2 outline-none"
            />

            {/* 年齢のエラーメッセージ */}
            {userAgeError && <p className="text-red-400">年齢は半角数字で入力して下さい</p>}

            {/* ユーザー追加ボタン */}
            <Button
              variant="primary"
              label="ユーザーを追加"
              className="mt-10"
              onClick={handleAddUser}
            />
          </div>

          {/* ユーザー検索フォーム */}
          <div className="mt-12">
            <h3 className="text-base">検索フィルター</h3>
            <input
              type="text"
              placeholder="ユーザー検索"
              onChange={handleChangeQuery}
              value={query}
              className="mt-4 w-full rounded-md border-2 border-blue-400 px-3 py-2 outline-none"
            />

            {/* ユーザー一覧 */}
            <ul className="mt-5 ">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="  mt-6 flex justify-between rounded-md border-b-2 border-r-2 border-black  px-2 py-3 shadow-md"
                >
                  <span>{user.name}</span>
                  <span>{user.age}才</span>
                  <Button label="削除" variant="error" onClick={() => handleDeleteUser(user.id)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
