import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./event/Button.tsx";
import Button2 from "./event/Button2.tsx";
import Toolbar from "./event/Toolbar.tsx";
import Switch from "./event/Switch.tsx";

createRoot(document.getElementById("root")!).render(<Switch />);
