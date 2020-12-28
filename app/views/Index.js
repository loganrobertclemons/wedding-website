import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Logan &amp; Cameron's wedding website</Link></h2>
          <p>Learn more about our wedding.</p>
        </div>
      </header>
      <p> Welcome to our wedding website. Please feel free to read more <Link to="/about">about us</Link>,
        or you can check out information about our {' '}
        <Link to="/venues">venues</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <p>Source available <a href="https://github.com/loganrobertclemons/wedding-website">here</a>.</p>
    </article>
  </Main>
);

export default Index;
