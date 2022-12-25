import { InteractiveImage } from '../components/ InteractiveImage/InteractiveImage';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';

import styles from './App.module.css';

function App() {
  return (
    <Layout>
      <InteractiveImage />
      <Section />
    </Layout>
  );
}

export default App;
