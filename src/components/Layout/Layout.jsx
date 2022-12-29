import React from 'react';
import styles from './Layout.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const categories = [
  { name: 'Home', id: '' },
  { name: 'Web', id: 'web' },
  { name: 'Games', id: 'games' },
  { name: 'Mobile', id: 'mobile' },
];

export const Layout = ({ children }) => {
  return (
    <Router>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        src="https://cosmere.es/wp-content/uploads/2021/08/Fondocosmere.mp4"
        poster="/images/cosmere.jpeg" />

      <div className={styles.navbar}>
        {
          categories.map(({ name, id }) =>
            <HashLink to={`#${id}`} smooth>{name}</HashLink>
          )
        }
      </div>

      <div className={styles.childrenContainer}>
        {children}
      </div>
    </Router>
  );
};
