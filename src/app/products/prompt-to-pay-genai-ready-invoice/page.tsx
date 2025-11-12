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
  "Integration with major chatbot platforms",
  "Works directly with Stripe",
  "Reduces manual invoicing",
  "Dynamic generation of payment links",
  "Multi workspace for different campaigns",
  "Dashbaord to track payments",
];

export default function SalesAssistantPage() {
  return (
    <ProductLayout
      title="Chatbot friendly invoice generator"
      description="Instantly creates invoices during conversations - so your chatbot can sell and accept payments on the fly."
      videoUrl="https://www.youtube.com/embed/DnUDomK2V6o"
      useCases={useCases}
      integrationHighlights={integrationHighlights}
      productHuntBadge='<a href="https://www.producthunt.com/products/typewriting?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-prompt&#0045;to&#0045;pay&#0045;genai&#0045;ready&#0045;invoice" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1028019&theme=light&t=1762821385238" alt="&#0032;Prompt&#0032;to&#0032;pay&#0058;&#0032;genAI&#0032;ready&#0032;invoice - Turn&#0032;your&#0032;chatbot&#0032;into&#0032;a&#0032;sales&#0032;channel | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>'
    />
  );
}