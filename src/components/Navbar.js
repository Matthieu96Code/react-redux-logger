import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const links = [
  {path: '/', text: 'My profile'},
  {path: 'rockets', text: 'Rockets'},
  {path: 'missions', text: 'Missions'},
]

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink 
                to={link.path}
                style={({ isActive }) => ({textDecoration: isActive ? 'none' : undefined,
                })} >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar