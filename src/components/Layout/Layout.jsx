import React, { useState, useEffect, useRef } from 'react';
import styles from './Layout.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { scrollIntoView } from 'seamless-scroll-polyfill'

const categories = [
  { name: 'About', id: 'about' },
  { name: 'AI', id: 'ai' },
  { name: 'Web', id: 'web' },
  { name: 'Mobile', id: 'mobile' },
  { name: 'Games', id: 'games' },
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
    scrollIntoView(element, { behavior: 'smooth' });
  };

  return (
    <div className={styles.navbar} ref={navbarRef}>
      {
        categories.map(({ name, id }) =>
          <div
            key={id}
            onClick={handleNavClick(id)}
            className={`${styles.navItem} 
            ${id === currentCategoryId ? styles.navItemSelected : ''}`}>{name}</div>
        )
      }
    </div>
  );
};

export const Layout = ({ children }) => {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    videoRef.current.addEventListener('canplaythrough', (e) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Router>
      <div
        className={styles.loaderContainer}
        style={{ visibility: isLoading ? 'visible' : 'hidden' }}>
        <span className={styles.loader} />
      </div>

      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        src="/videos/cosmere.mp4"
        poster="/images/cosmere.jpg" />

      <Navbar />

      <div className={styles.childrenContainer}>
        {children}
      </div>
    </Router>
  );
};
