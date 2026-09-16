import { useContext } from "react";
import ThemeBox from "./ThemeBox";
import ThemeProvider from "./ThemeProvider";
import { ThemeContext } from "./CommonContext";

const ThemeToggleButton = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext null");
  }
  const { toggleTheme } = context;

  return (
    <div>
      <button className="border px-4" onClick={toggleTheme}>
        테마전환
      </button>
    </div>
  );
};

const UseContextExam1 = () => {
  return (
    <div>
      <h2 className="text-3xl">useContext 예제1</h2>
      <ThemeProvider>
        <ThemeToggleButton />
        <ThemeBox />
      </ThemeProvider>
    </div>
  );
};

export default UseContextExam1;
