import { Layout } from '../components/Layout/Layout';
import { ProyectsGrid } from '../components/ProyectsGrid/ProyectsGrid';
import { Section } from '../components/Section/Section';

function App() {
  return (
    <Layout>

      <Section
        title="Roy Rodriguez"
        id="home"
        image="/images/picture.jpeg"
        round
        subtitle="Portfolio"
        text="I am a software developer with a passion for learning and problem solving. I started my development journey making mobile apps and games on my own, since then I have worked with many technologies, from game engines, JS frameworks to backend services." />

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

      <div style={{ height: 200, backgroundColor: 'black', width: '100%', marginTop: 200}}>

      </div>

    </Layout>
  );
}

export default App;
