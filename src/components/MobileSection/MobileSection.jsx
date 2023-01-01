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
          title="The Wall Street Journal"
          image="/images/proyects/wsj.png">
          <p>
            The Wall Street Journal is on of the most import news site on US,
            I was part of the <b>Ad Tech Team</b>, ur job was to set the ads on the page, we used techonliges like GPT, prebid, Amazon TAM.
          </p>
          <p>
            You can view the live website at:
          </p>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
