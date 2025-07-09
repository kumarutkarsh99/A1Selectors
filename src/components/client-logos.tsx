"use client";

import { motion } from "framer-motion";

export default function ClientLogos() {
  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupXYZ", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Enterprise Inc", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Innovation Labs", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Design Studio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Cloud Solutions", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Data Systems", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Growth Corp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Future Tech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Digital Works", logo: "/placeholder.svg?height=60&width=120" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various
            industries.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -50 * clients.length + "%"],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-36 h-12 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-600 font-semibold text-sm">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
