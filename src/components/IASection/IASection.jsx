import React from 'react';
import { Proyect } from '../ProyectsGrid/components/Proyect/Proyect';
import { ProyectsGrid } from '../ProyectsGrid/ProyectsGrid';
import { Section } from '../Section/Section';

export const IASection = () => {
  return (
    <Section
      title="AI FLOWS"
      id="ai"
      image="/images/ml.png">

      <ProyectsGrid>

        <Proyect
          title="CRM with Airtable/GHL Integration and Zoom AI Meeting Reports"
          imageSize='contain'
          backgroundPosition='center'
          image="/images/proyects/crm-zoom.png">
            <p>It’s a n8n flow where, when the user fills out a form, a new contact is added to GHL/Airtable and placed into a pipeline. I also trigger a GHL campaign to send an email as soon as the contact enters the pipeline.</p>
            <p>The email includes a Zoom meeting link for a follow up. After the meeting ends, I capture the transcription and generate an AI summary. I use Airtable to store both the lead details and the meeting information.</p>
          <div style={{ flex: 1 }} />
          <a href="https://www.loom.com/share/6f1e3afd1d1348e68b99f117efd7a2c9" target="_blank">Check a Loom video</a>
        </Proyect>

        <Proyect
          title="Notion/Google Doc AI Report with Slack alerts"
          imageSize='cover'
          backgroundPosition='center'
          image="/images/proyects/notion.png">
            <p>A n8n flow, that generates a report from multiple sources, including a Notion page, then add a new row to a Notion database with the generated data, and finally send a message to Slack with a link to the Notion database.</p>
          <div style={{ flex: 1 }} />
          <a href="https://www.loom.com/share/3ca67deb6d0a4403970cba7e4c49520b?sid=65f26883-90b6-4857-bef7-950b0950e23d" target="_blank">Check a Loom video</a>
        </Proyect>

      </ProyectsGrid>

    </Section>
  );
};
