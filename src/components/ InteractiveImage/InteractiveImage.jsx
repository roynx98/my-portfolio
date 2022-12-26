
import React, { useEffect, useRef, useState } from 'react';

import styles from './InteractiveImage.module.css';
import { isMobile } from 'react-device-detect';

export const InteractiveImage = ({ style, foregroundTransitionScale = 3 }) => {
  const containerRef = useRef();
  const [offset, setOffest] = useState([0, 0]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const mousemoveListener = ({ x, y }) => {
      if (!containerRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const mx = containerRect.x + containerRect.width / 2;
      const my = containerRect.y + containerRect.height / 2;
      const scale = 0.01;
      const offsetX = (x - mx) * scale;
      const offsetY = (y - my) * scale;

      setOffest([offsetX, offsetY]);
    };

    window.addEventListener('mousemove', mousemoveListener);

    return () => {
      window.removeEventListener('mousemove', mousemoveListener);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container} style={style}>
      <img
        className={styles.background}
        src="/images/cosmo.png"
        style={{ transform: `translate(${offset[0]}px, ${offset[1]}px)` }} />

      <img
        className={styles.foreground}
        style={{ transform: `translate(${offset[0] * foregroundTransitionScale}px, ${offset[1] * foregroundTransitionScale}px)` }}
        src="/images/picture.jpeg" />

    </div>
  );
};
