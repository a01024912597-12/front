import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  contents: string;
}

interface CommentState {
  comments: Comment[];
}
const initialState: CommentState = { comments: [] };

// createSlice() : 하나의 상태(state) 를 관리하기 위한 redux 모듈을 한번에 만들어주는 함수
const commentSlice = createSlice({
  name: "myComment",
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      state.comments.push({
        id: Date.now(),
        contents: action.payload,
      });
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
    clearComment: (state) => {
      state.comments = [];
    },
  },
});
export const { addComment, deleteComment, clearComment } = commentSlice.actions;

export default commentSlice.reducer;
