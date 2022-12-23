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
  console.log(styles)

  return (
    <>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        src="/videos/hola.mp4"
        poster="/images/cosmere.jpeg" />

      <div className={styles.navbar}>
        {/* <h2>
          Roy Rodriguez
        </h2> */}
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
