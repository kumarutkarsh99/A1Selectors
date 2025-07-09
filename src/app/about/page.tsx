"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, Heart, Lightbulb, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
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
              Connecting Talent with <span className="text-teal-600">Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              For over a decade, we've been bridging the gap between exceptional talent and outstanding companies,
              creating success stories that transform careers and businesses.
            </p>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "15,000+", label: "Successful Placements" },
              { number: "500+", label: "Partner Companies" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{stat.number}</h3>
                <p className="text-slate-600 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To revolutionize the recruitment industry by creating meaningful connections between talented
                    professionals and forward-thinking companies. We believe that the right match can transform both
                    careers and businesses, driving innovation and growth across industries.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To become the world's most trusted recruitment partner, known for our integrity, innovation, and
                    impact. We envision a future where every professional finds their perfect role and every company
                    builds their dream team through our platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and candidates.
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
                icon: Shield,
                title: "Integrity",
                description: "We operate with complete transparency and honesty in all our interactions.",
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "We understand the human side of recruitment and treat everyone with respect.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in everything we deliver.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "We continuously evolve our methods to stay ahead of industry trends.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-slate-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to connecting talent with opportunity.
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
                role: "CEO & Founder",
                bio: "15+ years in recruitment with a passion for connecting people with their dream careers.",
                image: "/placeholder.svg?height=300&width=300",
                specialties: ["Executive Search", "Tech Recruitment", "Strategy"],
              },
              {
                name: "Michael Chen",
                role: "Head of Technology",
                bio: "Former software engineer turned recruiter, specializing in technical talent acquisition.",
                image: "/placeholder.svg?height=300&width=300",
                specialties: ["Tech Hiring", "Engineering", "Product"],
              },
              {
                name: "Emily Rodriguez",
                role: "Director of Operations",
                bio: "Operations expert ensuring smooth processes and exceptional client experiences.",
                image: "/placeholder.svg?height=300&width=300",
                specialties: ["Operations", "Client Success", "Process Optimization"],
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 bg-teal-100"
                    />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-teal-100 text-teal-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose TalentConnect?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              What sets us apart in the competitive world of recruitment and staffing.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "Industry Expertise",
                description: "Deep knowledge across tech, finance, healthcare, and other key industries.",
                points: ["Specialized recruiters", "Industry insights", "Market knowledge", "Trend awareness"],
              },
              {
                title: "Proven Track Record",
                description: "Over 15,000 successful placements with a 98% client satisfaction rate.",
                points: ["High success rate", "Quality matches", "Long-term relationships", "Repeat clients"],
              },
              {
                title: "Personalized Service",
                description: "Tailored approach for both candidates and employers with dedicated support.",
                points: ["Dedicated consultants", "Custom solutions", "Personal attention", "Ongoing support"],
              },
              {
                title: "Technology-Driven",
                description: "Advanced matching algorithms and modern tools for efficient recruitment.",
                points: ["AI-powered matching", "Modern platform", "Efficient processes", "Data-driven insights"],
              },
            ].map((advantage, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white">
                  <CardHeader>
                    <CardTitle className="text-slate-800">{advantage.title}</CardTitle>
                    <CardDescription className="text-slate-600">{advantage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {advantage.points.map((point, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career or Team?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of professionals and companies who have found success through TalentConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-50 px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
