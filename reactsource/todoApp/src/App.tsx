import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoTeamplate from "./components/TodoTemplate";
import { initialTodos, type Todo, type TodoCreate } from "./types/todo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // id 값
  const nextId = useRef(4);

  const onInsert = (todo: TodoCreate) => {
    setTodos([
      ...todos,
      {
        id: nextId.current,
        ...todo,
        createDate: new Date(),
        lastModifiedDate: new Date(),
      },
    ]);

    nextId.current += 1;
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              lastModifiedDate: new Date(),
            }
          : todo,
      ),
    );
  };

  const getTodosByCompleted = (completed: boolean) => {};

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
      </TodoTeamplate>
    </>
  );
}

export default App;
