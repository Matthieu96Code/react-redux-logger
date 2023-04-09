import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Outlet />
    </div>
  )
}

Layout.propTypes = {}

export default Layout