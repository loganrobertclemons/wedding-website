import React, { useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const firstDateTime = new Date('2017-07-13T18:30:00');
    const anniversaryTime = new Date('2020-11-07T14:00:00')
    setData({
      ...data,
      age: {
        label: 'How many years we have been together',
        value: ((Date.now() - firstDateTime) / divisor).toFixed(11),
      },
      anniversary: {
        label: 'How many years since our covid wedding',
        value: ((Date.now() - anniversaryTime) / divisor).toFixed(11)
      }
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <h3>Some stats about us</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;
