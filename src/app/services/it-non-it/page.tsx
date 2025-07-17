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
  Users,
  Search,
  Briefcase,
  Code,
  Building,
  Heart,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

// Recruitment Services Data (IT & Non-IT)
const services = [
  {
    icon: Users,
    title: "Comprehensive Recruitment",
    description:
      "End-to-end hiring solutions for both IT and non-IT roles, tailored to your organizational needs.",
    features: [
      "Permanent, contract & temporary staffing",
      "Executive search & leadership hiring",
      "High-volume campus & bulk hiring",
      "Customized sourcing strategies",
    ],
    pricing: "Custom Quote",
  },
  {
    icon: Search,
    title: "Targeted Talent Acquisition",
    description:
      "Strategic sourcing and screening for niche skill sets across technology, finance, healthcare, and more.",
    features: [
      "Industry-specific candidate pools",
      "Advanced skill and behavioral assessments",
      "Diversity & inclusion hiring",
      "Regional and global talent mapping",
    ],
    pricing: "Starting at $1,200 per hire",
  },
  {
    icon: Briefcase,
    title: "Recruitment Process Outsourcing",
    description:
      "Full HR outsourcing including recruitment, onboarding, and workforce management across all functions.",
    features: [
      "End-to-end RPO services",
      "Onboarding & training support",
      "Performance monitoring & reporting",
      "Scalable recruitment teams",
    ],
    pricing: "$1,000 per month",
  },
];

// Industry Verticals Data
const industries = [
  {
    icon: Code,
    name: "Information Technology",
    description: "Software, hardware, cloud, data and security roles.",
    roles: ["Developers", "Data Scientists", "SysAdmins", "Security Analysts"],
    count: "2,000+ placements",
  },
  {
    icon: Building,
    name: "Finance & Banking",
    description: "Banking operations, fintech, risk and compliance roles.",
    roles: ["Analysts", "Risk Managers", "Compliance Officers"],
    count: "1,200+ placements",
  },
  {
    icon: Heart,
    name: "Healthcare & Pharma",
    description: "Clinical, research, and administrative positions.",
    roles: ["Nurses", "Lab Technicians", "Clinical Researchers"],
    count: "800+ placements",
  },
  {
    icon: Briefcase,
    name: "Management & Consulting",
    description: "Strategy, operations and advisory services roles.",
    roles: ["Consultants", "Business Analysts", "Project Managers"],
    count: "600+ placements",
  },
  {
    icon: Users,
    name: "Sales & Marketing",
    description: "Sales, marketing, and customer engagement functions.",
    roles: ["Sales Executives", "Digital Marketers", "Brand Managers"],
    count: "1,000+ placements",
  },
  {
    icon: Building,
    name: "Manufacturing & Operations",
    description: "Production, quality control and logistics roles.",
    roles: ["Engineers", "Quality Inspectors", "Logistics Coordinators"],
    count: "900+ placements",
  },
];

// Process Steps Data
const processSteps = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "Define job specifications, qualifications and cultural fit criteria.",
    duration: "1-2 days",
  },
  {
    step: 2,
    title: "Candidate Sourcing",
    description:
      "Leverage databases, networks, and job portals to attract talent.",
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Screening & Shortlisting",
    description:
      "Conduct resume reviews, skill tests, and preliminary interviews.",
    duration: "2-4 days",
  },
  {
    step: 4,
    title: "Client Interviews",
    description:
      "Coordinate interviews, gather feedback and refine candidate selection.",
    duration: "1-2 weeks",
  },
  {
    step: 5,
    title: "Offer & Onboarding",
    description: "Manage offers, contracts and seamless onboarding process.",
    duration: "1 week",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Recruitment Services | A1 Selectors</title>
        <meta
          name="description"
          content="Comprehensive recruitment services for IT and non‑IT roles. Staffing, RPO, and talent acquisition solutions."
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
                Recruitment Services
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Expert hiring solutions for IT and non‑IT sectors.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From niche technical roles to high-volume staffing, we've got
                you covered.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">95%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">5k+</div>
                  <div className="text-sm text-gray-600">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
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
                  <TabsTrigger value="overview">Overview</TabsTrigger>
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
                        From analysis to seamless onboarding
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start Your Recruitment Journey
                      </Button>
                    </Card>
                  </div>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold mb-4">
                        Standard Placement Fees
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>General Roles</span>
                          <span className="font-bold text-teal-600">
                            $1,000+
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Specialist Roles</span>
                          <span className="font-bold text-teal-600">
                            $1,500+
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Executive Search</span>
                          <span className="font-bold text-teal-600">
                            15-25% CTC
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 bg-teal-50 border-teal-200">
                      <div className="text-center mb-6">
                        <Calculator className="mx-auto mb-4 h-12 w-12 text-teal-600" />
                        <h3 className="text-2xl font-bold">
                          RPO & Outsourcing Fees
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Monthly RPO Retainer</span>
                          <span className="font-bold text-teal-600">
                            $1,000/mo
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Per-Hire Fee</span>
                          <span className="font-bold text-teal-600">
                            $1,200
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
              Schedule a free consultation with our recruitment experts today.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Book a Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
