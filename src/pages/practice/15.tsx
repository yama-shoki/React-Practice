import { NextPage } from 'next';
import Link from 'next/link';

<<<<<<< HEAD
const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
=======
import Button from '@/components/common/parts/Button';
import { useTodo } from '@/hooks/useTodo';

const Page: NextPage = () => {
  const {
    userInput,
    errorMessage,
    handleAddTask,
    handleDeleteTask,
    handleToggleTaskCompleted,
    handleUserInput,
    taskList,
  } = useTodo();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        {/* タスク入力欄 */}
        <div className="w-72">
          <h2 className=" mb-8 text-5xl">TODOアプリ</h2>
          <input
            type="text"
            placeholder="タスクを入力"
            onChange={handleUserInput}
            value={userInput}
            className=" mb-6 w-72 border-4  border-blue-500 p-2 outline-none"
          />

          {/* タスク追加ボタン */}
          <Button label="追加" variant="primary" onClick={handleAddTask} />

          {/* エラーメッセージ */}
          {errorMessage && <p className="mt-5 text-xl text-red-500">{errorMessage}</p>}

          {/* タスク一覧 */}
          <ul className=" mt-6 ">
            {taskList.map((task) => (
              <li
                key={task.id}
                className="mb-4 flex items-center justify-between rounded-md border-l-4 border-blue-400 px-2 py-4 text-sm font-bold shadow-lg"
              >
                <div className={task.isCompleted ? 'line-through' : ''}>{task.label}</div>
                <div className="flex gap-3">
                  <Button
                    label={task.isCompleted ? '戻す' : '完了'}
                    variant="secondary"
                    onClick={() => handleToggleTaskCompleted(task.id)}
                  />
                  <Button
                    label="削除"
                    variant="error-secondary"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

>>>>>>> ab936b8 (first commit)
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
