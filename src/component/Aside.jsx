import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", to: "/", end: true },
  { label: "About Project", to: "/aboutProject" },
  { label: "Components Guide", to: "/componentGuide" },
  { label: "Learning", to: "/learning" },
];

export default function Aside() {
  return (
    <aside className="sidebar">
      <Link className="brand" to="/" aria-label="Mini Lab 홈으로 이동">
        <span className="brandMark">ML</span>
        <span className="brandText">
          <strong>Mini Lab</strong>
          <small>LIM&apos;s Portfolio</small>
        </span>
      </Link>

      <div className="menuGroup">
        <p className="menuTitle">Main Menu</p>
        <nav className="navigation" aria-label="주요 메뉴">
          {menuItems.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `menuLink${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="techGroup">
        <p className="menuTitle">Learning Stack</p>
        <ul className="techList">
          <li>React</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </aside>
  );
}
