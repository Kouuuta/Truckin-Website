import { motion } from "framer-motion";

export const AboutSection = () => {
  // Animation variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 500 },
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
    <section id="about" className="w-full py-24 px-6 md:px-16 bg-gradient-to-b">
      <div className="max-w-8xl mx-auto">
        {/* Header - Fade in from center */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About BIG-C Trucking
          </h2>
          <div className="w-36 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="bg-darkolive p-8 rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInFromCenter}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInFromLeft}
            >
              <div className="pr-8">
                <motion.p
                  className="text-gray-700 leading-relaxed mb-4 text-lg font-semibold"
                  variants={fadeInFromLeft}
                >
                  Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
                  integer scelerisque. Feugiat et at dui nulla urna tristique
                  sit. Netus in molestie mauris sagittis vel sem. Tempor urna
                  eros in faucibus euismod ultricies massa fames massa.
                  Adipiscing ullamcorper orci morbi ultricies. Cras blandit
                  cursus netus id purus tempus tristique sed. Eu orci ut at nisl
                  pellentesque aliquam mattis leo.
                </motion.p>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-4 text-lg font-semibold"
                  variants={fadeInFromLeft}
                >
                  Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
                  integer scelerisque. Feugiat et at dui nulla urna tristique
                  sit. Netus in molestie mauris sagittis vel sem. Tempor urna
                  eros in faucibus euismod ultricies massa fames massa.
                  Adipiscing ullamcorper orci morbi ultricies. Cras blandit
                  cursus netus id purus tempus tristique sed. Eu orci ut at nisl
                  pellentesque aliquam mattis leo.
                </motion.p>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg mb-4 font-semibold"
                  variants={fadeInFromLeft}
                >
                  Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
                  integer scelerisque. Feugiat et at dui nulla urna tristique
                  sit. Netus in molestie mauris sagittis vel sem. Tempor urna
                  eros in faucibus euismod ultricies massa fames massa.
                  Adipiscing ullamcorper orci morbi ultricies. Cras blandit
                  cursus netus id purus tempus tristique sed. Eu orci ut at nisl
                  pellentesque aliquam mattis leo.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInFromRight}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-black bg-opacity-25 p-6 rounded-2xl text-white"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    Modern Fleet
                  </h4>
                  <p className="text-white opacity-90 text-lg text-center font-light">
                    Over 50 specialized vehicles equipped with the latest
                    technology.
                  </p>
                </motion.div>

                {/* Card 2 - Years of Service */}
                <motion.div
                  className="bg-black bg-opacity-25 p-6 rounded-2xl text-white"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    Years of Service
                  </h4>
                  <p className="text-white opacity-90 text-lg text-center font-light">
                    Nearly two decades of reliable service and industry
                    expertise.
                  </p>
                </motion.div>

                {/* Card 3 - Where to Find Us */}
                <motion.div
                  className="bg-black bg-opacity-25 p-6 rounded-2xl text-white"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    Where to Find Us
                  </h4>
                  <p className="text-white opacity-90 text-lg text-center font-light">
                    Serving clients nationwide with our comprehensive logistics
                    network.
                  </p>
                </motion.div>

                {/* Card 4 - Expert Team */}
                <motion.div
                  className="bg-black bg-opacity-25 p-6 rounded-2xl text-white"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    Expert Team
                  </h4>
                  <p className="text-white opacity-90 text-lg text-center font-light">
                    Professional drivers and logistics experts committed to
                    excellence.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
