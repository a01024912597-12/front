import { useContext } from "react";
import { ToggleContext } from "./CommonContext";

const Child4 = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("TrueFalse null");
  }
  const { toggle } = context;
  return (
    <div>
      <button className="border px-4" onClick={toggle}>
        isOn 변경
      </button>
    </div>
  );
};

const Child3 = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("TrueFalse null");
  }
  const { isOn } = context;
  return (
    <div>
      <Child4 />
      <p>toggle 값 : {isOn ? "ON" : "OFF"}</p>
      <p>{isOn}</p>
    </div>
  );
};

export default Child3;
