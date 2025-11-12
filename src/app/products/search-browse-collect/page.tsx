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
  "Simulates google search",
  "Scraps web pages for content",
  "AI powered content analysis",
  "Automates data freshness checks",
  "User friendly & intuitive",
  "CSV export of results",
];

export default function SalesAssistantPage() {
  return (
    <ProductLayout
      title="AI powered data entry agent"
      description="Automate web searches and data collection with AI — just enter your search parameters to begin."
      videoUrl="https://www.youtube.com/embed/DnUDomK2V6o"
      useCases={useCases}
      integrationHighlights={integrationHighlights}
      productHuntBadge='<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-smart&#0045;scraper&#0045;search&#0045;browse&#0045;collect" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=907193&theme=light&t=1762821340256" alt="Smart&#0032;Scraper&#0058;&#0032;Search&#0044;&#0032;Browse&#0044;&#0032;Collect - Use&#0032;the&#0032;power&#0032;of&#0032;LLM&#0032;to&#0032;automate&#0032;data&#0032;collection&#0032;from&#0032;web&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>'
    />
  );
}