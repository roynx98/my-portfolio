import React from 'react';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const IASection = () => {
  return (
    <Section
      title="Artificial Intelligence"
      id="ai"
      image="/images/ml.png">

      <ProyectsGrid>

        <Proyect
          title="Generative Fortune Cookie"
          image="/images/proyects/cookie.gif">
          <p>A language model implemented from scratch using a decoder only transformer in PyTorch, trained on a dataset of 2,000 real fortune cookie messages.</p>
          <p>
            The model generates new, original fortunes with surprising accuracy and charm. It’s deployed on AWS, with the model hosted on S3 and served through an EC2 instance. The user-facing interface was built with Gradio.
          </p>
          <div style={{ flex: 1 }} />
          <a href="https://github.com/roynx98/generative-fortune-cookie" target="_blank">Check it on GitHub</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
