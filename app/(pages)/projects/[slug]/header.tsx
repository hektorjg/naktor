'use client';
import { ArrowLeft, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../components/logo';

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
};
export const Header: React.FC<Props> = ({ project }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: 'GitHub',
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: 'Website',
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
      ref={ref}
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 lg:bg-transparent lg:backdrop-blur-none ${
          isIntersecting
            ? 'border-transparent bg-zinc-900/0'
            : 'border-zinc-200 bg-white/10 lg:border-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link className="ml-4 flex items-center" href="/">
            <Logo className="h-20 w-auto max-w-[300px]" />
          </Link>

          <div className="flex justify-between gap-8">
            <Link
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? 'text-zinc-200 hover:text-primary'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
              href="/products"
            >
              Products
            </Link>
            <Link
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? 'text-zinc-200 hover:text-primary'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? 'text-zinc-200 hover:text-primary'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
              href="/team"
            >
              Team
            </Link>
            <Link
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? 'text-zinc-200 hover:text-primary'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
              href="/contact"
            >
              Contact
            </Link>
          </div>

          <div className="mr-4 flex justify-between gap-8">
            <Link href="https://twitter.com/naktor" target="_blank">
              <Twitter
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? 'text-zinc-200 hover:text-primary'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
            <Link href="https://github.com/naktor" target="_blank">
              <Github
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? 'text-zinc-200 hover:text-primary'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="container relative isolate mx-auto overflow-hidden py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-bold font-display text-4xl text-white tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-zinc-200 leading-8">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 font-semibold text-base text-white leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link href={link.href} key={link.label} target="_blank">
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
