"use client";

import { useState, useEffect } from "react";
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
import ClientLogos from "@/components/client-logos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Clock, Globe, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description:
      "All candidates undergo thorough background checks and skill verification",
    badge: "Security",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Average placement time of 2-3 weeks with our streamlined process",
    badge: "Speed",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access to talent pools across 50+ countries and major tech hubs",
    badge: "Scale",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "AI-powered algorithms ensure perfect skill and culture fit",
    badge: "Accuracy",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personal account managers for ongoing relationship management",
    badge: "Service",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Live dashboard with application status and candidate pipeline",
    badge: "Technology",
  },
];

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "TalentBridge helped us find exceptional developers in record time. Their screening process is thorough and the quality of candidates is outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Startup Inc",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I found my dream job through TalentBridge. The process was smooth and the team was incredibly supportive throughout my job search.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovation Labs",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The platform made it easy to connect with top talent. We've hired 5 amazing team members through TalentBridge in the past year.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    company: "Design Studio",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Professional service and great results. TalentBridge understood exactly what I was looking for in my next role.",
    rating: 5,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
                <FileText className="h-5 w-5" />
                Hire Talent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent"
              >
                <Upload className="h-5 w-5" />
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
      <section className="py-20 px-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose TalentBridge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Advanced features that set us apart from traditional recruitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                        <feature.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <Badge variant="secondary">{feature.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by companies and professionals worldwide
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={
                          testimonials[currentIndex].avatar ||
                          "/placeholder.svg"
                        }
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does the recruitment process take?",
                  answer:
                    "Our average time to hire is 18 days, but this can vary depending on the role complexity and your specific requirements.",
                },
                {
                  question: "What industries do you specialize in?",
                  answer:
                    "We specialize in technology, finance, healthcare, and consulting, with deep expertise in technical roles and executive positions.",
                },
                {
                  question: "Do you offer any guarantees?",
                  answer:
                    "Yes, we offer a 90-day replacement guarantee. If a placed candidate doesn't work out within 90 days, we'll find a replacement at no additional cost.",
                },
                {
                  question: "How much do your services cost?",
                  answer:
                    "Our pricing varies by service type and role level. Contact us for a customized quote based on your specific needs.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                TalentConnect
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
            <p>&copy; 2023 TalentConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
