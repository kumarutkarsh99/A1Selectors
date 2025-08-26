"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import axios from "axios";

export default function EmployersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    roleToFill: "",
    jobType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      jobType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://16.171.117.2:3000/common/addemployer",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Your request has been submitted successfully!");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          roleToFill: "",
          jobType: "",
          message: "",
        });
      } else {
        toast.error(
          "There was an error submitting your request. Please try again."
        );
        console.error("Error submitting form:", response.data);
      }
    } catch (error) {
      toast.error("A network error occurred. Please try again.");
      console.error("Network or API error:", error);
    } finally {
      setLoading(false);
    }
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="text-sm font-medium text-slate-700 mb-2 block"
                      >
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="companyName"
                        className="text-sm font-medium text-slate-700 mb-2 block"
                      >
                        Company Name
                      </label>
                      <Input
                        id="companyName"
                        placeholder="Your Company"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700 mb-2 block"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium text-slate-700 mb-2 block"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phoneNumber"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="roleToFill"
                      className="text-sm font-medium text-slate-700 mb-2 block"
                    >
                      Role to Fill
                    </label>
                    <Input
                      id="roleToFill"
                      placeholder="e.g., Senior Software Engineer"
                      value={formData.roleToFill}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="jobType"
                      className="text-sm font-medium text-slate-700 mb-2 block"
                    >
                      Job Type
                    </label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.jobType}
                    >
                      <SelectTrigger className="w-full" id="jobType">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-700 mb-2 block"
                    >
                      Message for Us
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Let us know your hiring expectations or any specific requirements you have."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3 cursor-pointer mt-6"
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
