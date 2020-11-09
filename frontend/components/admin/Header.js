/**
 * Sidebar
 */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleMenu } from '../../redux/actions';
import Avatar from 'react-avatar';

const Header = () => {
  const dispatch = useDispatch();
  const { user = { username: '' } } = useSelector(state => state.auth);
  const [dropdownProfile, setDropdownProfile] = useState(false);

  const handleShowProfile = () => {
    setDropdownProfile(!dropdownProfile);
  }
  
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a onClick={()=>dispatch(setToggleMenu())} data-toggle="sidebar" className="nav-link nav-link-lg">
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
          </ul>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right">
              <div className="dropdown-header">Notifications
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div className="dropdown-list-content dropdown-list-icons">
                <a href="#" className="dropdown-item dropdown-item-unread">
                  <div className="dropdown-item-icon bg-primary text-white">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    Template update is available now!
                    <div className="time text-primary">2 Min Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon bg-info text-white">
                    <i className="far fa-user"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                    <div className="time">10 Hours Ago</div>
                  </div>
                </a>
              </div>
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li><Avatar onClick={handleShowProfile} name={user.username} size="34" round={true} /></li>
          <li className={`dropdown ${dropdownProfile ? 'show' : ''}`}>
            <a onClick={handleShowProfile} data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <div className="d-sm-none d-lg-inline-block">{user.username}</div>
            </a>
            <div className={`dropdown-menu dropdown-menu-right ${dropdownProfile ? 'show' : ''}`}>
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
              </a>
              <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
    </nav>
  );
}

export default Header;