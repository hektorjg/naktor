'use client';
import { ArrowRight, Check, Code, Database, Globe, Shield, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';

const services = [
  {
    name: 'Web Development',
    icon: <Globe className="h-8 w-8" />,
    description: 'Custom web applications built with modern technologies and best practices.',
    features: [
      'Responsive design',
      'Performance optimization',
      'SEO-friendly architecture',
      'Cross-browser compatibility',
    ],
    price: 'Starting at $5,000',
    timeline: '4-8 weeks',
  },
  {
    name: 'Mobile App Development',
    icon: <Smartphone className="h-8 w-8" />,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native iOS & Android',
      'Cross-platform solutions',
      'App Store optimization',
      'Push notifications',
    ],
    price: 'Starting at $8,000',
    timeline: '6-12 weeks',
  },
  {
    name: 'API Development',
    icon: <Code className="h-8 w-8" />,
    description: 'Scalable and secure APIs to power your applications and integrations.',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'API documentation',
      'Rate limiting & security',
    ],
    price: 'Starting at $3,000',
    timeline: '2-6 weeks',
  },
  {
    name: 'Database Design',
    icon: <Database className="h-8 w-8" />,
    description: 'Efficient database architecture and optimization for your data needs.',
    features: [
      'Database schema design',
      'Performance optimization',
      'Data migration',
      'Backup strategies',
    ],
    price: 'Starting at $2,500',
    timeline: '2-4 weeks',
  },
  {
    name: 'Cloud Infrastructure',
    icon: <Zap className="h-8 w-8" />,
    description: 'Scalable cloud solutions and DevOps automation for your applications.',
    features: [
      'AWS/GCP/Azure setup',
      'CI/CD pipelines',
      'Monitoring & alerts',
      'Auto-scaling configuration',
    ],
    price: 'Starting at $4,000',
    timeline: '3-6 weeks',
  },
  {
    name: 'Security Consulting',
    icon: <Shield className="h-8 w-8" />,
    description: 'Comprehensive security audits and implementation of best practices.',
    features: [
      'Security assessments',
      'Penetration testing',
      'Compliance consulting',
      'Security training',
    ],
    price: 'Starting at $3,500',
    timeline: '2-5 weeks',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-7xl pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Comprehensive technology solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name}>
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-zinc-700 pt-6 mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-white font-semibold">{service.price}</p>
                        <p className="text-zinc-400 text-sm">{service.timeline}</p>
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors w-full justify-center"
                    >
                      Get Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Custom Solutions
                </h3>
                <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                  Don't see what you're looking for? We specialize in creating custom solutions 
                  tailored to your specific business needs. Let's discuss your project requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}