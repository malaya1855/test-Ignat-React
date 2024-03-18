import { NavLink } from "react-router-dom";
import links from "../../data/links.json";
export const Navigation = () => {
  return (
    <ul className="navigation-list">
      {links.map((link, i) => (
        <NavLink
          key={`${link.title}${i}`}
          to={link.src}
          className={({ isActive }) => {
            return "navigation" + (!isActive ? "" : " active");
          }}
        >
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};
