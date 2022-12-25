import KUTE from 'kute.js';
import React, { useEffect, useRef } from 'react';

import styles from './Section.module.css';

export const Section = () => {
  const blobRef = useRef();
  const firstPathRef = useRef();
  const secondPathRef = useRef();

  useEffect(() => {
    if (!firstPathRef.current || !secondPathRef.current) {
      return;
    }

    const tween = KUTE.fromTo(
      firstPathRef.current,
      { path: firstPathRef.current },
      { path: secondPathRef.current },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();

    return () => {
      tween.stop();
    };

  }, [firstPathRef.current, secondPathRef.current]);

  return (
    <div className={styles.container}>

      <svg ref={blobRef} className={styles.blob} viewBox="0 0 1440 320">
        <path id="blob1" ref={firstPathRef} fill="#000" d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,165.3C560,171,640,117,720,128C800,139,880,213,960,240C1040,267,1120,245,1200,229.3C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        <path id="blob2" ref={secondPathRef} style={{ visibility: 'hidden' }} fill="#000" d="M0,64L40,74.7C80,85,160,107,240,96C320,85,400,43,480,58.7C560,75,640,149,720,154.7C800,160,880,96,960,74.7C1040,53,1120,75,1200,96C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>

      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <p className={styles.title}>Roy Rodriguez</p>
          <p className={styles.subTitle}>Full Stack Developer</p>
          <p className={styles.text}>
            I am a software developer with a passion for learning and problem solving. I started my development journey making mobile apps and games on my own, since then I have worked with many technologies, from game engines, JS frameworks to backend services.
          </p>
          <p className={styles.text}>
            Due to my previous experience, I will be able to provide high quality software. Willing and able to work remotely.
          </p>
        </div>
      </div>

      <svg viewBox="0 0 1 1">
        <polygon fill="black" points="0,0 0.5,0.05 1,0" />
      </svg>
    </div>
  );
};
