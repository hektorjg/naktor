import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
              href={item.href}
              key={item.href}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="-z-10 absolute inset-0 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-4xl text-edge-outline text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        naktor
      </h1>

      <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="my-16 animate-fade-in text-center">
        <h2 className="text-sm text-zinc-500 ">
          Innovative technology solutions for modern businesses.{' '}
          <Link
            className="underline duration-500 hover:text-zinc-300"
            href="/products"
          >
            Explore our products
          </Link>{' '}
          and{' '}
          <Link
            className="underline duration-500 hover:text-zinc-300"
            href="/services"
          >
            services
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
