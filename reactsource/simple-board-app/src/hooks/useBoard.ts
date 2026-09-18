import { useEffect, useState } from "react";
import { getBoard } from "../apis/boardApi";
import type { Board } from "../types/board";

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // id 가 없는 경우
        if (!id) return;

        const serverData = await getBoard(id);
        setBoard(serverData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { board, loading };
};

export default useBoard;
