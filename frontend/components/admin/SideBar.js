/**
 * Sidebar
 */
import React from 'react';
import Link from 'next/link'

const SideBar = () => {

  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Geek</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">Gk</a>
        </div>
        <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="nav-item">
              <Link href="/admin" className="nav-link">
                <a><i className="fas fa-fire"></i><span>Dashboard</span></a>
              </Link>
            </li>
            <li className="menu-header">Administrators</li>
            <li className="nav-item">
              <Link href="/admin/size" className="nav-link">
                <a><i className="fas fa-fire"></i><span>Sizes</span></a>
              </Link>
            </li>
          </ul>
      </aside>
    </div>
  )
}

export default SideBar;