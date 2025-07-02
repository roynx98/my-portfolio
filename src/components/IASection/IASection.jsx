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
          <p>
            A alnguage model implemented by a decoder transfromer built from scratch using PyTorch to generate fortune cookies messages, I trained it with a dataset of 2000 fortune cookies, the model is able to generate new ones.
            It was deployed on AWS EC2 and the model is store on S3, the frontend was made with Gradio.
          </p>

          <div style={{ flex: 1 }} />
          <a href="https://github.com/roynx98/generative-fortune-cookie" target="_blank">Check it on GitHub</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
