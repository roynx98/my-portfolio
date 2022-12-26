import KUTE from 'kute.js';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getRandomString } from '../../utils/getRandomString';
import shuffle from '../../utils/shuffle';

import styles from './Section.module.css';

const blobIds = [
  'blob1',
  'blob2',
];

export const Section = () => {
  const blobRef = useRef();
  const [seed] = useState(getRandomString());

  useEffect(() => {
    const ch = shuffle(blobIds.map((bi) => `#${seed}${bi}`));

    const tween = KUTE.fromTo(
      `#${seed}initialBlob`,
      { path: ch[0] },
      { path: ch[1] },
      { repeat: 999, duration: 5000 + 5000 * Math.random(), yoyo: true }
    );

    setTimeout(() => {
      tween.start();
      console.log(ch);
    }, 1000);

    return () => {
      tween.stop();
    };

  }, []);

  return (
    <div className={styles.container}>
      <svg ref={blobRef} className={styles.blob} viewBox="0 0 1440 240">
        <path id={`${seed}initialBlob`} d="M0,224L30,197.3C60,171,120,117,180,90.7C240,64,300,64,360,101.3C420,139,480,213,540,213.3C600,213,660,139,720,96C780,53,840,43,900,53.3C960,64,1020,96,1080,106.7C1140,117,1200,107,1260,101.3C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        <path id={`${seed}blob1`} style={{ visibility: 'hidden' }} d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,165.3C560,171,640,117,720,128C800,139,880,213,960,240C1040,267,1120,245,1200,229.3C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        <path id={`${seed}blob2`} style={{ visibility: 'hidden' }} d="M0,0L34.3,48C68.6,96,137,192,206,218.7C274.3,245,343,203,411,192C480,181,549,203,617,202.7C685.7,203,754,181,823,154.7C891.4,128,960,96,1029,74.7C1097.1,53,1166,43,1234,74.7C1302.9,107,1371,181,1406,218.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>

      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <p className={styles.title}>Roy Rodriguez</p>
          <p className={styles.subTitle}>Full Stack Developer</p>
          <p className={styles.text}>
            I am a software developer with a passion for learning and problem solving. I started my development journey making mobile apps and games on my own, since then I have worked with many technologies, from game engines, JS frameworks to backend services.
          </p>
        </div>
      </div>

      <svg viewBox="0 0 1 1" className={styles.end}>
        <polygon fill="black" points="0,0 0.5,0.05 1,0" />
      </svg>
    </div>
  );
};
