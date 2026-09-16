import { useState, type ReactNode } from "react";
import { ToggleContext } from "./CommonContext";

const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);
  return <ToggleContext.Provider value={{ isOn, toggle }}>{children}</ToggleContext.Provider>;
};

export default ToggleProvider;
