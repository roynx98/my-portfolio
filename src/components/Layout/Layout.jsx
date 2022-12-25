import React from 'react';
import styles from './Layout.module.css'

const categories = [
  { name: 'Home' },
  { name: 'Web' },
  { name: 'Games' },
  { name: 'About' },
  { name: 'Resume' },
];

export const Layout = ({ children }) => {
  return (
    <>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        src="https://cosmere.es/wp-content/uploads/2021/08/Fondocosmere.mp4"
        poster="/images/cosmere.jpeg" />

      <div className={styles.navbar}>
        {
          categories.map(({ name }) =>
            <p key={name}>{name}</p>
          )
        }
      </div>

      {children}
    </>
  );
};
