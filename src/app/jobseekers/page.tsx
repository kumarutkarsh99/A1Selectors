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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Upload,
  Search,
  Target,
  CheckCircle,
  ArrowRight,
  FileText,
  Briefcase,
  TrendingUp,
  Award,
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

export default function JobSeekersPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Land Your <span className="text-teal-600">Dream Job</span> Today
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Connect with top employers and discover opportunities that match
              your skills and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Your CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose TalentConnect?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {`We're committed to helping you find the perfect role that matches
              your skills and aspirations.`}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Personalized Matching",
                description:
                  "Our AI-powered system matches you with roles that fit your skills and preferences.",
              },
              {
                icon: Briefcase,
                title: "Exclusive Opportunities",
                description:
                  "Access to hidden job markets and exclusive positions from top companies.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Find roles that offer advancement opportunities and skill development.",
              },
              {
                icon: Award,
                title: "Expert Support",
                description:
                  "Get guidance from our career experts throughout your job search journey.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-slate-800">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Career Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive support to help you succeed in your job search and
              career development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FileText,
                title: "CV Optimization",
                description:
                  "Professional CV review and optimization to make you stand out to employers.",
                features: [
                  "ATS-friendly formatting",
                  "Keyword optimization",
                  "Industry-specific advice",
                  "Cover letter help",
                ],
              },
              {
                icon: User,
                title: "Interview Coaching",
                description:
                  "Prepare for interviews with personalized coaching and practice sessions.",
                features: [
                  "Mock interviews",
                  "Behavioral questions",
                  "Technical prep",
                  "Salary negotiation",
                ],
              },
              {
                icon: TrendingUp,
                title: "Career Guidance",
                description:
                  "Strategic career planning and guidance from industry experts.",
                features: [
                  "Career path planning",
                  "Skill gap analysis",
                  "Industry insights",
                  "Networking tips",
                ],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-slate-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real stories from professionals who found their dream jobs through
              TalentConnect.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Alex Rodriguez",
                role: "Software Engineer",
                company: "Tech Innovators",
                quote:
                  "TalentConnect helped me transition from finance to tech. I landed my dream job in just 6 weeks!",
                salary: "40% salary increase",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Sarah Kim",
                role: "Product Manager",
                company: "StartupXYZ",
                quote:
                  "The career coaching was invaluable. I felt confident in every interview and got multiple offers.",
                salary: "Senior role promotion",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                company: "Analytics Pro",
                quote:
                  "They matched me with a role that perfectly fits my skills and career goals. Couldn't be happier!",
                salary: "Remote work achieved",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((story, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-12 h-12 rounded-full mr-4 bg-teal-100"
                      />
                      <div>
                        <p className="font-semibold text-slate-800">
                          {story.name}
                        </p>
                        <p className="text-sm text-slate-600">{story.role}</p>
                        <p className="text-sm text-teal-600">{story.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4 italic">
                      "{story.quote}"
                    </p>
                    <Badge className="bg-teal-100 text-teal-700">
                      {story.salary}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                  Create Your Profile
                </CardTitle>
                <CardDescription>
                  {`Tell us about yourself and we'll start matching you with
                  relevant opportunities.`}
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
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="jane@email.com" />
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
                    Career Goals & Preferences
                  </label>
                  <Textarea
                    placeholder="Tell us about your ideal role, preferred industries, salary expectations, location preferences, etc."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                  Create Profile & Find Jobs
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
