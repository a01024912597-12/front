import { useNavigate, useParams } from "react-router-dom";
import { putBoard } from "../../apis/boardApi";
import useBoard from "../../hooks/useBoard";
import type { BoardUpSert } from "../../types/board";
import BoardForm from "../components/BoardForm";

const BoardEdit = () => {
  // get => 수정하는 대상을 가져와서 화면에 보여주기
  // detail과 같은 코드
  // 주소줄에 있는 id 가져오기
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading } = useBoard(id);
  // 하나 가져와서 화면에 보여주기

  const onSubmit = async (board: BoardUpSert) => {
    if (!id) return;
    try {
      const result = await putBoard(id, board);
      console.log(result);

      navigate(`/boards/${id}`);
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
