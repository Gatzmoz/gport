import Image from 'next/image';

import AppleCardsCarouselDemo from '@/components/example/apple-cards-carousel-demo-2';
import HeroParallaxDemo from '@/components/example/hero-parallax-demo';

export default function Home() {
  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <Image
          src={'/assets/images/logo/gatzmoz.png'}
          alt={'Gatmoz'}
          width={200}
          height={200}
          quality={100}
        />
        <p className="text-2xl font-light">Gatzmoz's Portfolio</p>
      </div>
    </main>
  );
}
