'use client';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';

const products = [
  {
    name: 'Product Alpha',
    tagline: 'Revolutionary solution for modern businesses',
    description: 'A comprehensive platform that streamlines your workflow and boosts productivity by 300%.',
    features: [
      'Advanced analytics dashboard',
      'Real-time collaboration tools',
      'Enterprise-grade security',
      '24/7 customer support',
    ],
    pricing: 'Starting at $29/month',
    status: 'Available',
    link: '#',
    image: '/products/placeholder.jpg',
    rating: 4.9,
    users: '10,000+',
  },
  {
    name: 'Product Beta',
    tagline: 'Next-generation automation platform',
    description: 'Automate your business processes with AI-powered workflows and intelligent decision-making.',
    features: [
      'AI-powered automation',
      'Custom workflow builder',
      'Integration with 100+ apps',
      'Advanced reporting',
    ],
    pricing: 'Starting at $49/month',
    status: 'Coming Soon',
    link: '#',
    image: '/products/placeholder.jpg',
    rating: null,
    users: 'Pre-launch',
  },
  {
    name: 'Product Gamma',
    tagline: 'Smart data insights platform',
    description: 'Transform your data into actionable insights with our machine learning-powered analytics suite.',
    features: [
      'Machine learning insights',
      'Predictive analytics',
      'Custom dashboards',
      'Data visualization tools',
    ],
    pricing: 'Starting at $79/month',
    status: 'Available',
    link: '#',
    image: '/products/placeholder.jpg',
    rating: 4.7,
    users: '5,000+',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-7xl pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Innovative solutions designed to solve real-world problems and drive business growth.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {products.map((product, index) => (
              <Card key={product.name}>
                <div className={`grid gap-8 p-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {product.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === 'Available' 
                          ? 'bg-green-900/20 text-green-400 border border-green-500/20' 
                          : 'bg-yellow-900/20 text-yellow-400 border border-yellow-500/20'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium text-zinc-400 mb-4">
                      {product.tagline}
                    </p>
                    
                    <p className="text-zinc-300 mb-6">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xl font-bold text-white">{product.pricing}</p>
                        {product.rating && (
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-zinc-400 ml-1">{product.rating}</span>
                            </div>
                            <span className="text-sm text-zinc-500">•</span>
                            <span className="text-sm text-zinc-400">{product.users} users</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors w-fit"
                    >
                      {product.status === 'Available' ? 'Learn More' : 'Get Notified'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="aspect-video rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-500">Product Screenshot</span>
                    </div>
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