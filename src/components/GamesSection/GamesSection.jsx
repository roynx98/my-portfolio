import React from 'react';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const GamesSection = () => {
  return (
    <Section
      title="Games"
      id="games"
      image="/images/games.png">

      <ProyectsGrid>

        <Proyect
          title="Mitosis"
          imageSize='contain'
          image="/images/proyects/mitosis.gif">
          <p>
            Mitosis is a simple game for Andoroid, where you need to avoid the oncoming enemies.
            It has more than <b>5,000 downloads</b>
          </p>

          <a>
            Play Store Links
          </a>
        </Proyect>

        <Proyect
          title="Nupp"
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
