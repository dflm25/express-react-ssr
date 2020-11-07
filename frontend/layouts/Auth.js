/**
 * Layout administrator
 */
import React from 'react';
import Head from 'next/head';

const Admin = (props) => {
  const { children } = props;

  return (
    <div id="app">
      <Head>
        <title>Login</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
      </Head>
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="login-brand">
                Geek
              </div>
              <div className="card card-primary">
                <div className="card-header"><h4>Login</h4></div>
                <div className="card-body">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin;