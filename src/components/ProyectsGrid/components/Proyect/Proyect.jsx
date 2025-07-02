import React from 'react';

import styles from './Proyect.module.css';


export const Proyect = ({ title, image, children, imageSize= 'cover', centerImage=true }) => {

  return (
    <div className={styles.proyect}>
      <div className={centerImage ? styles.proyectImage : styles.proyectImageNoCenter } style={{ backgroundImage: `url(${image})`, backgroundSize: imageSize }} />
      <p className={styles.proyectTitle}>
        {title}
      </p>
      <div className={styles.proyectBody}>
        {children}
      </div>
    </div>
  );
};
