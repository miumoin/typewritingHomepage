"use client";

import React from 'react';
import ProductHuntBadge from '@/components/marketing/ProductHuntBadge';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProductLayoutProps {
  title: string;
  description: string;
  videoUrl: string;
  useCases: UseCase[];
  integrationHighlights: string[];
  productHuntBadge?: string;
  productLink?: string;
}

export default function ProductLayout({
  title,
  description,
  videoUrl,
  useCases,
  integrationHighlights,
  productHuntBadge,
  productLink
}: ProductLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-0">
                Product
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="{productLink || '#'}"
                  className={buttonVariants({ size: "lg" })}>
                  Sign Up Free
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  href="https://calendly.com/uddinmoin/typewriting"
                  className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Book a Demo
                  <FiCalendar className="ml-2" />
                </Link>
              </div>
              <div dangerouslySetInnerHTML={{ __html: productHuntBadge || "" }} />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Discover how {title} can transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 text-blue-600">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 bg-blue-800 text-blue-100 border-blue-700"
              >
                Enterprise Integration
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to integrate AI into your workflow?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can customize {title} for your specific needs
              </p>
              <Link
                href="https://calendly.com/uddinmoin/typewriting"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-blue-900 hover:bg-blue-50"
                )}>
                Book Integration Discussion
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {integrationHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-lg text-blue-100"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}