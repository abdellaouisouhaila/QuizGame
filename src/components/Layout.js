import React from 'react'
import Sidebar from './layouts/Sidebar'
import Topbar from './layouts/Topbar'

export const Layout = ({children}) => {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="main-layout">
      <Topbar />
      <main>{children}</main>
    </div>
  </div>

  )
}
