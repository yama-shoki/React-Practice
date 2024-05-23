import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useTodoApp } from '@/hooks/useTodoApp';

const Page: NextPage = () => {
  const {
    taskList,
    taskLabel,
    handlChangeTaskLabel,
    handleAddTask,
    handleCompletedTask,
    handleDeleteTask,
  } = useTodoApp();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              type="text"
              placeholder="タスクを追加"
              value={taskLabel}
              onChange={handlChangeTaskLabel}
              className=" mb-6 w-64 rounded-md border-2 border-blue-300 px-2 py-3 outline-none"
            />
            <Button label="追加" variant="primary" onClick={handleAddTask} />
          </div>

          {/* タスクの表示 */}
          <ul>
            {taskList.map((task, index) => (
              <div
                key={index}
                className=" mt-8 flex w-64 items-center justify-between border-l-4 border-blue-300 p-2  shadow-lg"
              >
                <li className={task.completed ? 'line-through' : ''}>{task.label}</li>
                <div className=" flex gap-2">
                  <Button
                    label={task.completed ? '戻す' : '完了'}
                    variant="secondary"
                    onClick={() => handleCompletedTask(index)}
                  />
                  <Button
                    label="削除"
                    variant="error-secondary"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
