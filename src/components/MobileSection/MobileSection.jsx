import React from 'react';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const MobileSection = () => {
  return (
    <Section
      title="Mobile"
      id="mobile"
      image="/images/mobile.png">

      <ProyectsGrid>

        <Proyect
          title="Follow"
          imageSize='contain'
          image="/images/proyects/follow.png">
          <p>
            Follow is an iOS and Android app that sends your current location at specific time intervals, with the objective of providing security through real-time monitoring.
          </p>
          <p>I created this app from scratch using iOS native techinlogies like UIView and Core Location.</p>
          <div style={{ flex: 1 }} />
          <a href="https://apps.apple.com/us/app/ilsp-follow-rastreo-satelital/id1458556399" target="_blank">View it on App Store</a>
        </Proyect>

        <Proyect
          title="Transittion button android"
          imageSize='contain'
          image="/images/proyects/transition.gif">

          <p>
            It's a android library  that contains a button with screen animations for transition and error states.
          </p>
          <p>
            I made this library in my free time, now it has more than <b>130 starts on GitHub.</b>
          </p>

          <div style={{ flex: 1 }} />

          <a href="https://apps.apple.com/us/app/ilsp-follow-rastreo-satelital/id1458556399" target="_blank">View it on GitHub</a>
        </Proyect>
      </ProyectsGrid>
    </Section>
  );
};
