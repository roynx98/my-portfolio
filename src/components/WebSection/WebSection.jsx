import React from 'react';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const WebSection = () => {
  return (
    <Section
      title="Web"
      id="web"
      image="/images/web.png">

      <ProyectsGrid>

        <Proyect
          title="The Wall Street Journal"
          image="/images/proyects/wsj.png">
          <p>
            The Wall Street Journal is on of the most import news site on US,
            I was part of the <b>Ad Tech Team</b>, ur job was to set the ads on the page, we used techonliges like GPT, prebid, Amazon TAM.
          </p>
          <br />
          <p>
            You can view the live website at: <a href="https://www.wsj.com/" target="_blank">WSJ</a>
          </p>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
