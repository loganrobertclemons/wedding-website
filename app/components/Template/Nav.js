import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Logan Clemons</h2>
        <p><a href="mailto:clemonswedding2020@gmail.com">clemonswedding2020@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, We&apos;re getting married (again)! Check out more info 👇</p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/about` ? <Link to="/about" className="button">Learn More</Link> : <Link to="/venues" className="button">Venue Information</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; <Link to="/">loganrclemons.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
