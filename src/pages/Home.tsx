import { Hero } from '../components/hero/Hero';
import { Features } from '../components/features/Features';
import { Download } from '../components/download/Download';

export const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <Download />
        </main>
    );
};
