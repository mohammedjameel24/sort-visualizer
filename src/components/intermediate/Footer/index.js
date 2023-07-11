import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        made with {' '}
        <span className="Footer__Heart">&hearts;</span>{' '}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        > Hosted on Git
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://www.linkedin.com/in/mohdjamil2412/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Mohd Jamil
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
