import React from 'react';

import styles from './ProyectsGrid.module.css';

export const ProyectsGrid = ({ children }) => {

  return (
    <div className={styles.container}>
      <div className={styles.proyectsContainer}>
        { children }
      </div>
    </div>
  );
};
