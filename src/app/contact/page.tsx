"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to find your next hire or dream job? We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Office Address</h3>
                        <p className="text-slate-600">
                          123 Business Avenue
                          <br />
                          Suite 100, Floor 10
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Phone Numbers</h3>
                        <p className="text-slate-600">
                          Main: +1 (555) 123-4567
                          <br />
                          Toll-free: +1 (800) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Email Addresses</h3>
                        <p className="text-slate-600">
                          General: hello@talentconnect.com
                          <br />
                          Employers: employers@talentconnect.com
                          <br />
                          Job Seekers: careers@talentconnect.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Business Hours</h3>
                        <p className="text-slate-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-teal-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                    <p className="text-teal-700 font-medium">Interactive Map</p>
                    <p className="text-teal-600 text-sm">View our location</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800">
                    <MessageSquare className="mr-2 h-5 w-5 text-teal-600" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Email Address</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Phone Number</label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">I am a</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jobseeker">Job Seeker</SelectItem>
                          <SelectItem value="employer">Employer</SelectItem>
                          <SelectItem value="partner">Business Partner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Subject</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="hiring">Hiring Services</SelectItem>
                          <SelectItem value="job-search">Job Search Help</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Company (Optional)</label>
                    <Input placeholder="Your company name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                    <Textarea placeholder="Tell us how we can help you..." rows={6} className="resize-none" />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services.
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
                question: "How quickly can you find candidates?",
                answer:
                  "Our average time to present qualified candidates is 48-72 hours, with most positions filled within 2-3 weeks.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We specialize in tech, finance, healthcare, and general business roles across all experience levels.",
              },
              {
                question: "Do you charge job seekers?",
                answer:
                  "No, our services are completely free for job seekers. We're paid by employers when we make successful placements.",
              },
              {
                question: "What's your success rate?",
                answer:
                  "We maintain a 95% success rate with over 15,000 successful placements and 98% client satisfaction.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-slate-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-800 mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
