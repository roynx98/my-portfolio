import { AboutSection } from '../components/AboutSection/AboutSection';
import { GamesSection } from '../components/GamesSection/GamesSection';
import { Layout } from '../components/Layout/Layout';
import { MobileSection } from '../components/MobileSection/MobileSection';
import { WebSection } from '../components/WebSection/WebSection';
import { IASection } from '../components/IASection/IASection';

function App() {
  return (
    <Layout>
      <AboutSection />
      <IASection />
      <WebSection />
      <MobileSection />
      <GamesSection />
    </Layout>
  );
}

export default App;
