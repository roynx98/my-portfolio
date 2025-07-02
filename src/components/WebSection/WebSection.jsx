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
          centerImage={false}
          image="/images/proyects/wsj.png">
          <p>
            The Wall Street Journal is one of the most import news site on US, I was part of the <b>Ad Tech Team</b> we touched fronted and backend, our job was to set the ads on the page, we used techonliges like GPT, prebid, Amazon TAM.
          </p>

          <div style={{ flex: 1 }} />
          <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
        </Proyect>

        <Proyect
          title="Caliente Casino"
          centerImage={false}
          image="/images/proyects/caliente.png">
          <p>
            Caliente is the biggest online cacino in Mexico, my job was to migrate the old components made with Backbone to React.
          </p>
          <div style={{ flex: 1 }} />
          <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
