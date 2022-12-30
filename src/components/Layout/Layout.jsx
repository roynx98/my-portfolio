import React, { useState, useEffect, useRef } from 'react';
import styles from './Layout.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { scrollIntoView } from 'seamless-scroll-polyfill'

const categories = [
  { name: 'Home', id: 'home' },
  { name: 'Web', id: 'web' },
  { name: 'Games', id: 'games' },
  { name: 'Mobile', id: 'mobile' }
];

const links = [
  { icon: 'fa fa-envelope', url: 'mailto:roynx98@gmail.com' },
  { icon: 'fa fa-github', url: 'https://github.com/roynx98' }
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

      {
        links.map(({ url, icon }) =>
          <div key={url} className={styles.iconContainer}>
            <a href={url}>
              <i className={`${icon} ${styles.icon}`} />
            </a>
          </div>
        )
      }
    </div>
  );
};

export const Layout = ({ children }) => {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    videoRef.current.addEventListener('loadeddata', (e) => {
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
