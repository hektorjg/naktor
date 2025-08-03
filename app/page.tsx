'use client';
import Link from 'next/link';
import Logo from './components/logo';
import { Navigation } from './components/nav';
import Particles from './components/particles';

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-tso-tl from-black via-zinc-900/95 to-black">
      <div className="flex flex-col items-center justify-center px-4">
        <Navigation variant="home" />

        <div className="mt-1 hidden h-px w-screen animate-glow bg-gradient-to-r from-primary to-secondary md:block" />

        <Particles
          className="-z-10 absolute inset-0 animate-fade-in"
          quantity={1000}
        />

        <div className="items-centerr z-10 flex animate-fade-in flex-col justify-center">
          <Logo className="my-32 w-auto" />
        </div>

        <div className="mt-1 hidden h-px w-screen animate-glow bg-gradient-to-r from-primary to-secondary md:block" />

        <div className="mt-4 animate-fade-in text-center">
          <h2 className="text-sm text-zinc-200">
            15+ years of expertise transforming business processes with Data and
            AI
          </h2>
        </div>
      </div>
    </div>
  );
}
