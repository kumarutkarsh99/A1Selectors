"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Filter,
  Bookmark,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description:
        "We're looking for an experienced frontend developer to join our growing team...",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      remote: true,
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "1 day ago",
      description:
        "Join our data science team to build predictive models and drive insights...",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      remote: false,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "3 days ago",
      description:
        "Lead product strategy and work with cross-functional teams...",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      remote: true,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloud Solutions",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$90k - $130k",
      posted: "1 week ago",
      description: "Manage cloud infrastructure and deployment pipelines...",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      remote: true,
    },
    {
      id: 5,
      title: "UX Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$85k - $115k",
      posted: "4 days ago",
      description: "Create beautiful and intuitive user experiences...",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      remote: false,
    },
    {
      id: 6,
      title: "Backend Developer",
      company: "Enterprise Corp",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$95k - $135k",
      posted: "5 days ago",
      description: "Build scalable backend systems and APIs...",
      skills: ["Node.js", "PostgreSQL", "GraphQL", "Microservices"],
      remote: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover opportunities from top companies across various
              industries and locations.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Job title, keywords, or company"
                        className="pl-10 h-10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input placeholder="Location" className="pl-10 h-10" />
                    </div>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700 h-10">
                    <Search className="mr-2 h-4 w-4" />
                    Search Jobs
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Salary Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-75">$50k - $75k</SelectItem>
                      <SelectItem value="75-100">$75k - $100k</SelectItem>
                      <SelectItem value="100-150">$100k - $150k</SelectItem>
                      <SelectItem value="150+">$150k+</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Job Results */}
      <section className="py-12 px-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-600">Showing {jobs.length} jobs</p>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by: Most Recent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                <SelectItem value="relevance">Most Relevant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {jobs.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-800 hover:text-teal-600 cursor-pointer">
                            {job.title}
                          </h3>
                          {job.remote && (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-700"
                            >
                              Remote
                            </Badge>
                          )}
                        </div>
                        <p className="text-teal-600 font-medium mb-2">
                          {job.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-slate-600"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 ml-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-teal-600"
                        >
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <p className="text-sm text-slate-500">{job.posted}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
