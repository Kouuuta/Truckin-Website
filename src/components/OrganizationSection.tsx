import { motion } from "framer-motion";

const executives = [
  {
    id: 1,
    name: "Mr. Crispulo B. Garcia",
    position: "General Manager",
    image: "/bigc_logo.png",
  },
  {
    id: 2,
    name: "Mrs. Priscilla C. Garcia",
    position: "Operations Manager",
    image: "/bigc_logo.png",
  },
  {
    id: 3,
    name: "Ms. Kriszandra Garcia",
    position: "Operations Manager",
    image: "/bigc_logo.png",
  },
  {
    id: 4,
    name: "Ms. Jhean Irinco",
    position: "Operations Assistant",
    image: "/bigc_logo.png",
  },
  {
    id: 5,
    name: "Mr. Jerome Geranta",
    position: "Hauling Coordinator",
    image: "/bigc_logo.png",
  },
  {
    id: 6,
    name: "Mr. Agusto Asuncion",
    position: "Route Coordinator / Operation Assistant",
    image: "/bigc_logo.png",
  },
];

export const OrganizationSection = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
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

  const fadeFromCenter = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="organization" className="w-full py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        >
          Our Leadership Team
        </motion.h2>
        <motion.div
          className="w-36 h-1 bg-green-500 mx-auto rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        ></motion.div>

        <motion.p
          className="text-center mb-10 max-w-3xl mx-auto pt-16 font-semibold text-gray-700 text-base sm:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromLeft}
        >
          Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer
          scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in
          molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod
          ultricies massa fames massa.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeFromCenter}
        >
          <div className="flex justify-center mb-8">
            {executives
              .filter((e) => e.position === "General Manager")
              .map((exec) => (
                <ExecutiveCard key={exec.id} executive={exec} />
              ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-20 lg:gap-x-40 gap-y-8 mb-8 items-center">
            {executives
              .filter((e) => e.position === "Operations Manager")
              .map((exec) => (
                <ExecutiveCard key={exec.id} executive={exec} />
              ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-0 gap-y-8 justify-items-center mb-16">
            {executives
              .filter(
                (e) =>
                  e.position === "Operations Assistant" ||
                  e.position === "Hauling Coordinator" ||
                  e.position === "Route Coordinator / Operation Assistant"
              )
              .map((exec) => (
                <ExecutiveCard key={exec.id} executive={exec} />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExecutiveCard = ({ executive }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-4 border-[#E7FFCD]">
      <img
        src={executive.image}
        alt={executive.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold">{executive.name}</h3>
    <p className="text-gray-700 text-sm">{executive.position}</p>
  </div>
);
