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

// Staffing Services Data
const services = [
  {
    icon: Briefcase,
    title: "Contract & Temporary Staffing",
    description:
      "Temporary or contract staffing allows companies to hire professionals for project-based work, reducing burden on full-time staff.",
    features: [
      "Rapid deployment of skilled professionals",
      "Scalable workforce for tight deadlines",
      "Reduced administrative and recruitment costs",
      "Flexible contract durations",
    ],
    pricing: "Custom Quote",
  },
  {
    icon: Users,
    title: "Mutual-Benefit Staffing",
    description:
      "We connect organizations with niche professionals and offer opportunities to job seekers, ensuring mutual value.",
    features: [
      "Access to extensive candidate networks",
      "Opportunities for active and passive candidates",
      "Dedicated recruiter and trainer support",
      "Streamlined hiring process",
    ],
    pricing: "Starting at $1,000 per placement",
  },
  {
    icon: Search,
    title: "HR Management Outsourcing",
    description:
      "Outsource your HR recruitment and onboarding to our experts, so you can focus on core business functions.",
    features: [
      "Resume screening and skill assessments",
      "Comprehensive onboarding and training",
      "Performance tracking and reporting",
      "Compliance and documentation management",
    ],
    pricing: "$500 per month",
  },
];

// Industries Data (unchanged)
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
    name: "Contract Staffing Across Industries",
    description:
      "Our temporary staffing solutions serve diverse sectors with agility and expertise.",
    roles: [
      "High-volume hiring",
      "Niche expertise",
      "Short-term projects",
      "Contract-to-hire models",
    ],
    count: "1,500+ engagements",
  },
];

// Process Steps Data
const processSteps = [
  {
    step: 1,
    title: "Needs Assessment",
    description:
      "We discuss your project scope, timelines, and specific skill requirements.",
    duration: "1-2 days",
  },
  {
    step: 2,
    title: "Candidate Sourcing",
    description:
      "Leveraging our network and databases to identify qualified professionals.",
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Screening & Shortlisting",
    description:
      "Thorough resume screening, skill assessments, and preliminary interviews.",
    duration: "2-4 days",
  },
  {
    step: 4,
    title: "Client Presentation",
    description:
      "Presenting you with a curated list of top candidates and detailed profiles.",
    duration: "1 day",
  },
  {
    step: 5,
    title: "Onboarding & Support",
    description:
      "Coordinating offers, onboarding, and providing ongoing HR support.",
    duration: "1 week",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Staffing Services | A1 Selectors</title>
        <meta
          name="description"
          content="Temporary, contract, and HR outsourcing services. Reduce costs, meet project demands, and strengthen your workforce."
        />
      </Head>

      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
                Staffing Services
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Temporary & contract staffing for your critical projects.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Fulfill work demands, reduce costs, and strengthen your team.
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
                  <div className="text-sm text-gray-600">Avg. Fill Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Global Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="p-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                  <TabsTrigger value="overview">Services</TabsTrigger>
                  <TabsTrigger value="industries">Industries</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((svc) => (
                      <Card
                        key={svc.title}
                        className="hover:shadow-lg transition-shadow"
                      >
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
                          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                            {svc.features.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                          <Button variant="outline" className="w-full">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Industries Tab */}
                <TabsContent value="industries" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industries.map((ind) => (
                      <Card
                        key={ind.name}
                        className="hover:shadow-lg transition-shadow"
                      >
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
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {ind.roles.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-12">
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {processSteps.map((step) => (
                      <Card key={step.step} className="p-6">
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
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <Card className="bg-teal-50 border-teal-200 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Total Timeline: 3–6 Weeks
                      </h3>
                      <p className="text-gray-600 mb-6">
                        From project start to fully staffed teams
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start Your Staffing Journey
                      </Button>
                    </Card>
                  </div>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold mb-4">
                        Temporary Staffing Rates
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Junior Specialists</span>
                          <span className="font-bold text-teal-600">
                            $20/hr
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Mid-Level Experts</span>
                          <span className="font-bold text-teal-600">
                            $35/hr
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Senior Consultants</span>
                          <span className="font-bold text-teal-600">
                            $50/hr
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 bg-teal-50 border-teal-200">
                      <div className="text-center mb-6">
                        <Calculator className="mx-auto mb-4 h-12 w-12 text-teal-600" />
                        <h3 className="text-2xl font-bold">
                          HR Outsourcing Fees
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Monthly Retainer</span>
                          <span className="font-bold text-teal-600">
                            $500/mo
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Per-Hire Fee</span>
                          <span className="font-bold text-teal-600">
                            $1,000
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Custom Projects</span>
                          <span className="font-bold text-teal-600">
                            Custom Quote
                          </span>
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
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation with our staffing experts today.
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
