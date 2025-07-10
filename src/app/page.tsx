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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Calculator,
  Users,
  Heart,
  Upload,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Building,
  Briefcase,
  Award,
  User,
  FileText,
} from "lucide-react";
import Image from "next/image";
import ClientLogos from "@/components/client-logos";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Active Candidates",
    description: "Skilled professionals ready for opportunities",
  },
  {
    icon: Briefcase,
    number: "2,500+",
    label: "Jobs Placed",
    description: "Successful placements across industries",
  },
  {
    icon: Building,
    number: "500+",
    label: "Partner Companies",
    description: "Trusted employers worldwide",
  },
  {
    icon: Award,
    number: "98%",
    label: "Success Rate",
    description: "Client satisfaction and retention",
  },
];

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-slate-600/10"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(71, 85, 105, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
            >
              Find Top Tech Talent or Your{" "}
              <span className="text-teal-600">Dream Job</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              We connect growing companies with skilled professionals across
              industries.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Sample CVs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Your CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-teal-600">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Trusted by thousands of professionals and companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-teal-100">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
              Our Specializations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in connecting talent across various industries with
              precision and expertise.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Code,
                title: "Tech Hiring",
                desc: "Software engineers, developers, and IT professionals",
              },
              {
                icon: Calculator,
                title: "Finance Hiring",
                desc: "Financial analysts, accountants, and banking experts",
              },
              {
                icon: Users,
                title: "Non-Tech Hiring",
                desc: "Marketing, sales, and operations professionals",
              },
              {
                icon: Heart,
                title: "Healthcare Hiring",
                desc: "Medical professionals and healthcare specialists",
              },
            ].map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-slate-200">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <category.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-slate-800">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600 mb-4">
                      {category.desc}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                    >
                      Explore Roles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Roles Grid */}
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
              Popular Job Roles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover opportunities in high-demand positions across various
              industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Data Analyst",
                company: "Tech Corp",
                salary: "$70k - $90k",
                type: "Full-time",
              },
              {
                title: "Frontend Developer",
                company: "StartupXYZ",
                salary: "$80k - $120k",
                type: "Remote",
              },
              {
                title: "Backend Developer",
                company: "Enterprise Inc",
                salary: "$90k - $130k",
                type: "Hybrid",
              },
              {
                title: "Product Manager",
                company: "Innovation Labs",
                salary: "$100k - $140k",
                type: "Full-time",
              },
              {
                title: "UX Designer",
                company: "Design Studio",
                salary: "$75k - $110k",
                type: "Remote",
              },
              {
                title: "DevOps Engineer",
                company: "Cloud Solutions",
                salary: "$95k - $135k",
                type: "Hybrid",
              },
            ].map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-slate-800">
                        {job.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-teal-100 text-teal-700"
                      >
                        {job.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-600">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-teal-600 mb-4">
                      {job.salary}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-teal-600 hover:bg-teal-700"
                      >
                        View CVs
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple steps to connect talent with opportunity.
            </p>
          </motion.div>

          <Tabs defaultValue="employers" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="employers" className="text-sm">
                <Building className="h-4 w-4" />
                For Employers
              </TabsTrigger>
              <TabsTrigger value="jobseekers" className="text-sm">
                <User className="h-4 w-4" />
                For Job Seekers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="employers">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    step: "1",
                    title: "Post Requirements",
                    desc: "Tell us about your ideal candidate and role requirements.",
                  },
                  {
                    step: "2",
                    title: "Review Candidates",
                    desc: "We'll match and present qualified candidates for your review.",
                  },
                  {
                    step: "3",
                    title: "Make Your Hire",
                    desc: "Interview and hire the perfect candidate for your team.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="jobseekers">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    step: "1",
                    title: "Upload Your CV",
                    desc: "Share your resume and tell us about your career goals.",
                  },
                  {
                    step: "2",
                    title: "Get Matched",
                    desc: "We'll connect you with relevant opportunities from top companies.",
                  },
                  {
                    step: "3",
                    title: "Land Your Job",
                    desc: "Interview with confidence and secure your dream position.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {`Success stories from companies and professionals we've helped.`}
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
                name: "Sarah Johnson",
                role: "HR Director",
                company: "TechStart Inc",
                quote:
                  "They found us the perfect senior developer in just 2 weeks. Exceptional service and quality candidates.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                company: "Recently Hired",
                quote:
                  "The team helped me land my dream job at a top tech company. Professional and supportive throughout.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Talent Acquisition",
                company: "Growth Corp",
                quote:
                  "Outstanding recruitment partner. They understand our culture and consistently deliver great matches.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-teal-600">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Lead Form Section */}
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
              Get Started Today
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {`Ready to find your next hire or dream job? Let's connect.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="employer" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="employer" className="text-sm">
                  {`I'm an Employer`}
                </TabsTrigger>
                <TabsTrigger value="jobseeker" className="text-sm">
                  {`I'm a Job Seeker`}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="employer">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Building className="mr-2 h-5 w-5 text-teal-600" />
                      Employer Information
                    </CardTitle>
                    <CardDescription>
                      {`Tell us about your hiring needs and we'll get back to you
                      within 24 hours.`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                          Role to Fill
                        </label>
                        <Input placeholder="e.g., Senior Developer" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Additional Requirements
                      </label>
                      <Textarea
                        placeholder="Tell us more about the role, required skills, experience level, etc."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Submit Hiring Request
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobseeker">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <User className="mr-2 h-5 w-5 text-teal-600" />
                      Job Seeker Information
                    </CardTitle>
                    <CardDescription>
                      {`Share your details and we'll match you with relevant
                      opportunities.`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                        Upload Resume
                      </label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                        <p className="text-slate-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          PDF, DOC, DOCX (max 5MB)
                        </p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Career Goals
                      </label>
                      <Textarea
                        placeholder="Tell us about your ideal role, preferred industries, salary expectations, etc."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Submit Application
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
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
              Latest Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in recruitment and career
              development.
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
                title: "Top 10 Tech Skills in Demand for 2024",
                excerpt:
                  "Discover the most sought-after technical skills that employers are looking for this year.",
                category: "Tech Trends",
                date: "Dec 15, 2023",
                readTime: "5 min read",
              },
              {
                title: "How to Ace Your Remote Job Interview",
                excerpt:
                  "Essential tips and best practices for succeeding in virtual interviews and landing remote positions.",
                category: "Career Tips",
                date: "Dec 12, 2023",
                readTime: "7 min read",
              },
              {
                title: "Building Diverse and Inclusive Teams",
                excerpt:
                  "Strategies for employers to create more diverse hiring practices and inclusive workplace cultures.",
                category: "HR Insights",
                date: "Dec 10, 2023",
                readTime: "6 min read",
              },
            ].map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-teal-100 text-teal-700"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-slate-800 hover:text-teal-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {post.readTime}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                A1 Selectors
              </h3>
              <p className="text-slate-300 mb-6">
                Connecting exceptional talent with outstanding opportunities
                across industries.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate-300">
                  <Phone className="h-4 w-4 mr-2 text-teal-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="h-4 w-4 mr-2 text-teal-400" />
                  hello@talentconnect.com
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="h-4 w-4 mr-2 text-teal-400" />
                  123 Business Ave, Suite 100
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Browse CVs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Upload CV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Get the latest job market insights and career tips.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 A1Selectors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
