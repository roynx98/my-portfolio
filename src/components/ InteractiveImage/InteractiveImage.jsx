
import React, { useRef, useState } from 'react';

import styles from './InteractiveImage.module.css';

export const InteractiveImage = (props) => {
  const {
    style,
    src,
    round = false,
    id
  } = props;

  return (
    <div className={`${styles.container}`} style={style}>
      <div className={`${styles.mark}`} id={id} />
      <img
        className={styles.background}
        src="/images/cosmo.png" />

      <img
        className={styles.foreground}
        style={{
          borderRadius: round ? 1000 : 0
        }}
        src={src} />
    </div>
  );
};
