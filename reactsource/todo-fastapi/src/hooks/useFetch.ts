import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getTodos } from "../apis/todoApi";
import type { TodoPageResponse } from "../types/todo";

const initData = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  completed: null,
  total_pages: 0,
};

// 리액트는 랜더링 될 때마다 함수를 새롭게 인식
// useCallback(함수, [의존성]) : 렌더링 해도 새로운 함수로 만들지마(의존성이 변경될때만)
const useFetch = () => {
  const [todos, setTodos] = useState<TodoPageResponse>(initData);
  const [loading, setloading] = useState<boolean>(true);

  // URL의 파라메터 값 가져오기(? 뒤의 값 가져오기) => useSearchParams()
  
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;
  const completedParam = searchParams.get("completed") || null;
  const completed = completedParam === null ? null : completedParam === "true";

  // completedFilter = "true" or "false"
  const fetchData = useCallback(async (completedFilter: boolean | null, page: number, size: number) => {
    setloading(true);
    try {
      // 데이터 가져오기 함수 호출
      const serverData = await getTodos(completedFilter, page, size);
      setTodos(serverData);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(completed, page, size);
  }, [fetchData, completed, page, size]);

  return { todos, loading, fetchData  };
};

export default useFetch;
