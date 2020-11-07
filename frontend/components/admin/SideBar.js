/**
 * Sidebar
 */
import React from 'react';

const SideBar = () => {

  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Stisla</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">St</a>
        </div>
        <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="index-0.html">General Dashboard</a></li>
                <li><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
              </ul>
            </li>
            <li className="menu-header">Starter</li>
          </ul>
      </aside>
    </div>
  )
}

export default SideBar;