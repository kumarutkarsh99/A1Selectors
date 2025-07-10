// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import {
//   Calendar,
//   Clock,
//   ArrowLeft,
//   Share2,
//   Bookmark,
//   ThumbsUp,
//   MessageCircle,
//   Twitter,
//   Linkedin,
//   Facebook,
// } from "lucide-react";

// interface BlogPostPageProps {
//   onBack: () => void;
// }

// export default function BlogPostPage({ onBack }: BlogPostPageProps) {
//   const blogPost = {
//     id: 1,
//     title: "Top 10 Tech Skills in Demand for 2024",
//     excerpt:
//       "Discover the most sought-after technical skills that employers are looking for this year, from AI and machine learning to cloud computing and cybersecurity.",
//     content: `
//       <p>The technology landscape is evolving at an unprecedented pace, and with it, the demand for specific technical skills continues to shift. As we move through 2024, certain skills have emerged as particularly valuable in the job market. Whether you're a seasoned professional looking to upskill or a newcomer to the tech industry, understanding these in-demand skills can help guide your career development.</p>

//       <h2>1. Artificial Intelligence and Machine Learning</h2>
//       <p>AI and ML continue to dominate the tech skills landscape. Companies across all industries are looking for professionals who can develop, implement, and maintain AI systems. Key areas include:</p>
//       <ul>
//         <li>Python programming for AI/ML</li>
//         <li>TensorFlow and PyTorch frameworks</li>
//         <li>Natural Language Processing (NLP)</li>
//         <li>Computer Vision</li>
//         <li>Deep Learning algorithms</li>
//       </ul>

//       <h2>2. Cloud Computing</h2>
//       <p>With the continued shift to cloud-first strategies, cloud computing skills remain highly sought after. The major cloud platforms are seeing tremendous growth:</p>
//       <ul>
//         <li>Amazon Web Services (AWS)</li>
//         <li>Microsoft Azure</li>
//         <li>Google Cloud Platform (GCP)</li>
//         <li>Cloud architecture and migration</li>
//         <li>Serverless computing</li>
//       </ul>

//       <h2>3. Cybersecurity</h2>
//       <p>As cyber threats become more sophisticated, the demand for cybersecurity professionals continues to grow. Essential skills include:</p>
//       <ul>
//         <li>Ethical hacking and penetration testing</li>
//         <li>Security architecture</li>
//         <li>Incident response</li>
//         <li>Risk assessment</li>
//         <li>Compliance and governance</li>
//       </ul>

//       <h2>4. DevOps and Site Reliability Engineering</h2>
//       <p>The integration of development and operations continues to be crucial for modern software delivery:</p>
//       <ul>
//         <li>Docker and Kubernetes</li>
//         <li>CI/CD pipelines</li>
//         <li>Infrastructure as Code (IaC)</li>
//         <li>Monitoring and observability</li>
//         <li>Automation tools</li>
//       </ul>

//       <h2>5. Data Science and Analytics</h2>
//       <p>Data-driven decision making is more important than ever, making data science skills highly valuable:</p>
//       <ul>
//         <li>Statistical analysis and modeling</li>
//         <li>Data visualization tools (Tableau, Power BI)</li>
//         <li>Big data technologies (Spark, Hadoop)</li>
//         <li>SQL and database management</li>
//         <li>Business intelligence</li>
//       </ul>

//       <h2>Conclusion</h2>
//       <p>The tech industry's rapid evolution means that continuous learning is essential. While these skills are currently in high demand, the landscape will continue to change. The key is to stay curious, keep learning, and adapt to new technologies as they emerge.</p>

//       <p>Whether you're looking to break into tech or advance your current career, focusing on these in-demand skills can significantly improve your job prospects and earning potential in 2024 and beyond.</p>
//     `,
//     category: "Tech Trends",
//     author: {
//       name: "Sarah Johnson",
//       role: "Senior Tech Recruiter",
//       avatar: "/placeholder.svg?height=40&width=40",
//       bio: "Sarah has over 10 years of experience in tech recruitment and regularly writes about industry trends and career development.",
//     },
//     date: "Dec 15, 2023",
//     readTime: "8 min read",
//     image: "/placeholder.svg?height=400&width=800",
//     tags: ["Technology", "Career Development", "Skills", "2024 Trends"],
//     likes: 142,
//     comments: 28,
//     shares: 56,
//   };

//   const relatedPosts = [
//     {
//       title: "How to Ace Your Remote Job Interview",
//       category: "Career Tips",
//       date: "Dec 12, 2023",
//       readTime: "7 min read",
//     },
//     {
//       title: "Building Diverse and Inclusive Teams",
//       category: "HR Insights",
//       date: "Dec 10, 2023",
//       readTime: "6 min read",
//     },
//     {
//       title: "The Future of Work: Hybrid vs Remote",
//       category: "Industry News",
//       date: "Dec 8, 2023",
//       readTime: "5 min read",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pt-16">
//       {/* Header */}
//       <section className="bg-white py-8 border-b border-slate-200">
//         <div className="container mx-auto px-4">
//           <Button
//             variant="ghost"
//             onClick={onBack}
//             className="mb-6 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Blog
//           </Button>

//           <div className="max-w-4xl mx-auto">
//             <div className="flex items-center gap-4 mb-6">
//               <Badge className="bg-teal-100 text-teal-700">
//                 {blogPost.category}
//               </Badge>
//               <div className="flex items-center text-sm text-slate-500">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 {blogPost.date}
//               </div>
//               <div className="flex items-center text-sm text-slate-500">
//                 <Clock className="h-4 w-4 mr-1" />
//                 {blogPost.readTime}
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
//               {blogPost.title}
//             </h1>

//             <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//               {blogPost.excerpt}
//             </p>

//             {/* Author Info */}
//             <div className="flex items-center justify-between mb-8">
//               <div className="flex items-center">
//                 <Avatar className="h-12 w-12 mr-4">
//                   <AvatarFallback className="bg-teal-100 text-teal-600">
//                     {blogPost.author.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold text-slate-800">
//                     {blogPost.author.name}
//                   </p>
//                   <p className="text-sm text-slate-600">
//                     {blogPost.author.role}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
//                 >
//                   <Share2 className="h-4 w-4 mr-2" />
//                   Share
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="border-slate-300 bg-transparent"
//                 >
//                   <Bookmark className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Image */}
//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <img
//               src={blogPost.image || "/placeholder.svg"}
//               alt={blogPost.title}
//               className="w-full h-96 object-cover rounded-lg bg-teal-100"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Article Content */}
//       <section className="pb-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//               {/* Main Content */}
//               <div className="lg:col-span-3">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="prose prose-lg max-w-none"
//                 >
//                   <div
//                     className="text-slate-700 leading-relaxed"
//                     dangerouslySetInnerHTML={{
//                       __html: blogPost.content.replace(/\n/g, "<br/>"),
//                     }}
//                   />
//                 </motion.div>

//                 {/* Tags */}
//                 <div className="mt-12 pt-8 border-t border-slate-200">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-4">
//                     Tags
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {blogPost.tags.map((tag, index) => (
//                       <Badge
//                         key={index}
//                         variant="outline"
//                         className="text-slate-600"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Engagement */}
//                 <div className="mt-8 pt-8 border-t border-slate-200">
//                   <div className="flex items-center gap-6">
//                     <Button
//                       variant="ghost"
//                       className="text-slate-600 hover:text-teal-600"
//                     >
//                       <ThumbsUp className="h-4 w-4 mr-2" />
//                       {blogPost.likes} Likes
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       className="text-slate-600 hover:text-teal-600"
//                     >
//                       <MessageCircle className="h-4 w-4 mr-2" />
//                       {blogPost.comments} Comments
//                     </Button>
//                     <div className="flex items-center gap-2 ml-auto">
//                       <span className="text-sm text-slate-600">Share:</span>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="text-slate-600 hover:text-blue-600"
//                       >
//                         <Twitter className="h-4 w-4" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="text-slate-600 hover:text-blue-700"
//                       >
//                         <Linkedin className="h-4 w-4" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="text-slate-600 hover:text-blue-600"
//                       >
//                         <Facebook className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Author Bio */}
//                 <Card className="mt-12">
//                   <CardContent className="p-6">
//                     <div className="flex items-start">
//                       <Avatar className="h-16 w-16 mr-4">
//                         <AvatarFallback className="bg-teal-100 text-teal-600 text-lg">
//                           {blogPost.author.name
//                             .split(" ")
//                             .map((n) => n[0])
//                             .join("")}
//                         </AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <h3 className="text-lg font-semibold text-slate-800 mb-1">
//                           About {blogPost.author.name}
//                         </h3>
//                         <p className="text-teal-600 mb-3">
//                           {blogPost.author.role}
//                         </p>
//                         <p className="text-slate-600">{blogPost.author.bio}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:col-span-1">
//                 <div className="sticky top-24">
//                   <Card>
//                     <CardContent className="p-6">
//                       <h3 className="text-lg font-semibold text-slate-800 mb-4">
//                         Related Articles
//                       </h3>
//                       <div className="space-y-4">
//                         {relatedPosts.map((post, index) => (
//                           <div
//                             key={index}
//                             className="pb-4 border-b border-slate-200 last:border-b-0"
//                           >
//                             <h4 className="font-medium text-slate-800 mb-2 hover:text-teal-600 cursor-pointer line-clamp-2">
//                               {post.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-slate-500">
//                               <Badge
//                                 variant="secondary"
//                                 className="bg-teal-100 text-teal-700 text-xs"
//                               >
//                                 {post.category}
//                               </Badge>
//                               <span>{post.readTime}</span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Newsletter Signup */}
//                   <Card className="mt-6">
//                     <CardContent className="p-6">
//                       <h3 className="text-lg font-semibold text-slate-800 mb-3">
//                         Stay Updated
//                       </h3>
//                       <p className="text-sm text-slate-600 mb-4">
//                         Get the latest career insights delivered to your inbox.
//                       </p>
//                       <div className="space-y-3">
//                         <input
//                           type="email"
//                           placeholder="Enter your email"
//                           className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
//                         />
//                         <Button className="w-full bg-teal-600 hover:bg-teal-700 text-sm">
//                           Subscribe
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
