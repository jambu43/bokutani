
import Hero from '@/components/home/hero';
import Immersion from '@/components/home/immersion';
import Games from '@/components/home/games';
import Activity from '@/components/home/activity';
import HowItworks from '@/components/home/howItworks';
import Testimony from '@/components/home/testimony';
import Events from '@/components/home/events';
import EsportVideo from '@/components/home/esportVideo';
import News from '@/components/home/news';
import Community from '@/components/home/community';
import Faq from '@/components/home/faq';
export default function Home() {


  return (
    <div className="min-h-scree text-white bg-white">
      <Hero />
      <Immersion />
      <Games />
      <Activity />
      <HowItworks />
      <Testimony />
      <Events />
      <EsportVideo />
      <News />
      {/* <Community /> */}
      <Faq />
    </div>
  );
}
