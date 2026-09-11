import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "px-4 py-2 text-blue-600 font-semibold" : "")}>
        생명주기
      </NavLink>

      <NavLink to="/local" className={({ isActive }) => (isActive ? "px-4 py-2 text-blue-600 font-semibold" : "")}>
        내부주기
      </NavLink>

      <NavLink to="/external" className={({ isActive }) => (isActive ? "px-4 py-2 text-blue-600 font-semibold" : "")}>
        외부통신
      </NavLink>
      <NavLink to="/info" className={({ isActive }) => (isActive ? "px-4 py-2 text-blue-600 font-semibold" : "")}>
        Book
      </NavLink>
    </nav>
  );
};

export default TopNavi;
