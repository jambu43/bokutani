'use client';

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
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function Home() {
  return (
    <div className="min-h-scree text-white bg-white">
      <Hero />
      {/* Immersion - Animation scale avec effet dramatique */}
      <ScrollAnimation direction="scale" delay={0.2}>
        <Immersion />
      </ScrollAnimation>
      {/* Games - Animation slide depuis la droite avec rotation */}
      <ScrollAnimation direction="slideRight" delay={0.1}>
        <Games />
      </ScrollAnimation>
      {/* <Activity /> */}
      {/* HowItworks - Animation depuis la gauche */}
      <ScrollAnimation direction="slideLeft" delay={0.15}>
        <HowItworks />
      </ScrollAnimation>
      {/* Testimony - Animation fade avec scale */}
      <ScrollAnimation direction="fade" delay={0.2}>
        <Testimony />
      </ScrollAnimation>
      {/* Events - Animation scale dramatique */}
      <ScrollAnimation direction="scale" delay={0.1}>
        <Events />
      </ScrollAnimation>
      {/* EsportVideo - Animation depuis le bas avec zoom */}
      <ScrollAnimation direction="up" delay={0.2}>
        <EsportVideo />
      </ScrollAnimation>
      {/* News - Animation depuis la droite */}
      <ScrollAnimation direction="slideRight" delay={0.15}>
        <News />
      </ScrollAnimation>
      {/* <Community /> */}
      {/* FAQ - Animation fade avec scale */}
      <ScrollAnimation direction="fade" delay={0.1}>
        <Faq />
      </ScrollAnimation>
    </div>
  );
}
