import { cn } from '@/lib/utils';
import { ArrowRight, Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import TypingAnimation from '../ui/typing-animation';
import Image from 'next/image';
import { AnimateElement } from '../ui/animated-wrapper';

const DynamicVideo = dynamic(() => import('./video'), {
  ssr: false,
  loading: () => (
    <div className="z-10 mx-16 mt-10 flex items-center justify-center">
      <img
        src="/images/video-thumbnail.png"
        alt="video-thumbnail"
        className="h-full w-full max-w-[1046px] rounded-xl object-cover"
        style={{
          boxShadow:
            '0px 32px 64px -20px rgba(0, 91, 129, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
        }}
      />
    </div>
  ),
});

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="absolute left-28 top-28 z-10"
        src="/images/header-1.svg"
        alt="hero-bg"
        width={136}
        height={100}
        style={{ width: '136px', height: '100px' }}
      />
      <Image
        className="absolute -top-8 right-64 z-10"
        src="/images/header-2.svg"
        alt="hero-bg"
        width={181}
        height={115}
        style={{ width: '181px', height: '115px' }}
      />
      <Image
        className="absolute right-36 top-[330px] z-10"
        src="/images/header-3.svg"
        alt="hero-bg"
        width={153}
        height={92}
        style={{ width: '153px', height: '92px' }}
      />

      <div className="relative flex min-h-[1000px] w-full flex-col overflow-hidden rounded-lg py-20">
        <div className="z-10 whitespace-pre-wrap text-center tracking-tighter text-black dark:text-white">
          <TypingAnimation
            className="text-[80px] font-bold leading-[97px]"
            text="Sailos DevBox"
          />
          <AnimateElement type="slideUp" delay={0.2} duration={0.6}>
            <div
              className="mx-auto my-6 max-w-[700px] text-base font-medium text-custom-secondary-text"
              style={{ letterSpacing: '0.15px' }}
            >
              Development sandboxes, establish various programming language
              environments and database dependencies with a single click in the
              cloud, connect via IDE to streamline development environment setup
              and automate deployment and releases.
            </div>

            <div className="flex items-center justify-center gap-4 text-base font-medium">
              <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-custom-bg py-2 pl-5 pr-4 text-custom-primary-text shadow-button hover:bg-[#97D9FF]">
                Get Started
                <ArrowRight className="relative h-4 w-4" />
              </div>
              <div className="flex cursor-pointer items-center justify-center gap-[6px] rounded-md bg-[#FAFCFF] px-5 py-2 text-custom-primary-text shadow-button hover:bg-[#F1F5FB]">
                Contact Us
              </div>
            </div>
          </AnimateElement>
        </div>

        <DynamicVideo />

        <AnimatedGridPattern
          width={72}
          height={72}
          numSquares={200}
          maxOpacity={0.5}
          duration={1}
          // repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
            // 'inset-x-0 inset-y-[-10%] h-[200%]',
            // 'bg-[#cce4f7]',
            'top-10 h-[600px]',
          )}
        />
      </div>
      <div className="z-1 absolute bottom-32  h-[400px] w-full bg-[#99E0FFB2] blur-[200px]"></div>
    </div>
  );
}
