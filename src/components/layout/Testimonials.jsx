import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      company: "Goldman Sachs",
      image: "SC",
      rating: 5,
      text: "AUREUS transformed our crypto strategy. The gold backing provides the stability our institutional clients demand while delivering exceptional returns."
    },
    {
      name: "Marcus Weber",
      role: "Investment Director", 
      company: "Swiss Private Bank",
      image: "MW",
      rating: 5,
      text: "Finally, a crypto platform that combines innovation with tangible assets. The transparency of their gold reserves is unmatched in the industry."
    },
    {
      name: "David Kim",
      role: "Hedge Fund Manager",
      company: "Apex Capital",
      image: "DK", 
      rating: 5,
      text: "18% APY backed by real gold? I was skeptical until I visited their Zurich vault. Now it's 30% of our portfolio. Exceptional platform."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-[#D4AF37]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what institutional investors and fund managers say about AUREUS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-50 p-8 rounded-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <Quote className="w-8 h-8 text-[#D4AF37] mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#D4AF37] font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-8 rounded-2xl border border-[#D4AF37]/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$500M+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
                <div className="text-gray-600">Active Investors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}