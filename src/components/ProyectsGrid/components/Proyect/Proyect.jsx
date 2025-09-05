import React from 'react';

import styles from './Proyect.module.css';


export const Proyect = ({ title, image, children, imageSize= 'cover', backgroundPosition= 'top' }) => {

  return (
    <div className={styles.proyect}>
      <div className={styles.proyectImage} style={{ backgroundImage: `url(${image})`, backgroundSize: imageSize, backgroundPosition: backgroundPosition }} />
      <p className={styles.proyectTitle}>
        {title}
      </p>
      <div className={styles.proyectBody}>
        {children}
      </div>
    </div>
  );
};
