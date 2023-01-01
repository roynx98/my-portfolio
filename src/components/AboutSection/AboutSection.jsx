import React from 'react';
import { About } from '../About/About';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const AboutSection = () => {
  return (
    <Section
      title="Roy Rodriguez"
      id="about"
      image="/images/picture.jpeg"
      round
      marginTop={100}
      subtitle="Portfolio">
      <About />
    </Section>
  );
};
