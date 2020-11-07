/**
 * Footer component
 */
import React from 'react';

const Footer = () => {

  return (
    <footer className="main-footer">
        <div className="footer-left">
          Copyright &copy; 2018 <div className="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
          <div className="bullet"></div> Integreted with express and next by <a href="https://www.ideasapp.co">Daniel Felipe Lucumi Marin</a>
        </div>
        <div className="footer-right">
          2.3.0
        </div>
    </footer>
  );
}

export default Footer;