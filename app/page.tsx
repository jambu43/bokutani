
import Hero from '@/components/home/hero';
import Immersion from '@/components/home/immersion';
import Games from '@/components/home/games';

export default function Home() {


  return (
    <div className="min-h-scree text-white">
      <Hero />
      <Immersion />
      <Games />
    </div>
  );
}
