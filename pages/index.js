import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Letter from '../components/Letter';
import ExtraSection from '../components/ExtraSection';
import Poem from '../components/Poem';
import Footer from '../components/Footer';

export default function Home() {
return (
<>
<Hero />
<Gallery />
<Letter />
<ExtraSection title="Moments That Make Me Smile" content="Every little thing you do stays in my heart — your jokes, your kind words, your quiet presence. Even a single memory of us together can light up my whole day." />
<Poem />
<ExtraSection title="Promises for You" content="I promise to always keep your heart safe, to cheer for your dreams, and never let distance make us forget the magic we share." />
<Footer />
</>
);
}