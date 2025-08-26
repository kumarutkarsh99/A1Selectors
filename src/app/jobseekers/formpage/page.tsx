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
import { User, Upload } from "lucide-react";
import { toast } from "sonner";
import React, { useState } from "react";
import axios from "axios";

export default function JobSeekersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    linkedinUrl: "",
    currentJobTitle: "",
    jobType: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB. Please upload a smaller file.");
        setResumeFile(null);
        e.target.value = "";
      } else {
        setResumeFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!resumeFile) {
      toast.error("Please upload your resume/CV.");
      setLoading(false);
      return;
    }

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key as keyof typeof formData]);
    });
    formPayload.append("resume", resumeFile);

    try {
      const response = await axios.post(
        "http://16.171.117.2:3000/common/addcandidate",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Your profile has been submitted successfully!");
        // Reset form after successful submission
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          linkedinUrl: "",
          currentJobTitle: "",
          jobType: "",
        });
        setResumeFile(null);
        // Clear file input
        const fileInput = document.getElementById(
          "resumeFile"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(
          "There was an error submitting your profile. Please try again."
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
                        placeholder="Jane Smith"
                        value={formData.fullName}
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
                        placeholder="jane@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="linkedinUrl"
                        className="text-sm font-medium text-slate-700 mb-2 block"
                      >
                        LinkedIn URL
                      </label>
                      <Input
                        id="linkedinUrl"
                        type="url"
                        placeholder="linkedin.com/in/jane/"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="currentJobTitle"
                      className="text-sm font-medium text-slate-700 mb-2 block"
                    >
                      Current Job Title
                    </label>
                    <Input
                      id="currentJobTitle"
                      placeholder="e.g., Senior Software Engineer"
                      value={formData.currentJobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="resumeFile"
                      className="text-sm font-medium text-slate-700 mb-2 block"
                    >
                      Upload Resume/CV
                    </label>
                    <div className="relative">
                      <Input
                        id="resumeFile"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                      />
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 mb-2">
                          {resumeFile
                            ? resumeFile.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-sm text-slate-500">
                          PDF, DOC, DOCX (max 5MB)
                        </p>
                      </div>
                    </div>
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
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3 cursor-pointer mt-6"
                  >
                    {loading ? "Submitting..." : "Submit Profile"}
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
