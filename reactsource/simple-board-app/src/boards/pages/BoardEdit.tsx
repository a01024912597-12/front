import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { putBoard } from "../../apis/boardApi";
import useBoard from "../../hooks/useBoard";
import type { BoardUpdate, BoardUpSert } from "../../types/board";
import BoardForm from "../components/BoardForm";

const BoardEdit = () => {
  // get => 수정하는 대상을 가져와서 화면에 보여주기
  // detail과 같은 코드
  // 주소줄에 있는 id 가져오기
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  const { board, loading } = useBoard(id);
  // 하나 가져와서 화면에 보여주기

  const onSubmit = async (board: BoardUpdate) => {
    if (!id) return;
    try {
      const result = await putBoard(id, board);
      console.log("수정된 board", result);

      navigate({
        pathname: `/boards/${id}`,
        search: `?page=${currentPage}&size=${size}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!board) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }
  return (
    <div>
      <BoardForm onSubmit={onSubmit} board={board} />
    </div>
  );
};

export default BoardEdit;
