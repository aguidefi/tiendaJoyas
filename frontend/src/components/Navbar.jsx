import { NavLink } from "react-router-dom"
import joya from '../assets/joya.png'

export const Navbar = () => {

  const setActiveClass = ({isActive}) => (isActive ? "active" : "disabled")

  return (
    <div className="header">
      <div className="brand">
      <NavLink to="joyas">
        <img src={joya} alt="Brand" />
      </NavLink>
      </div>
      <nav className="nav-links">
        <ul>
          <li><NavLink className={setActiveClass} to="/">
                Home
              </NavLink>
          </li>
          <li><NavLink className={setActiveClass} to="joyas">
                Joyas
              </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}