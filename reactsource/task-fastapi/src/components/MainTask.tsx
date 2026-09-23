import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import { deleteTask, getTasks, postTask, putTask } from "../apis/taskApi";

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskAdd = {
  text: string;
  done: boolean;
};

const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  // 여행계획 추가 함수
  const handleAddTask = async (text: string) => {
    const newTask = await postTask({ text: text, done: false });
    setTasks([...tasks, newTask]);
  };
  // 여행계획 수정
  const handleUpdateTask = async (task: TaskProps) => {
    const updateTask = await putTask(String(task.id), task);
    setTasks(tasks.map((t) => (t.id === task.id ? updateTask : t)));
  };

  // 여행계획 제거
  const handleRemoveTask = async (taskId: number) => {
    //taskId : id
    // tasks 에서 taskId와 일치하지 않는 tasks 추출해서 새로운 배열로 생성
    const updateTask = await deleteTask(String(taskId));
    setTasks(updateTask);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  });

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask
          tasks={tasks}
          onEditTask={handleUpdateTask}
          onRemoveTask={handleRemoveTask}

        />
      </div>
    </div>
  );
};

export default MainTask;
