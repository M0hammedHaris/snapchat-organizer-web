
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { Download } from './components/download/Download';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
