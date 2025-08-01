'use client';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';

const team = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'Passionate about building innovative solutions and leading great teams.',
    image: '/team/placeholder.jpg', // You'll need to add team photos
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'mailto:john@naktor.com',
    },
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Tech leader with 10+ years experience building scalable systems.',
    image: '/team/placeholder.jpg',
    social: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'mailto:jane@naktor.com',
    },
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Design',
    bio: 'Creative designer focused on user experience and beautiful interfaces.',
    image: '/team/placeholder.jpg',
    social: {
      twitter: 'https://twitter.com/mikejohnson',
      linkedin: 'https://linkedin.com/in/mikejohnson',
      email: 'mailto:mike@naktor.com',
    },
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-7xl pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              We're a passionate group of individuals working together to create amazing products and services.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <Card key={person.name}>
                <div className="flex flex-col items-center p-8">
                  <div className="h-24 w-24 rounded-full bg-zinc-700 mb-6"></div>
                  <h3 className="text-xl font-semibold leading-7 text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-zinc-400">
                    {person.role}
                  </p>
                  <p className="mt-4 text-center text-sm leading-6 text-zinc-300">
                    {person.bio}
                  </p>
                  
                  <div className="mt-6 flex gap-4">
                    {person.social.twitter && (
                      <Link
                        href={person.social.twitter}
                        target="_blank"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                      >
                        <Twitter size={20} />
                      </Link>
                    )}
                    {person.social.linkedin && (
                      <Link
                        href={person.social.linkedin}
                        target="_blank"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                      >
                        <Linkedin size={20} />
                      </Link>
                    )}
                    {person.social.github && (
                      <Link
                        href={person.social.github}
                        target="_blank"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {person.social.email && (
                      <Link
                        href={person.social.email}
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                      >
                        <Mail size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}