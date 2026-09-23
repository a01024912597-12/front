import { useEffect, useState } from "react";
import { getBoard, getBoardComments } from "../apis/boardApi";
import type { Board, BoardComment } from "../types/board";

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<BoardComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;

        const serverData = await getBoard(id);
        const serverCommentData = await getBoardComments(id);

        setBoard({
          userId: serverData.userId,
          id: serverData.id,
          title: serverData.title,
          body: serverData.body,
          comments: serverCommentData,
        });
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
