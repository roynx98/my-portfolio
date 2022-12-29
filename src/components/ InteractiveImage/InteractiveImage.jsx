
import React, { useEffect, useRef, useState } from 'react';

import styles from './InteractiveImage.module.css';
import { isMobile } from 'react-device-detect';

export const InteractiveImage = (props) => {
  const {
    style,
    foregroundTransitionScale = 3,
    src,
    round = false,
    id
  } = props;
  const containerRef = useRef();
  const [offset, setOffest] = useState([0, 0]);

  return (
    <div id={id} ref={containerRef} className={styles.container} style={style}>
      <img
        className={styles.background}
        src="/images/cosmo.png"
        style={{ transform: `translate(${offset[0]}px, ${offset[1]}px)` }} />

      <img
        className={styles.foreground}
        style={{
          transform: `translate(${offset[0] * foregroundTransitionScale}px, ${offset[1] * foregroundTransitionScale}px)`,
          borderRadius: round ? 1000 : 0
        }}
        src={src} />
    </div>
  );
};
