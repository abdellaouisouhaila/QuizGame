import React, { useState } from 'react';
import Sidebar from './layouts/Sidebar'
import Topbar from './layouts/Topbar'

export const Layout = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
<div className="layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="main-content">{children}</main>
      </div>
    </div>

  )
}
