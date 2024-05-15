import { ChangeEvent, useState } from 'react';

type Task = {
  label: string;
  completed: boolean;
};

type UseTodoApp = () => {
  taskList: Task[];
  taskLabel: string;
  handlChangeTaskLabel: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  handleCompletedTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
};
export const useTodoApp: UseTodoApp = () => {
  const [taskLabel, setTaskLabel] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handlChangeTaskLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(e.target.value);
  };

  const handleAddTask = () => {
    setTaskList((prevState) => [...prevState, { label: taskLabel, completed: false }]);
    setTaskLabel('');
  };

  const handleCompletedTask = (index: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((prevTask, i) =>
        i === index ? { ...prevTask, completed: !prevTask.completed } : prevTask,
      ),
    );
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((prevTask, i) => i !== index));
  };

  return {
    taskList,
    taskLabel,
    handlChangeTaskLabel,
    handleAddTask,
    handleCompletedTask,
    handleDeleteTask,
  };
};
