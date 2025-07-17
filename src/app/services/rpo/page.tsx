"use client";

import Head from "next/head";
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
  Building,
  Briefcase,
  Heart,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

// RPO Services Data
const services = [
  {
    icon: Users,
    title: "Service/Enterprise RPO",
    description:
      "End-to-end recruitment lifecycle management for all departments and locations within your organization.",
    features: [
      "Dedicated recruiters for every department",
      "Hiring for executive, permanent & temp roles",
      "Tech-enabled sourcing and screening",
      "Full-cycle recruitment support",
    ],
    pricing: "Custom Quote",
  },
  {
    icon: Briefcase,
    title: "Short-term or Project-based RPO",
    description:
      "Tailored RPO for time-bound or project-specific hiring needs.",
    features: [
      "Rapid deployment of recruiters",
      "Industry-specific candidate pipelines",
      "Scalable talent solutions",
      "Ideal for urgent hiring spikes",
    ],
    pricing: "Starting at $1,500",
  },
  {
    icon: Search,
    title: "Recruitment Process Analysis",
    description:
      "In-depth audit of your current recruitment function to align with modern hiring trends.",
    features: [
      "End-to-end process review",
      "Benchmarking against industry standards",
      "Insights on automation and efficiency",
      "Roadmap for improvements",
    ],
    pricing: "$500 per audit",
  },
];

// Industries Data
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
  {
    icon: Calculator,
    name: "RPO Across All Industries",
    description:
      "Our flexible RPO models cater to a wide range of sectors—from tech startups to healthcare giants.",
    roles: [
      "High-volume hiring",
      "Executive search",
      "Contract-to-hire models",
      "Customized HR workflows",
    ],
    count: "1,500+ RPO engagements",
  },
];

// Process Steps Data
const processSteps = [
  {
    step: 1,
    title: "RPO Kickoff Consultation",
    description: "Understand your hiring goals, timeline, and cultural needs.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Custom Strategy Design",
    description:
      "We define the RPO model (enterprise, project-based, or audit) and tailor the workflow.",
    duration: "1-2 days",
  },
  {
    step: 3,
    title: "Talent Pool Mapping",
    description:
      "Research, build and segment candidate pipelines aligned to your requirements.",
    duration: "2-3 days",
  },
  {
    step: 4,
    title: "Screening & Coordination",
    description:
      "Screening, interviews, and candidate management handled entirely by our team.",
    duration: "5-10 days",
  },
  {
    step: 5,
    title: "Client Review & Interviews",
    description:
      "We present qualified talent, schedule interviews, and gather feedback.",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Offer, Onboarding & Reporting",
    description:
      "From negotiation to onboarding, we streamline every step with regular reports.",
    duration: "1 week",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>RPO Services | A1 Selectors</title>
        <meta
          name="description"
          content="Expert RPO services for end-to-end hiring needs. Fast, scalable, and cost-effective recruitment solutions."
        />
      </Head>

      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
                Recruitment Process Outsourcing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic, end-to-end hiring solutions designed to save your
                time, reduce recruitment costs, and elevate your hiring
                outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">
                    18 Days
                  </div>
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

        {/* Tabs Section */}
        <section className="p-20">
          <div className="container mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=" mb-16"
            >
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                  <TabsTrigger value="overview">RPO Services</TabsTrigger>
                  <TabsTrigger value="industries">Industries</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((svc) => (
                      <motion.div
                        key={svc.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="p-3 bg-teal-100 rounded-lg">
                                <svc.icon className="h-6 w-6 text-teal-600" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">
                                  {svc.title}
                                </CardTitle>
                                <Badge variant="secondary" className="mt-1">
                                  {svc.pricing}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {svc.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-semibold text-sm mb-2">
                              Key Highlights:
                            </h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                              {svc.features.map((f) => (
                                <li key={f}>{f}</li>
                              ))}
                            </ul>
                            <Button variant="outline" className="w-full">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Industries Tab */}
                <TabsContent value="industries" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industries.map((ind) => (
                      <motion.div
                        key={ind.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="p-3 bg-teal-100 rounded-lg">
                                <ind.icon className="h-6 w-6 text-teal-600" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">
                                  {ind.name}
                                </CardTitle>
                                <Badge variant="outline" className="mt-1">
                                  {ind.count}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {ind.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-semibold text-sm mb-2">
                              Common Roles:
                            </h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                              {ind.roles.map((r) => (
                                <li key={r}>{r}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-12">
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {processSteps.map((step) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Card className="p-6">
                          <div className="flex items-start gap-6">
                            <div>
                              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
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
                        Total Timeline: 3–6 Weeks
                      </h3>
                      <p className="text-gray-600 mb-6">
                        From initial consultation to fully integrated RPO
                        delivery
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start Your RPO Journey
                      </Button>
                    </Card>
                  </div>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Permanent & Contract Staffing */}
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold mb-4">
                        Permanent Placements
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Junior (0-2 yrs)</span>
                          <span className="font-bold text-teal-600">
                            $2,500
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Mid (3-5 yrs)</span>
                          <span className="font-bold text-teal-600">
                            $4,500
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Senior (5+ yrs)</span>
                          <span className="font-bold text-teal-600">
                            $7,500
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Executive</span>
                          <span className="font-bold text-teal-600">
                            15-25% salary
                          </span>
                        </div>
                      </div>
                    </Card>

                    {/* RPO Engagements */}
                    <Card className="p-8 bg-teal-50 border-teal-200">
                      <div className="text-center mb-6">
                        <Calculator className="mx-auto mb-4 h-12 w-12 text-teal-600" />
                        <h3 className="text-2xl font-bold">RPO Engagements</h3>
                        <p className="text-gray-600">
                          Custom models tailored to your scale
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Enterprise RPO</span>
                          <span className="font-bold text-teal-600">
                            Custom Quote
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Project-based RPO</span>
                          <span className="font-bold text-teal-600">
                            $1,500+
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Process Audit</span>
                          <span className="font-bold text-teal-600">$500</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation with our RPO experts today.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Book a Demo
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
