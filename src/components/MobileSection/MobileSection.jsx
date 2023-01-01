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
            Foollow is an Androdi and iOS app
          that sends your location at specfit time intervals, with the objective of providing security through real-time monitoring.
          </p>
          <p>
            You can view the live website at:
          </p>
        </Proyect>

        <Proyect
          title="Transittion button android"
          imageSize='contain'
          image="/images/proyects/transition.gif">
          <p>
          It's a android library created by me, that contains a button with screen animations for transition and error states.
          It has more than <b>130 starts on GitHub</b>
          </p>
          <p>
            You can view the live website at:
          </p>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
