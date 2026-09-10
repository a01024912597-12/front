import { Route, Routes } from "react-router-dom";
import "./App.css";
import LifeCycle from "./LifeCycle";
import TopNavi from "./TopNavi";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
      </Routes>
    </>
  );
}

export default App;
