import { ChangeEvent, useMemo, useState } from 'react';
import { v4 } from 'uuid';

type User = {
  name: string;
  age: number;
  id: string;
};

const INITIAL_USERS: User[] = [
  { name: 'Alice', age: 22, id: v4() },
  { name: 'Bob', age: 33, id: v4() },
  { name: 'Charlie', age: 44, id: v4() },
  { name: 'David', age: 55, id: v4() },
];

type UseUserSearch = () => {
  query: string;
  userName: string;
  userAge: string;
  userNameError: boolean;
  userAgeError: boolean;
  handleChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  handleDeleteUser: (userId: string) => void;
  filteredUsers: User[];
};

export const useUserSearch: UseUserSearch = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [query, setQuery] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [userAgeError, setUserAgeError] = useState(false);
  const [users, setUsers] = useState(INITIAL_USERS);

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddUser = () => {
    // エラー非表示
    setUserNameError(false);
    setUserAgeError(false);

    // エラー処理
    // 名前の空文字と年齢の文字列を省く
    const isNameEmpty = userName.trim() === '';
    const isAgeInvalid = !Number(userAge);

    setUserNameError(isNameEmpty);
    setUserAgeError(isAgeInvalid);

    if (isNameEmpty || isAgeInvalid) {
      if (isNameEmpty) setUserName('');
      return;
    }

    // ユーザーの追加処理
    const newUser: User = { name: userName, age: Number(userAge), id: v4() };
    setUsers((prevUserList) => [...prevUserList, newUser]);
    setUserName('');
    setUserAge('');
  };

  const handleDeleteUser = (userId: string) => {
    setUsers((prevUserList) => prevUserList.filter((prevUser) => prevUser.id !== userId));
  };

  // フィルターされたユーザーの配列
  const filteredUsers = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(query.toLocaleLowerCase())),
    [query, users],
  );

  return {
    query,
    userName,
    userAge,
    userNameError,
    userAgeError,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQuery,
    handleAddUser,
    handleDeleteUser,
    filteredUsers,
  };
};
