"use client";

import React from 'react';
import ProductLayout from '@/components/product/ProductLayout';
import { MessageSquare, Clock, Database, Globe, BarChart, Users } from 'lucide-react';

const useCases = [
  {
    title: "Freemium Availability",
    description: "Use the product with no credit card or long-term commitment. Get started for free and upgrade only when you’re ready for production.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "SaaS Distribution",
    description: "Hosted on a secure, high-availability cloud platform — no installation needed. Perfect for distributed and remote teams.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Open Source",
    description: "Access the complete source code for full transparency and flexibility. Modify, extend, or self-host as your needs evolve.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "White-Label Options",
    description: "Deploy our technology under your own brand. We offer on-premise hosting with no external branding or dependencies.",
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    title: "Unlimited Licenses",
    description: "Enjoy unrestricted usage — no seat limits, no hidden fees, and no barriers to scale.",
    icon: <BarChart className="w-8 h-8" />,
  },
  {
    title: "Custom Integrations",
    description: "Seamlessly connect with your existing tools and workflows through tailored integrations built for your operations.",
    icon: <Users className="w-8 h-8" />,
  },
];

const integrationHighlights = [
  "No code chatbot builder",
  "Replaces forms",
  "Extracts valuable information",
  "Unlimited chatbots",
  "Unliminted pdf uploads",
  "Programmable in human language",
];

export default function HelpdeskAgentPage() {
  return (
    <ProductLayout
      title="Chatbot that replaces forms"
      description="No code chatbot builder, replaces forms and extracts valuable information from conversations."
      videoUrl="https://www.youtube.com/embed/8LBxvMnRkNA"
      useCases={useCases}
      integrationHighlights={integrationHighlights}
      productHuntBadge='<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=966370&theme=light&t=1762821588700" alt="Typewriting&#0032;AI - Chatbot&#0032;that&#0032;replaces&#0032;forms | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>'
    />
  );
}