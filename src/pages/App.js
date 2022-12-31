import { About } from '../components/About/About';
import { Fotter } from '../components/Footer/Fotter';
import { Layout } from '../components/Layout/Layout';
import { ProyectsGrid } from '../components/ProyectsGrid/ProyectsGrid';
import { Section } from '../components/Section/Section';

function App() {
  return (
    <Layout>

      <Section
        title="Roy Rodriguez"
        id="about"
        image="/images/picture.jpeg"
        round
        marginTop={100}
        subtitle="Portfolio">
        <About />
      </Section>

      <Section
        title="Web"
        id="web"
        image="/images/web.png">
        <ProyectsGrid />
      </Section>

      <Section
        title="Games"
        image="/images/games.png"
        id="games">
        <ProyectsGrid />
      </Section>

      <Section
        title="Mobile"
        image="/images/mobile.png"
        id="mobile">
        <ProyectsGrid />
      </Section>

    </Layout>
  );
}

export default App;
