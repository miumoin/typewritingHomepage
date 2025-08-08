"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import SectionHeader from "../shared/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FiArrowRight,
  FiPlay,
  FiZap,
  FiSettings,
  FiMessageSquare,
  FiFileText,
  FiUsers,
} from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

// Features data constant
const FEATURES_DATA = [
  {
    id: 1,
    title: "Smart Questionnaire",
    description:
      "Create intelligent, adaptive questionnaires that gather structured information from your users and clients with contextual follow-ups.",
    image: "/images/features/Questionnaire.jpg",
    icon: FiFileText,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    badge: "Core Feature",
    benefits: ["Adaptive questions", "Smart branching", "Real-time validation"],
  },
  {
    id: 2,
    title: "AI Customization",
    description:
      "Tailor your AI assistant's personality, tone, and expertise to match your brand voice and industry requirements perfectly.",
    image: "/images/features/customisation.jpg",
    icon: FiSettings,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    badge: "Advanced",
    benefits: [
      "Brand voice matching",
      "Industry expertise",
      "Custom responses",
    ],
  },
  {
    id: 3,
    title: "Agent Settings",
    description:
      "Configure your AI agents with different personalities, expertise levels, and response styles for various use cases.",
    image: "/images/features/agent-settings.jpg",
    icon: FiZap,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-50",
    badge: "Professional",
    benefits: ["Multiple personalities", "Expertise levels", "Response styles"],
  },
  {
    id: 4,
    title: "Smart Summaries",
    description:
      "Generate concise, intelligent summaries of lengthy content, meetings, or documents with key insights highlighted.",
    image: "/images/features/summary.jpg",
    icon: FiMessageSquare,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    badge: "Productivity",
    benefits: ["Key insights", "Action items", "Meeting notes"],
  },
  {
    id: 5,
    title: "Direct Messaging",
    description:
      "Communicate directly with your AI assistant through an intuitive chat interface with real-time, contextual responses.",
    image: "/images/features/direct-messaging.jpg",
    icon: FiUsers,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    badge: "Communication",
    benefits: ["Real-time chat", "Context awareness", "Multi-modal support"],
  },
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = (feature: any) => {
    setSelectedFeature(feature);
    setIsDialogOpen(true);
  };

  const handleLearnMore = (feature: any) => {
    setSelectedFeature(feature);
    setIsDialogOpen(true);
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeader
            title="Everything You Need to Build"
            subTitle="Powerful AI Assistants"
            desc="Build intelligent AI assistants with our comprehensive platform. Your AI will ask smart questions, gather information efficiently, and explain your services clearly. No human assistance required."
          />
        </motion.div>

        {/* Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {FEATURES_DATA.map((feature, index) => (
                <CarouselItem
                  key={feature.id}
                  className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group h-full">
                    <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Image Section */}
                      <div
                        className="relative h-96 overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(feature)}>
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className={`${feature.bgColor} text-gray-700 border-0`}>
                            {feature.badge}
                          </Badge>
                        </div>

                        {/* Icon overlay */}
                        <div className="absolute top-4 right-4">
                          <div className="size-8 md:size-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <feature.icon className="size-4 md:size-6 text-blue-600" />
                          </div>
                        </div>

                        {/* Click indicator */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                            <FiArrowRight className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-2 mb-6">
                          {feature.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-500">
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`}
                              />
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className="w-full group/btn hover:bg-blue-50 border-gray-200"
                          onClick={() => handleLearnMore(feature)}>
                          <span>Learn More</span>
                          <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Feature Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
            {selectedFeature && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Image */}
                <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                  <Image
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Bottom CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your AI Assistant?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start creating intelligent, conversational AI agents that
              transform how you interact with your customers and streamline your
              workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100">
                <FiPlay className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10">
                Get Started Free
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Features;
