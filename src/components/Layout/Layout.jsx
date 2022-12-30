import React, { useState, useEffect, useRef } from 'react';
import styles from './Layout.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { scrollIntoView } from 'seamless-scroll-polyfill'

const categories = [
  { name: 'Home', id: 'home' },
  { name: 'Web', id: 'web' },
  { name: 'Games', id: 'games' },
  { name: 'Mobile', id: 'mobile' },
];

const Navbar = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState('home')
  const navbarRef = useRef();

  useEffect(() => {
    const categoriesDom = document.querySelectorAll('.category');
    let lastCategoryId = currentCategoryId;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries.filter(e => e.isIntersecting)[0];
      if (!entry) {
        return;
      }
      const { id } = entry.target;
      if (id !== lastCategoryId) {
        lastCategoryId = id;
        setCurrentCategoryId(lastCategoryId);
      }
    }, {
      rootMargin: '0px 0px -40% 0px'
    });

    categoriesDom.forEach((category) => {
      observer.observe(category);
    });
  }, []);

  const handleNavClick = (id) => () => {
    const element = document.getElementById('scroll' + id);
    scrollIntoView(element, { behavior: 'smooth', top: 200, left: 0 });
  };

  return (
    <div className={styles.navbar} ref={navbarRef}>
      {
        categories.map(({ name, id }) =>
          <p
            key={id}
            onClick={handleNavClick(id)}
            className={`${styles.navItem} ${id === currentCategoryId ? styles.navItemSelected : ''}`}>{name}</p>
        )
      }
    </div>
  );
};

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

      <Navbar />

      <div className={styles.childrenContainer}>
        {children}
      </div>
    </Router>
  );
};
