const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Logan Clemons',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Logan Clemons',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Logan Clemons',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Logan Clemons',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Logan Clemons',
    heading: 'CONTACT',
  },
  {
    route: '/music',
    title: 'Music | Logan Clemons',
    heading: 'SOME BANDS THAT I LIKE',
  },
];

export { pages, randomString };
