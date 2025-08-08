"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { cn } from "@/lib/utils";
import { CreditCard, Gift, XCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white  py-16 md:py-24"
      id="cta">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title leading-tight max-w-5xl mx-auto">
            Ready to Transform Your Business with AI-Powered Assistant?
          </h2>
          <p className="section-desc text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies that are already
            enhancing their customer experience and boosting efficiency with our
            AI assistant platform.
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://ask.typewriting.ai/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" })
                )}>
                Start Free
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://calendly.com/uddinmoin/typewriting"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" })
                )}>
                Request a Demo
                <FiCalendar className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
            <div>
              <p>Trusted by many businesses worldwide</p>
              <div className="flex items-center justify-center mt-1">
                <span className="ml-2">15th on Product Hunt</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20">
              <CreditCard className="mr-2 w-4 h-4" />
              No credit card required
            </Badge>

            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20">
              <Gift className="mr-2 w-4 h-4" />
              Always free for limited assistant
            </Badge>

            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20">
              <XCircle className="mr-2 w-4 h-4" />
              Cancel anytime
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
