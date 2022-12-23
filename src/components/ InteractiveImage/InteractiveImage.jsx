
import React from 'react';

import styles from './InteractiveImage.module.css';

export const InteractiveImage = () => {

  return (
    <div className={styles.container}>
      <img
        src="/images/fondo2.png"
        alt="Picture of the author"
        width={500}
        height={500} />

      {/* <img
        src="/images/picture.jpeg"
        alt="Picture of the author"
        width={200}
        height={200} /> */}

    </div>
  );
};
