import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../apis/todoApi";
import type { Todo } from "../types/todo";

// 리액트는 랜더링 될 때마다 함수를 새롭게 인식
// useCallback(함수, [의존성]) : 렌더링 해도 새로운 함수로 만들지마(의존성이 변경될때만)
const useFetch = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  // 상단의 "전체","완료","미완료" 보관
  const [completedFilter, setCompletedFilter] = useState<boolean | null>(null);

  const fetchData = useCallback(async (completedFilter: boolean | null) => {
    setloading(true);
    try {
      // 데이터 가져오기 함수 호출
      const serverData = await getTodos(completedFilter);
      setTodos(serverData.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(completedFilter);
  }, [fetchData, completedFilter]);

  return { todos, loading, fetchData, completedFilter, setCompletedFilter };
};

export default useFetch;
