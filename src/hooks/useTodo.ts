import { ChangeEvent, useState } from 'react';
import { v4 } from 'uuid';

type Task = {
  id: string;
  label: string;
  isCompleted: boolean;
};

type UseTodo = () => {
  userInput: string;
  taskList: Task[];
  errorMessage: string | null;
  handleUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  handleToggleTaskCompleted: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
};

export const useTodo: UseTodo = () => {
  const [userInput, setUserInput] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setErrorMessage('');
  };

  const handleAddTask = () => {
    if (userInput.trim() === '') {
      setErrorMessage('タスクを入力してください。');
      setUserInput('');
      return;
    }
    // 新しいタスク
    const newTask = { id: v4(), label: userInput, isCompleted: false };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setUserInput('');
  };

  const handleToggleTaskCompleted = (taskId: string) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((prevTask) =>
        prevTask.id === taskId ? { ...prevTask, isCompleted: !prevTask.isCompleted } : prevTask,
      ),
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTaskList((prevTaskList) => prevTaskList.filter((prevTask) => prevTask.id !== taskId));
  };

  return {
    userInput,
    taskList,
    errorMessage,
    handleUserInput,
    handleAddTask,
    handleToggleTaskCompleted,
    handleDeleteTask,
  };
};
