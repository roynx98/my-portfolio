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

          <div>
            <p>
              The Wall Street Journal is one of the most import news site on US, I was part of the <b>Ad Tech Team</b> we touched fronted and backend, our job was to set the ads on the page, we used techonliges like GPT, prebid, Amazon TAM.
            </p>

            <br></br>
            <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
          </div>

        </Proyect>

        <Proyect
          title="Caliente Casino"
          image="/images/proyects/caliente.png">
          <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

            <p style={{flex: 1}}>
              Caliente is the biggest online cacino in Mexico, my job was to  migraate the old components made with backbobje tp the new ones made on react.
            </p>


            <a href="https://www.caliente.mx/casino" target="_blank">View the live website</a>
          </div>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
