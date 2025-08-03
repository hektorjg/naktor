'use client';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../../components/card';

const products = [
  {
    name: 'Remor AI',
    tagline: 'Intelligent Medical Assistant',
    description:
      'AI-powered assistant for medical consultations with patient history Q&A, real-time medical error detection, and automated documentation generation.',
    features: [
      'Patient history Q&A',
      'Real-time medical error detection',
      'Automated documentation generation',
      'Clinical decision support',
    ],
    pricing: 'Contact for pricing',
    status: 'Available',
    link: 'https://remor.ai/',
    image: '/products/placeholder.jpg',
    rating: null,
    users: 'Healthcare professionals',
  },
  {
    name: 'System Prompt Master',
    tagline: 'Professional Prompt Management',
    description:
      'Open-source library and community for managing and generating professional AI prompts with collaborative features.',
    features: [
      'Professional prompt library',
      'Community-driven development',
      'Version control for prompts',
      'Collaborative prompt creation',
    ],
    pricing: 'Free & Open Source',
    status: 'Available',
    link: 'https://systempromptmaster.com/',
    image: '/products/placeholder.jpg',
    rating: null,
    users: 'AI developers',
  },
  {
    name: 'LeadBreath',
    tagline: 'Agentic GTM Platform',
    description:
      'End-to-end lead prospection automation platform with intelligent agents managing the complete go-to-market process.',
    features: [
      'Automated lead prospection',
      'AI-powered lead qualification',
      'CRM integration',
      'Performance analytics',
    ],
    pricing: 'Subscription based',
    status: 'Available',
    link: 'https://lead-breath.vercel.app/auth/signin',
    image: '/products/placeholder.jpg',
    rating: null,
    users: 'Sales teams',
  },
];

export default function ProductsPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-white tracking-tight sm:text-4xl">
          Our Products
        </h2>
        <p className="mt-6 text-lg text-zinc-200 leading-8">
          Live AI products showcasing our expertise in healthcare, developer tools, and sales automation.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {products.map((product, index) => (
          <Card key={product.name}>
            <div
              className={`grid gap-8 p-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div
                className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="font-bold text-2xl text-white">
                    {product.name}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-1 font-medium text-xs ${
                      product.status === 'Available'
                        ? 'border border-green-500/20 bg-green-900/20 text-green-400'
                        : 'border border-yellow-500/20 bg-yellow-900/20 text-yellow-400'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="mb-4 font-medium text-lg text-zinc-200">
                  {product.tagline}
                </p>

                <p className="mb-6 text-zinc-200">{product.description}</p>

                <div className="mb-6 space-y-3">
                  {product.features.map((feature) => (
                    <div className="flex items-center gap-3" key={feature}>
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-xl">
                      {product.pricing}
                    </p>
                    {product.rating && (
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="ml-1 text-sm text-zinc-200">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-sm text-zinc-500">•</span>
                        <span className="text-sm text-zinc-200">
                          {product.users} users
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-zinc-200"
                  href={product.link}
                  target="_blank"
                >
                  Visit Product
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="flex aspect-video items-center justify-center rounded-lg bg-zinc-800">
                  <span className="text-zinc-500">Product Screenshot</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
