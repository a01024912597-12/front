export type Board = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type BoardComment = Board & { comments: Comment[] };

// create (title. body, userId)
// update(id, title)
export type BoardUpSert = Omit<Board, "id"> & { id?: number };
