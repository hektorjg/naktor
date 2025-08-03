import Link from 'next/link';
import React from 'react';
import Logo from './components/logo';
import Particles from './components/particles';

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col items-center justify-center px-4">
        <nav className="mb-4 animate-fade-in">
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
        
        <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block mb-1" />
        
        <Particles
          className="-z-10 absolute inset-0 animate-fade-in"
          quantity={100}
        />
        
        <div className="z-10 flex animate-fade-in flex-col items-center justify-center">
          <Logo className="mb-1 w-72 animate-title sm:w-[450px] md:w-[600px] lg:w-[750px]" />
        </div>

        <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block mt-1" />
        
        <div className="mt-4 animate-fade-in text-center">
          <h2 className="text-sm text-zinc-500">
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
    </div>
  );
}
