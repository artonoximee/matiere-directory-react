import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer text-bg-dark border-top border-secondary text-center">
      <p>
        <a href="https://github.com/artonoximee/matiere-directory-js" className="btn btn-sm btn-outline-light" target="_blank"><i className="fa-brands fa-github"></i></a> <a href="mailto:contact@mlav.land" className="btn btn-sm btn-outline-light">Contact</a>
      </p>
    </div>
  )
}

export default Footer;