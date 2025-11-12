"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ProductHuntBadge from '@/components/marketing/ProductHuntBadge';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface Product {
  title: string;
  description: string;
  videoUrl: string;
  isFeatured?: boolean;
  features?: string[];
  badge?: string;
  productLink?: string;
  handle: string;
}

const products: Product[] = [
  {
    title: "Chatbot that replaces forms",
    description: "No code chatbot builder, replaces forms and extracts valuable information from conversations.",
    videoUrl: "https://www.youtube.com/embed/8LBxvMnRkNA",
    isFeatured: true,
    features: [
      "No code chatbot builder",
      "Replaces forms",
      "Extracts valuable information",
      "Unlimited chatbots",
      "Unliminted pdf uploads"
    ],
    badge: '<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=966370&theme=light&t=1762821588700" alt="Typewriting&#0032;AI - Chatbot&#0032;that&#0032;replaces&#0032;forms | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>',
    productLink: "https://ask.typewriting.ai/login",
    handle: "typewriting-ai"
 },
  {
    title: "Chatbot friendly invoice generator",
    description: "Instantly creates invoices during conversations - so your chatbot can sell and accept payments on the fly",
    videoUrl: "https://www.youtube.com/embed/DnUDomK2V6o",
    features: [
      "Unlimited invoices",
      "On-the-fly generation",
      "Works with Stripe",
      "Works with any chatbot platform"
    ],
    badge: '<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-prompt&#0045;to&#0045;pay&#0045;genai&#0045;ready&#0045;invoice" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1028019&theme=light&t=1762821385238" alt="&#0032;Prompt&#0032;to&#0032;pay&#0058;&#0032;genAI&#0032;ready&#0032;invoice - Turn&#0032;your&#0032;chatbot&#0032;into&#0032;a&#0032;sales&#0032;channel | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>',
    productLink: "https://pay.typewriting.ai/login",
    handle: "prompt-to-pay-genai-ready-invoice"
  },
  {
    title: "Scan for expired content",
    description: "Keep your website fresh — scan your sitemap to find and fix expired or outdated content automatically",
    videoUrl: "https://www.youtube.com/embed/DnUDomK2V6o",
    features: [
      "Unlimited scans",
      "Audit reports on expired content",
      "CSV export for teams",
      "Improves SEO rankings"
    ],
    badge: '<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-prompt&#0045;to&#0045;pay&#0045;genai&#0045;ready&#0045;invoice" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1028019&theme=light&t=1762821078873" alt="&#0032;Prompt&#0032;to&#0032;pay&#0058;&#0032;genAI&#0032;ready&#0032;invoice - Turn&#0032;your&#0032;chatbot&#0032;into&#0032;a&#0032;sales&#0032;channel | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>',
    productLink: "https://app002.typewriting.ai",
    handle: "scan-for-expired-content"
  },
  {
    title: "AI powered data entry agent",
    description: "Automate web searches and data collection with AI — just enter your search parameters to begin.",
    videoUrl: "https://www.youtube.com/embed/DnUDomK2V6o",
    features: [
      "Unlimited searches",
      "Saves time on data entry",
      "Automates web research",
      "Exports to CSV or Excel"
    ],
    badge: '<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-smart&#0045;scraper&#0045;search&#0045;browse&#0045;collect" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=907193&theme=light&t=1762821340256" alt="Smart&#0032;Scraper&#0058;&#0032;Search&#0044;&#0032;Browse&#0044;&#0032;Collect - Use&#0032;the&#0032;power&#0032;of&#0032;LLM&#0032;to&#0032;automate&#0032;data&#0032;collection&#0032;from&#0032;web&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>',
    productLink: "https://app003.typewriting.ai",
    handle: "search-browse-collect"
  },
  // Add more products as needed
];

const ProductRow = ({ product }: { product: Product }) => {
  return (
    <div className={cn(
      "w-full py-16",
      product.isFeatured ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {product.isFeatured && (
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-0">
                Featured Product
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {product.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {product.description}
            </p>
            {product.features && (
              <div className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href={product.isFeatured ? "/products/" + product.handle : "/products/" + product.handle}
                className={buttonVariants({ size: "lg" })}>
                Learn More
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href={product.productLink || "#"}
                className={buttonVariants({ variant: "outline", size: "lg" })}>
                Get Started Free
              </Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: product.badge || "" }} />
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src={product.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightSection = () => {
  return (
    <div className="bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turn a chatbot into a sales channel.
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Chatbot x Invoice Generation = A complete sales channel, available 24/7.
            </p>
            <Link
              href="https://calendly.com/uddinmoin/typewriting"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-blue-900 hover:bg-blue-50"
              )}>
              Schedule a Demo
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        <div className="relative">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100 min-h-[200px] md:min-h-[280px] lg:min-h-[360px]">
                <iframe
                    src="https://www.youtube.com/embed/DnUDomK2V6o"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Featured Product */}
      {products.filter(p => p.isFeatured).map((product, index) => (
        <ProductRow key={index} product={product} />
      ))}

      {/* Highlight Section */}
      <HighlightSection />

      {/* Other Products */}
      {products.filter(p => !p.isFeatured).map((product, index) => (
        <ProductRow key={index} product={product} />
      ))}
    </div>
  );
}