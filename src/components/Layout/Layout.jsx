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
  { icon: '/images/mail.svg', url: '' }
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
          <div
            key={id}
            onClick={handleNavClick(id)}
            className={`${styles.navItem} 
            ${id === currentCategoryId ? styles.navItemSelected : ''}`}>{name}</div>
        )
      }

      {
        links.map(({ url, icon }) =>
          <div className={styles.iconContainer}>
            <svg className={styles.icon} fill="#000000" height="800px" width="800px" x="0px"
              y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
              <g id="mail-filled">
                <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z" />
              </g>
            </svg>
          </div>
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
