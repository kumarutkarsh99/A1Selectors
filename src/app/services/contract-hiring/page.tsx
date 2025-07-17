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
  Briefcase,
  Code,
  Building,
  Heart,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

// Contract Recruitment Data
const services = [
  {
    icon: Briefcase,
    title: "Agile Workforce Deployment",
    description:
      "Rapidly scale your team for the exact duration and scope of any project—from weeks to months.",
    features: [
      "Flexible contract durations",
      "Quick ramp‑up & ramp‑down",
      "Project‑focused resourcing",
      "No long‑term commitments",
    ],
    pricing: "Custom Quote",
  },
  {
    icon: Users,
    title: "Niche & Specialized Talent",
    description:
      "Access experts in IT, finance, marketing, compliance, and more—qualified technically and culturally.",
    features: [
      "Industry‑specific candidate pools",
      "Technical & soft‑skills assessments",
      "Culture-fit screening",
      "On‑demand availability",
    ],
    pricing: "Starting at $1,200 per contract",
  },
  {
    icon: Code,
    title: "Volume & Bulk Contracts",
    description:
      "Fill multiple roles simultaneously with streamlined bulk hiring, assessments, and onboarding.",
    features: [
      "Fast‑track shortlisting",
      "Group assessments",
      "Consolidated onboarding",
      "Team deployments",
    ],
    pricing: "Volume discounts available",
  },
  {
    icon: Calculator,
    title: "Managed Onboarding & Compliance",
    description:
      "We handle documentation, payroll, and legal compliance so you can focus on project delivery.",
    features: [
      "Background & compliance checks",
      "Contract drafting & payroll",
      "Orientation support",
      "Seamless handovers & conversions",
    ],
    pricing: "$500 per month (per contractor)",
  },
];

// Industry Verticals (same as before)
const industries = [
  {
    icon: Code,
    name: "Information Technology",
    description: "Developers, SysAdmins, Data Scientists, Security Analysts",
    roles: ["Developers", "SysAdmins", "Data Scientists", "Security Analysts"],
    count: "1,500+ contracts filled",
  },
  {
    icon: Building,
    name: "Finance & Banking",
    description: "Analysts, Risk Managers, Compliance Officers",
    roles: ["Analysts", "Risk Managers", "Compliance Officers"],
    count: "800+ contracts filled",
  },
  {
    icon: Heart,
    name: "Healthcare & Pharma",
    description: "Nurses, Lab Technicians, Clinical Researchers",
    roles: ["Nurses", "Lab Technicians", "Clinical Researchers"],
    count: "600+ contracts filled",
  },
  {
    icon: Users,
    name: "Sales & Marketing",
    description: "Sales Executives, Digital Marketers, Brand Managers",
    roles: ["Sales Executives", "Digital Marketers", "Brand Managers"],
    count: "700+ contracts filled",
  },
  {
    icon: Briefcase,
    name: "Consulting & Operations",
    description: "Consultants, Business Analysts, Project Managers",
    roles: ["Consultants", "Business Analysts", "Project Managers"],
    count: "500+ contracts filled",
  },
];

// Process Steps
const processSteps = [
  {
    step: 1,
    title: "Needs Assessment",
    description: "Define project scope, duration, and skill requirements.",
    duration: "1-2 days",
  },
  {
    step: 2,
    title: "Candidate Sourcing",
    description:
      "Leverage our networks to quickly identify qualified contractors.",
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Screening & Shortlisting",
    description:
      "Conduct technical tests, interviews, and cultural fit evaluations.",
    duration: "2-4 days",
  },
  {
    step: 4,
    title: "Onboarding & Compliance",
    description: "Manage contracts, payroll setup, and all legal requirements.",
    duration: "1 week",
  },
  {
    step: 5,
    title: "Handover & Conversion",
    description:
      "Facilitate knowledge transfer and optional conversion to permanent hires.",
    duration: "As needed",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Contract Recruitment | A1 Selectors</title>
        <meta
          name="description"
          content="Flexible contract recruitment for specialized and volume hiring. Rapid deployment, managed compliance, and seamless conversions."
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
                Contract Recruitment
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Flexible, on‑demand staffing for projects of any size.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Agile deployments, niche expertise, and fully managed
                compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">1,500+</div>
                  <div className="text-sm text-gray-600">Contracts Filled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">
                    10 Days
                  </div>
                  <div className="text-sm text-gray-600">Avg. Time to Fill</div>
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
                        Total Timeline: Varies by project
                      </h3>
                      <p className="text-gray-600 mb-6">
                        From assessment to contract completion
                      </p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start Your Contract Search
                      </Button>
                    </Card>
                  </div>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold mb-4">
                        Contract Placement Fees
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Standard Contract</span>
                          <span className="font-bold text-teal-600">
                            $1,200+
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Specialized Roles</span>
                          <span className="font-bold text-teal-600">
                            $1,800+
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                          <span>Bulk/Volume Hiring</span>
                          <span className="font-bold text-teal-600">
                            Contact Us
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 bg-teal-50 border-teal-200">
                      <div className="text-center mb-6">
                        <Calculator className="mx-auto mb-4 h-12 w-12 text-teal-600" />
                        <h3 className="text-2xl font-bold">
                          Managed Compliance Fees
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Onboarding & Docs</span>
                          <span className="font-bold text-teal-600">
                            $500/mo per contractor
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Payroll & Legal</span>
                          <span className="font-bold text-teal-600">
                            Custom Quote
                          </span>
                        </div>
                        <div className="flex justify-between p-4 bg-white rounded-lg">
                          <span>Conversion Service</span>
                          <span className="font-bold text-teal-600">
                            10% of first year CTC
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
              Ready for Flexible Contract Staffing?
            </h2>
            <p className="text-gray-600 mb-6">
              Partner with our expert contractors and project teams today.
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
