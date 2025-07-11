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
import {
  Building,
  Users,
  Target,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Search,
  FileText,
  UserCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function EmployersPage() {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/employers/formpage");
  };

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
              Find Top Talent for Your{" "}
              <span className="text-teal-600">Growing Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Access our curated network of skilled professionals across tech,
              finance, healthcare, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleClick}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg cursor-pointer"
              >
                <Search className="h-5 w-5" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent"
              >
                <Building className="h-5 w-5" />
                Post a Job
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "10,000+", label: "Active Candidates", icon: Users },
              { number: "500+", label: "Companies Served", icon: Building },
              { number: "95%", label: "Success Rate", icon: Target },
              { number: "48hrs", label: "Average Match Time", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600">{stat.label}</p>
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
              Our Recruitment Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive hiring solutions tailored to your business needs.
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
                icon: Search,
                title: "Executive Search",
                description:
                  "Find senior-level executives and leadership talent for critical roles.",
                features: [
                  "C-level positions",
                  "Board members",
                  "VP & Director roles",
                  "Confidential searches",
                ],
              },
              {
                icon: Users,
                title: "Volume Hiring",
                description:
                  "Scale your team quickly with our bulk recruitment solutions.",
                features: [
                  "Multiple positions",
                  "Fast turnaround",
                  "Streamlined process",
                  "Quality assurance",
                ],
              },
              {
                icon: Target,
                title: "Specialized Roles",
                description:
                  "Expert recruitment for niche and technical positions.",
                features: [
                  "Tech specialists",
                  "Healthcare professionals",
                  "Finance experts",
                  "Industry veterans",
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

      {/* Process Section */}
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
              Our Hiring Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A streamlined approach to finding the perfect candidates for your
              team.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description:
                  "We work with you to understand your role requirements, company culture, and ideal candidate profile.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Candidate Sourcing",
                description:
                  "Our team searches through our network and actively recruits top talent that matches your needs.",
                icon: Search,
              },
              {
                step: "03",
                title: "Screening & Vetting",
                description:
                  "We conduct thorough interviews and assessments to ensure candidates meet your standards.",
                icon: Users,
              },
              {
                step: "04",
                title: "Presentation & Hire",
                description:
                  "We present qualified candidates and support you through the interview and hiring process.",
                icon: UserCheck,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <process.icon className="h-6 w-6 text-teal-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-800">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-lg">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              What Employers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Success stories from companies who found their perfect hires
              through us.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                quote:
                  "TalentConnect helped us find our CTO in just 3 weeks. The quality of candidates was exceptional.",
                author: "Sarah Johnson",
                role: "CEO",
                company: "TechStart Inc",
                rating: 5,
              },
              {
                quote:
                  "Outstanding service! They understood our culture and found candidates who were perfect fits.",
                author: "Michael Chen",
                role: "HR Director",
                company: "Growth Corp",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.author}
                      </p>
                      <p className="text-slate-600">{testimonial.role}</p>
                      <p className="text-teal-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
