import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInFromCenter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="w-full py-16 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
            Contact Us
          </h2>
          <div className="w-36 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="text-center mb-12 max-w-4xl mx-auto text-gray-800 pt-12">
            Have questions or need a quote? Reach out to our team and we'll get
            back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Address Box */}
          <motion.div
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-black/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromLeft}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Address</h3>
                <div className="space-y-1">
                  <p>Fairview Farivew</p>
                  <p>Quezon City</p>
                </div>
              </div>
              <MapPinIcon className="w-12 h-12 text-white/80 flex-shrink-0" />
            </div>
          </motion.div>

          {/* Phone Box */}
          <motion.a
            href="tel:+15551234567"
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-black/30 transition-colors block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromLeft}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Phone</h3>
                <div className="space-y-1">
                  <p>(555) 123-4567</p>
                  <p>(555) 987-6543</p>
                </div>
              </div>
              <PhoneIcon className="w-12 h-12 text-white/80 flex-shrink-0" />
            </div>
          </motion.a>

          {/* Email Box */}
          <motion.a
            href="mailto:info@bigctrucking.com"
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-black/30 transition-colors block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromRight}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Email</h3>
                <div className="space-y-1">
                  <p>info@bigctrucking.com</p>
                  <p>dispatch@bigctrucking.com</p>
                </div>
              </div>
              <MailIcon className="w-12 h-12 text-white/80 flex-shrink-0" />
            </div>
          </motion.a>

          {/* Operating Hours Box */}
          <motion.div
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-black/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromRight}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Operating Hours</h3>
                <div className="space-y-1">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <ClockIcon className="w-12 h-12 text-white/80 flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
