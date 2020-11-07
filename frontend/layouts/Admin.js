/**
 * Layout administrator
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

// components
import Footer from '../components/admin/Footer';
import Header from '../components/admin/Header';
import SideBar from '../components/admin/SideBar';

const Admin = (props) => {
  const { children } = props;
  const stateMenu = useSelector(state => state.stateMenu);

  useEffect(()=> {
    if (stateMenu) {
      document.body.classList.add('sidebar-mini');
    } else {
      document.body.classList.remove('sidebar-mini');
    }
  }, [stateMenu]);

  return (
    <div id="app">
      <Head>
        <title>Test</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
      </Head>
      <div className="main-wrapper">
        <div className="navbar-bg"></div>
        <Header />
        <SideBar />
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Blank Page</h1>
            </div>
            <div className="section-body">
              {children}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Admin;