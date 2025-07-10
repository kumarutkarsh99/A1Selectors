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
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";

interface BlogPageProps {
  onPostClick?: (postId: number) => void;
}

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

// Update the component signature
export default function BlogPage({ onPostClick }: BlogPageProps) {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tech Skills in Demand for 2024",
      excerpt:
        "Discover the most sought-after technical skills that employers are looking for this year, from AI and machine learning to cloud computing and cybersecurity.",
      category: "Tech Trends",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "How to Ace Your Remote Job Interview",
      excerpt:
        "Essential tips and best practices for succeeding in virtual interviews and landing remote positions in today's competitive job market.",
      category: "Career Tips",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Building Diverse and Inclusive Teams",
      excerpt:
        "Strategies for employers to create more diverse hiring practices and inclusive workplace cultures that drive innovation and success.",
      category: "HR Insights",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Salary Negotiation: A Complete Guide",
      excerpt:
        "Master the art of salary negotiation with proven strategies, scripts, and tips to get the compensation you deserve.",
      category: "Career Tips",
      author: "David Kim",
      date: "Dec 8, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "The Future of Work: Hybrid vs Remote",
      excerpt:
        "Exploring the evolving workplace landscape and what it means for both employers and employees in the post-pandemic world.",
      category: "Industry News",
      author: "Lisa Wang",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "AI in Recruitment: Opportunities and Challenges",
      excerpt:
        "How artificial intelligence is transforming the recruitment industry and what it means for the future of hiring.",
      category: "Tech Trends",
      author: "Alex Thompson",
      date: "Dec 3, 2023",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Tech Trends",
    "Career Tips",
    "HR Insights",
    "Industry News",
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Career Insights & Industry News
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in recruitment, career
              development, and workplace insights.
            </p>
          </motion.div>

          {/* Search and Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              Featured Article
            </h2>
            <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover bg-teal-100"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-teal-100 text-teal-700">
                      {blogPosts[0].category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 hover:text-teal-600 cursor-pointer">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-slate-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-slate-400 mr-2" />
                      <span className="text-sm text-slate-600">
                        {blogPosts[0].author}
                      </span>
                    </div>
                    <Button
                      className="bg-teal-600 hover:bg-teal-700"
                      onClick={() => onPostClick?.(blogPosts[0].id)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800">
              Latest Articles
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover bg-teal-100 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
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
                    <CardTitle className="text-slate-800 hover:text-teal-600 cursor-pointer line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                      onClick={() => onPostClick?.(post.id)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-teal-100 mb-8">
              {`Get the latest career insights and industry news delivered to your inbox weekly.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white border-white text-slate-800 placeholder:text-slate-400"
              />
              <Button className="bg-white text-teal-600 hover:bg-slate-50 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
