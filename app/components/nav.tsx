'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Logo from './logo';
import LogoAlt from './logo-alt';

interface NavigationProps {
  variant?: 'home' | 'page';
}

const navigationItems = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ variant = 'page' }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isHome = variant === 'home';

  const isActivePage = (href: string) => pathname === href;

  if (isHome) {
    // Inline navigation for home page
    return (
      <nav className="mb-4 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigationItems.map((item) => (
            <Link
              className={`text-sm duration-500 hover:text-primary ${
                isActivePage(item.href) ? 'text-primary' : 'text-zinc-200'
              }`}
              href={item.href}
              key={item.href}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
          isIntersecting
            ? 'border-transparent bg-zinc-900/0'
            : 'border-zinc-800 bg-zinc-900/500'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link className="ml-4 flex items-center" href="/">
            <LogoAlt className="h-6" />
          </Link>

          <div className="mr-4 flex justify-between gap-8">
            {navigationItems.map((item) => (
              <Link
                className={`duration-500 hover:text-primary ${
                  isActivePage(item.href) ? 'text-primary' : 'text-zinc-200'
                }`}
                href={item.href}
                key={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
