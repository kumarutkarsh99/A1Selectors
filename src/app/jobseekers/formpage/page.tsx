"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Upload } from "lucide-react";
import { toast } from "sonner";

export default function JobSeekersPage() {
  const handleSubmit = () => {
    toast.success("Upload complete!");
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Job Application Form */}
      <section className="py-20 bg-slate-50">
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-600">
                Upload your CV and let us match you with your perfect job
                opportunity.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <User className="mr-2 h-5 w-5 text-teal-600" />
                  Upload Your Profile
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and we'll connect with you for relevant
                  opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Full Name
                    </label>
                    <Input placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="jane@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      LinkedIn URL
                    </label>
                    <Input type="url" placeholder="linkedin.com/in/jane/" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Current Job Title
                  </label>
                  <Input placeholder="e.g., Senior Software Engineer" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Upload Resume/CV
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                    <p className="text-slate-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-slate-500">
                      PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Job Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="permanent">Permanent</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="others">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3 cursor-pointer"
                >
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
