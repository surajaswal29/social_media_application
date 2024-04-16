import React from "react"
import { NavLink } from "react-router-dom"
import * as Types from "../../utility/types"

const Link: React.FC<Types.LinkProps> = ({
  path,
  activeClass,
  className,
  title,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `text-violet-500 ${activeClass}`
          : `text-gray-700 ${className}`
      }
    >
      {title}
    </NavLink>
  )
}

export default Link
