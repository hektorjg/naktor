'use client';
import {
  ArrowRight,
  Check,
  Brain,
  MessageSquare,
  FileText,
  Scale,
  Bot,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '../../components/card';

const services = [
  {
    name: 'Talk-to-Your-Data',
    icon: <MessageSquare className="h-8 w-8" />,
    description:
      'AI-powered responses on complex enterprise data in finance, insurance, and healthcare.',
    features: [
      'Natural language queries on enterprise data',
      'Complex financial data analysis',
      'Healthcare data insights',
      'Real-time data interpretation',
    ],
    industries: ['Finance', 'Insurance', 'Healthcare'],
    timeline: '6-12 weeks',
  },
  {
    name: 'Talk-to-Your-Documents',
    icon: <FileText className="h-8 w-8" />,
    description:
      'AI responses on regulatory documents and complex documentation systems.',
    features: [
      'Regulatory document analysis',
      'Policy interpretation',
      'Compliance automation',
      'Document knowledge extraction',
    ],
    industries: ['Public Administration', 'Legal', 'Compliance'],
    timeline: '4-8 weeks',
  },
  {
    name: 'AI-Driven Regulatory Compliance',
    icon: <Scale className="h-8 w-8" />,
    description:
      'Automated interpretation of regulatory reports with automatic KPI construction.',
    features: [
      'Financial regulatory report automation',
      'Automatic KPI generation',
      'Compliance monitoring',
      'Risk assessment automation',
    ],
    industries: ['Financial Services', 'Banking'],
    timeline: '8-16 weeks',
    caseStudy: 'Ecuador Financial Regulatory fulfillment',
  },
  {
    name: 'Process Automation with AI Agents',
    icon: <Bot className="h-8 w-8" />,
    description:
      'End-to-end business process automation using intelligent AI agents.',
    features: [
      'Workflow automation',
      'CRM integrations',
      'Intelligent note-taking',
      'Custom business process optimization',
    ],
    industries: ['Healthcare', 'Professional Services', 'Any Industry'],
    timeline: '4-12 weeks',
  },
  {
    name: 'Generative AI Product Development',
    icon: <Brain className="h-8 w-8" />,
    description:
      'Custom AI-powered products and platforms tailored to your business needs.',
    features: [
      'Custom LLM implementation',
      'AI-powered SaaS development',
      'Machine learning model training',
      'AI system architecture',
    ],
    industries: ['Technology', 'Healthcare', 'Education'],
    timeline: '12-24 weeks',
  },
  {
    name: 'SaaS Marketplace Integration',
    icon: <Sparkles className="h-8 w-8" />,
    description:
      'Complete SaaS platform deployment on AWS/GCP marketplaces with billing integration.',
    features: [
      'Marketplace deployment',
      'Automated billing systems',
      'User management',
      'Analytics platform integration',
    ],
    industries: ['Technology', 'B2B SaaS'],
    timeline: '8-16 weeks',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-white tracking-tight sm:text-4xl">
          AI Portfolio
        </h2>
        <p className="mt-6 text-lg text-zinc-200 leading-8">
          Proven AI solutions transforming business processes across Banking, Insurance, 
          Retail, Healthcare, and Public Administration.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name}>
            <div className="flex h-full flex-col p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="text-white">{service.icon}</div>
                <h3 className="font-bold text-white text-xl">{service.name}</h3>
              </div>

              <p className="mb-6 flex-grow text-zinc-200">
                {service.description}
              </p>

              <div className="mb-6 space-y-3">
                {service.features.map((feature) => (
                  <div className="flex items-center gap-3" key={feature}>
                    <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                    <span className="text-sm text-zinc-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-zinc-700 border-t pt-6">
                <div className="mb-4">
                  <div className="mb-2">
                    <p className="text-sm text-zinc-200">Timeline: {service.timeline}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs text-zinc-300">Industries:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {service.industries.map((industry) => (
                        <span key={industry} className="bg-zinc-700 text-xs px-2 py-1 rounded text-zinc-200">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  {service.caseStudy && (
                    <p className="text-xs text-primary">Case Study: {service.caseStudy}</p>
                  )}
                </div>

                <Link
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-zinc-200"
                  href="/contact"
                >
                  Discuss Project
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
            <h3 className="mb-4 font-bold text-2xl text-white">
              Custom AI Solutions
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-zinc-200">
              Ready to transform your business with AI? We specialize in creating
              custom AI solutions tailored to your specific industry and business needs.
            </p>
            <Link
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-zinc-200"
              href="/contact"
            >
              Start Your AI Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
