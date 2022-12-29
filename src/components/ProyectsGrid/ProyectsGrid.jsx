import React from 'react';

import styles from './ProyectsGrid.module.css';

export const ProyectsGrid = () => {
  return (
    <div className={styles.container}>

      <div className={styles.itemsContainer}>

        <div className={styles.item}>
          <div className={styles.itemImage} style={{ backgroundImage: 'url(/images/proyects/wsj.png)' }} />
          <p className={styles.itemTitle}>
            The Wall Strret Jorunal
          </p>
          <p className={styles.itemBody}>
            Existe una historia detrás de la historia un secreto que trasciende las sagas y conecta todos los mundos ¿Qué es el Cosmere? ¿Cuál es su origen y que sabemos hasta ahora? Descúbrelo en esta sección
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemImage} style={{ backgroundImage: 'url(/images/proyects/wsj.png)' }} />
          <p className={styles.itemTitle}>
            The Wall Strret Jorunal
          </p>
          <p className={styles.itemBody}>
            Existe una historia detrás de la historia un secreto que trasciende las sagas y conecta todos los mundos ¿Qué es el Cosmere? ¿Cuál es su origen y que sabemos hasta ahora? Descúbrelo en esta sección
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.itemImage} style={{ backgroundImage: 'url(/images/proyects/wsj.png)' }} />
          <p className={styles.itemTitle}>
            The Wall Strret Jorunal
          </p>
          <p className={styles.itemBody}>
            Existe una historia detrás de la historia un secreto que trasciende las sagas y conecta todos los mundos ¿Qué es el Cosmere? ¿Cuál es su origen y que sabemos hasta ahora? Descúbrelo en esta sección
          </p>
        </div>

      </div>
    </div>
  );
};
