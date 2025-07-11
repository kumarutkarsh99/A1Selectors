"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Users,
  Search,
  TrendingUp,
  Building,
  Briefcase,
  Heart,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Tech Recruitment",
    description:
      "Specialized recruitment for software developers, engineers, and IT professionals across all experience levels.",
    features: [
      "Frontend & Backend Developers",
      "DevOps Engineers",
      "Data Scientists",
      "Mobile Developers",
    ],
    pricing: "Starting at $3,500 per hire",
  },
  {
    icon: Users,
    title: "Executive Search",
    description:
      "High-level executive placement services for C-suite positions and senior management roles.",
    features: [
      "C-Suite Executives",
      "VP & Director Roles",
      "Department Heads",
      "Board Members",
    ],
    pricing: "15-25% of annual salary",
  },
  {
    icon: Search,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for short-term projects and contract-based positions.",
    features: [
      "Project-based hiring",
      "Temporary staffing",
      "Contract-to-hire",
      "Seasonal workforce",
    ],
    pricing: "10-15% markup on hourly rate",
  },
  {
    icon: TrendingUp,
    title: "Career Consulting",
    description:
      "Professional career guidance, resume optimization, and interview preparation services.",
    features: [
      "Resume writing",
      "Interview coaching",
      "Career planning",
      "Salary negotiation",
    ],
    pricing: "$200-500 per session",
  },
];

const industries = [
  {
    icon: Code,
    name: "Technology",
    description: "Software, hardware, and IT services companies",
    roles: [
      "Software Engineers",
      "Product Managers",
      "DevOps Engineers",
      "Data Scientists",
    ],
    count: "2,500+ placements",
  },
  {
    icon: Building,
    name: "Financial Services",
    description: "Banks, fintech, and investment firms",
    roles: [
      "Financial Analysts",
      "Risk Managers",
      "Compliance Officers",
      "Traders",
    ],
    count: "800+ placements",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Hospitals, biotech, and medical device companies",
    roles: [
      "Medical Professionals",
      "Healthcare IT",
      "Biotech Researchers",
      "Administrators",
    ],
    count: "600+ placements",
  },
  {
    icon: Briefcase,
    name: "Consulting",
    description: "Management consulting and professional services",
    roles: [
      "Management Consultants",
      "Business Analysts",
      "Project Managers",
      "Strategy Advisors",
    ],
    count: "400+ placements",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We start with a detailed discussion about your needs, company culture, and ideal candidate profile.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Candidate Sourcing",
    description:
      "Our team actively searches and screens candidates from our network and external sources.",
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Screening & Assessment",
    description:
      "Comprehensive evaluation including technical skills, cultural fit, and background verification.",
    duration: "2-3 days",
  },
  {
    step: 4,
    title: "Client Presentation",
    description:
      "We present you with a curated list of top candidates with detailed profiles and assessments.",
    duration: "1 day",
  },
  {
    step: 5,
    title: "Interview Coordination",
    description:
      "We coordinate and facilitate interviews between you and the selected candidates.",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Offer & Onboarding",
    description:
      "Support with offer negotiation, acceptance, and smooth onboarding process.",
    duration: "1-2 weeks",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 sm:text-5xl">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive recruitment and staffing solutions tailored to your
              unique needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">18 Days</div>
                <div className="text-sm text-gray-600">
                  Average Time to Hire
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="industries">Industries</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-12">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      What We Offer
                    </h2>
                    <p className="text-lg text-gray-600">
                      End-to-end recruitment solutions for every hiring need
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="p-3 bg-teal-100 rounded-lg">
                                <service.icon className="h-6 w-6 text-teal-600" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">
                                  {service.title}
                                </CardTitle>
                                <Badge variant="secondary" className="mt-1">
                                  {service.pricing}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">
                                Key Specializations:
                              </h4>
                              <ul className="space-y-1">
                                {service.features.map((feature) => (
                                  <li
                                    key={feature}
                                    className="text-sm text-gray-600 flex items-center gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="outline"
                                className="w-full mt-4 bg-transparent"
                              >
                                Learn More
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industries" className="space-y-12">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Industries We Serve
                    </h2>
                    <p className="text-lg text-gray-600">
                      Deep expertise across major industry verticals
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industries.map((industry, index) => (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-teal-100 rounded-lg">
                                  <industry.icon className="h-6 w-6 text-teal-600" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl">
                                    {industry.name}
                                  </CardTitle>
                                  <Badge variant="outline" className="mt-1">
                                    {industry.count}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {industry.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">
                                Common Roles:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {industry.roles.map((role) => (
                                  <Badge
                                    key={role}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {role}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="process" className="space-y-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Our Proven Process
                    </h2>
                    <p className="text-lg text-gray-600">
                      A systematic approach that delivers results
                    </p>
                  </div>

                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold">
                                  {step.title}
                                </h3>
                                <Badge variant="outline">{step.duration}</Badge>
                              </div>
                              <p className="text-gray-600">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <Card className="bg-teal-50 border-teal-200 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Total Timeline: 3-6 Weeks
                      </h3>
                      <p className="text-gray-600 mb-6">
                        From initial consultation to successful placement
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start Your Search
                      </Button>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600">
                      No hidden fees, clear pricing structure
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-8">
                      <Card className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              Permanent Placements
                            </h3>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Junior Level (0-2 years)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  $2,500
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Mid Level (3-5 years)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  $4,500
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Senior Level (5+ years)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  $7,500
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Executive Level
                                </span>
                                <span className="text-teal-600 font-bold">
                                  15-25% of salary
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              Contract Staffing
                            </h3>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Short-term (1-3 months)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  15% markup
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Medium-term (3-6 months)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  12% markup
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Long-term (6+ months)
                                </span>
                                <span className="text-teal-600 font-bold">
                                  10% markup
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  Contract-to-hire
                                </span>
                                <span className="text-teal-600 font-bold">
                                  Conversion fee applies
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-8 bg-teal-50 border-teal-200">
                        <div className="text-center">
                          <Calculator className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            What's Included
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div>
                              <h4 className="font-semibold mb-2">Pre-Hire</h4>
                              <ul className="text-sm space-y-1">
                                <li>• Candidate sourcing</li>
                                <li>• Skills assessment</li>
                                <li>• Background checks</li>
                                <li>• Interview coordination</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                During Hire
                              </h4>
                              <ul className="text-sm space-y-1">
                                <li>• Offer negotiation</li>
                                <li>• Reference checks</li>
                                <li>• Onboarding support</li>
                                <li>• Documentation</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Post-Hire</h4>
                              <ul className="text-sm space-y-1">
                                <li>• 90-day guarantee</li>
                                <li>• Follow-up support</li>
                                <li>• Performance tracking</li>
                                <li>• Replacement if needed</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
