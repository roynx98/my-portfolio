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
          imageSize="contain"
          image="/images/proyects/mitosis.gif">
          <p>
            Mitosis is a simple game for Android, where you are a cell that needs to avoid oncoming cell enemies in order to survive.
          </p>
          <p>
            Is the first game that I made, now it has more than <b>5,000 downloads</b>
          </p>

          <div style={{ flex: 1 }} />

          <a href="https://play.google.com/store/apps/details?id=mx.rrodriguezv.game.android" target="_blank">View it on Google Play</a>
        </Proyect>

        <Proyect
          title="Nupp"
          imageSize="contain"
          image="/images/proyects/nupp.webp">
          <p>
            Nuup is challenge minimal puzzle game for Android, your target is try to connect al the block of the same color.
          </p>

          <p>
            I made this game as a school project.
          </p>

          <div style={{ flex: 1 }} />

          <a href="https://play.google.com/store/apps/details?id=com.royrodriguez.nuupf" target="_blank">View it on Google Play</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
