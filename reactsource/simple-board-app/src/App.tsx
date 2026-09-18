import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./boards/common/AppLayout";
import Home from "./boards/common/Home";
import BoardList from "./boards/pages/BoardList";
import BoardWrite from "./boards/pages/BoardWrite";
import BoardDetail from "./boards/pages/BoardDetail";
import BoardEdit from "./boards/pages/BoardEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/boards">
            <Route index element={<BoardList />} />
            <Route path="write" element={<BoardWrite />} />
            <Route path=":id" element={<BoardDetail />} />
            <Route path=":id/edit" element={<BoardEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
