import Child3 from "./Child3";
import Child1 from "./Child2";
import CountProvider from "./CountProvider";
import ToggleProvider from "./ToggleProvider";

const UseContextExam2 = () => {
  return (
    <div>
      <CountProvider>
        <h2 className="text-3xl">CountContext</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <h2 className="text-3xl">ToggleContext</h2>
        <Child3 />
      </ToggleProvider>
    </div>
  );
};

export default UseContextExam2;
