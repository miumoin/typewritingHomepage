"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
import ProductHuntBadge from "@/components/marketing/ProductHuntBadge";
import BlobBackground from "@/components/ui/BlobBackground";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Hero Section
const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 z-0" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 z-0" />

      {/* Blob background */}
      <div className="fixed inset-0 z-0">
        <BlobBackground
          blobCount={6}
          blobSize={400}
          colors={["#93c5fd", "#a5b4fc", "#c7d2fe", "#ddd6fe", "#f0abfc"]}
          opacity={0.2}
          duration={25}
          blur={100}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-32 z-20">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Top Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="flex items-center justify-center">
              <Badge variant="info" className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Not another chatbot agent
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text sm:text-gray-900 leading-tight">
                <span>Replace boring forms with</span>{" "}
                <span className="sm:block gradient-text">
                  Conversational AI Agent
                </span>
              </h1>

              <p className="section-desc max-w-2xl mx-auto">
                A complete platform to make AI agents who act like your
                secretary. Ask follow up questions, Taking automated notes,
                Getting you prepared.
              </p>
            </div>

            {/* ProductHunt Badge and Demo Button */}
            <div className="h-fit flex items-center justify-center gap-3 md:gap-6">
              <Link
                className={cn(buttonVariants({ size: "lg" }), "group")}
                href="https://calendly.com/uddinmoin/typewriting">
                <span>Request a Demo</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* product hunt badge */}
              <ProductHuntBadge />
            </div>

            {/* Stats or additional info */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Free forever plan</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl">
            <div className="relative">
              {/* Glass effect container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl shadow-blue-500/10 group/video">
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-2xl opacity-0 group-hover/video:opacity-100 blur-md transition-all duration-700 -z-10"></div>

                {/* Video container */}
                <div className="relative aspect-video overflow-hidden rounded-xl m-0.5">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 z-10 pointer-events-none"></div>

                  {/* Video element - autoplay without controls */}
                  <video
                    className="w-full h-full object-cover transition-all duration-700 group-hover/video:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}>
                    <source src="/demo-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Subtle reflection effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
