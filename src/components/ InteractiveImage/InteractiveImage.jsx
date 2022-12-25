
import React, { useEffect, useRef, useState } from 'react';

import styles from './InteractiveImage.module.css';

export const InteractiveImage = () => {
  const containerRef = useRef();
  const [offset, setOffest] = useState([100, 0]);

  useEffect(() => {
    window.addEventListener('mousemove', ({x, y}) => {
      if (!containerRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const mx = containerRect.x + containerRect.width / 2;
      const my = containerRect.y + containerRect.height / 2;
      const scale = 0.01;
      const max = 10;
      const offsetX = (x - mx) * scale;
      const offsetY = (y - my) * scale;


      setOffest([offsetX, offsetY]);
    });
  }, []);
  
  return (
    <div ref={containerRef} className={styles.container}>
      <img
        src="/images/fondo2.png"
        style={{transform: `translate(${offset[0]}px, ${offset[1]}px)`}}
        width={500}
        height={500} />

      <img
        className={styles.foreground}
        style={{transform: `translate(${offset[0] * 2}px, ${offset[1] * 2}px)`}}
        src="/images/picture.jpeg"
        alt="Picture of the author"
        width={200}
        height={200} />

    </div>
  );
};
