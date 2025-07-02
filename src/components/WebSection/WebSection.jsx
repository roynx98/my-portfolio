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
            As part of the Ad Tech team at one of the most prominent news platforms in the U.S., I worked across both frontend and backend to manage and optimize ad delivery on high-traffic pages. Our work directly influenced ad visibility and revenue. We leveraged technologies like Google Publisher Tags (GPT), Prebid.js, and Amazon TAM to implement and fine-tune ad placements across the site.
          </p>

          <div style={{ flex: 1 }} />
          <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
        </Proyect>

        <Proyect
          title="Caliente Casino"
          image="/images/proyects/caliente.png">
          <p>
            Contributed to the modernization of Caliente’s platform by implementing new features and doing the migration of legacy components from Backbone.js to React. This work improved maintainability, performance, and user experience across the site.
          </p>
          <div style={{ flex: 1 }} />
          <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
