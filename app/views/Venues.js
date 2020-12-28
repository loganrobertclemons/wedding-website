import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Venues/Cell';
import data from '../data/venues';

const Venues = () => (
  <Main>
    <Helmet title="Venues" />
    <article className="post" id="venues">
      <header>
        <div className="title">
          <h2><Link to="/venues">Venues</Link></h2>
          <p>A selection of venues</p>
        </div>
      </header>
      {data.map((venues) => (
        <Cell
          data={venues}
          key={venues.title} 
        />
      ))}
    </article>
  </Main>
);

export default Venues;
