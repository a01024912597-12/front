export type Board = {
  userid: number;
  id: number;
  title: string;
  body: string;
};

// create (title. body, userId)
// update(id, title)
export type BoardUpSert = Omit<Board, "id"> & { id?: number };


