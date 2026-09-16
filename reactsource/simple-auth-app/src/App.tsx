import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import MyPage from "./components/MyPage";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
