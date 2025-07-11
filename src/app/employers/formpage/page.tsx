"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function EmployersPage() {
  const handleSubmit = () => {
    toast.success("Upload complete!");
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Ready to Hire?
              </h2>
              <p className="text-xl text-slate-600">
                Tell us about your hiring needs and we'll get back to you within
                24 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Building className="mr-2 h-5 w-5 text-teal-600" />
                  Start Your Hiring Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Full Name
                    </label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Company Name
                    </label>
                    <Input placeholder="Your Company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Role to Fill
                  </label>
                  <Input placeholder="e.g., Senior Software Engineer" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Job Description & Requirements
                  </label>
                  <Textarea
                    placeholder="Tell us about the role, required skills, experience level, salary range, etc."
                    rows={5}
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
