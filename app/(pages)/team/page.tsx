'use client';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../../components/card';

const team = [
  {
    name: '[Name]',
    role: 'CEO',
    bio: '15+ years in software development with specialization in Cloud + Data/Analytics + AI since 2014. Experience in innovation, research, and operational environments as a deep tech company executive.',
    achievements: [
      'International experience (ES, SW, USA, BR)', 
      'Multiple public interventions: AWS Summit, Big Data London',
      'Professor at URJC Data Science Master (DSLab)',
      'Patents in 5G and Cloud technologies',
      'Successful implementations in Banking, Insurance, Retail, Healthcare, Telco, and Public Administration'
    ],
    image: '/team/placeholder.jpg',
    social: {
      linkedin: '#',
      email: 'mailto:contact@naktor.com',
    },
  },
  {
    name: '[Name]',
    role: 'CTO', 
    bio: '12+ years in software development as Software Lead in generative AI product development. Full-stack engineering with expertise across multiple programming languages.',
    achievements: [
      'Open source contributor and committer',
      'EMBA Candidate 2026',
      'Technical blogger & writer',
      'Top 1% Cursor developer',
      'Led successful Data & AI projects in Banking, Insurance, and Retail'
    ],
    image: '/team/placeholder.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:contact@naktor.com',
    },
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-white tracking-tight sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg text-zinc-200 leading-8">
          Experienced leaders with 25+ combined years in AI, cloud technologies, and enterprise software development.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {team.map((person) => (
          <Card key={person.name}>
            <div className="flex flex-col items-center p-8">
              <div className="mb-6 h-24 w-24 rounded-full bg-zinc-700" />
              <h3 className="font-semibold text-white text-xl leading-7">
                {person.name}
              </h3>
              <p className="font-semibold text-sm text-zinc-200 leading-6">
                {person.role}
              </p>
              <p className="mt-4 text-center text-sm text-zinc-200 leading-6">
                {person.bio}
              </p>

              {person.achievements && (
                <div className="mt-6 w-full">
                  <h4 className="text-sm font-medium text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {person.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex gap-4">
                {person.social.twitter && (
                  <Link
                    className="text-zinc-200 transition-colors hover:text-primary"
                    href={person.social.twitter}
                    target="_blank"
                  >
                    <Twitter size={20} />
                  </Link>
                )}
                {person.social.linkedin && (
                  <Link
                    className="text-zinc-200 transition-colors hover:text-primary"
                    href={person.social.linkedin}
                    target="_blank"
                  >
                    <Linkedin size={20} />
                  </Link>
                )}
                {person.social.github && (
                  <Link
                    className="text-zinc-200 transition-colors hover:text-primary"
                    href={person.social.github}
                    target="_blank"
                  >
                    <Github size={20} />
                  </Link>
                )}
                {person.social.email && (
                  <Link
                    className="text-zinc-200 transition-colors hover:text-primary"
                    href={person.social.email}
                  >
                    <Mail size={20} />
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
