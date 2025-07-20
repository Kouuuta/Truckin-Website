import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const vehicles = [
  {
    id: 1,
    name: "Shakeys",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod ultricies massa fames massa.",
    capacity: "Up to 15 tons",
    location: "MANILA",
    model: "2025",
    target: "1",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.pESSP7oMKgNQCfaIV-9r0AHaHa?w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3",
    bgImage:
      "https://tse2.mm.bing.net/th/id/OIP.pESSP7oMKgNQCfaIV-9r0AHaHa?w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Jollibee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod ultricies massa fames massa.",
    capacity: "Up to 20 tons",
    location: "MANILA",
    model: "2024",
    target: "2",
    image:
      "https://www.kindpng.com/picc/m/212-2128393_high-resolution-logo-of-jollibee-hd-png-download.png",
    bgImage:
      "https://www.kindpng.com/picc/m/212-2128393_high-resolution-logo-of-jollibee-hd-png-download.png",
  },
  {
    id: 3,
    name: "McDonalds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod ultricies massa fames massa.",
    capacity: "Up to 10 tons",
    location: "MANILA",
    model: "2023",
    target: "3",
    image: "https://wallpapercave.com/wp/wp11260432.jpg",
    bgImage: "https://wallpapercave.com/wp/wp11260432.jpg",
  },
  {
    id: 4,
    name: "H&M",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod ultricies massa fames massa.",
    capacity: "Up to 25,000 gallons",
    location: "MANILA",
    model: "2022",
    target: "4",
    image: "https://wallpapercave.com/wp/wp4541977.jpg",
    bgImage: "https://wallpapercave.com/wp/wp4541977.jpg",
  },
];

export default function ClientsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const intervalRef = useRef(null);

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

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Auto advance every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setContentKey((prev) => prev + 1);
    setActiveIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setContentKey((prev) => prev + 1);
    setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setContentKey((prev) => prev + 1);
    setActiveIndex(index);
  };

  // Animation management
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Heart toggle functionality
  const toggleHeart = () => {
    setIsHeartActive(!isHeartActive);
  };

  const activeVehicle = vehicles[activeIndex];

  return (
    <div id="clients" className="min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wider">
            Our Clients
          </h2>
          <div className="w-36 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Carousel Container */}
        <div
          className="relative w-full max-w-6xl mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              {/* Left Side - Red Panel with Image Carousel */}
              <div className="absolute left-0 top-0 w-1/2 h-full bg-olive flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 translate-y-24 animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full transform -translate-y-1/2 animate-pulse delay-500"></div>
                </div>

                {/* Vehicle Images with Fade Effect */}
                <motion.div
                  className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInFromLeft}
                >
                  {vehicles.map((vehicle, index) => (
                    <div
                      key={`${vehicle.id}-${index}`}
                      className={`absolute inset-0 transition-all duration-800 ease-in-out transform ${
                        index === activeIndex
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-95 rotate-3"
                      }`}
                    >
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      {/* Image overlay effects */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 transition-all duration-1000 ${
                          index === activeIndex
                            ? "translate-x-full"
                            : "-translate-x-full"
                        }`}
                      ></div>
                    </div>
                  ))}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">
                      {activeVehicle.target.toUpperCase()}
                    </span>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-46 right-64 text-white/20 text-9xl font-black transform -rotate-90 animate-pulse">
                  CLIENTS
                </div>
              </div>

              {/* Right Side - Dark Panel with Content Fade */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  {vehicles.map((vehicle, index) => (
                    <div
                      key={`bg-${vehicle.id}-${index}`}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeIndex ? "opacity-10" : "opacity-0"
                      }`}
                      style={{
                        backgroundImage: `url(${vehicle.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  ))}
                </div>

                {/* Content with enhanced animations */}
                <div className="h-full flex flex-col justify-center p-12 text-white relative z-10">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-green-500/5 to-green-500/20"></div>

                  <div className="relative z-10">
                    {/* Animated Title */}
                    <div className="overflow-hidden mb-6">
                      <h2
                        key={`title-${contentKey}`}
                        className="text-4xl font-black tracking-wider leading-tight transform transition-all duration-800 animate-in"
                        style={{
                          animation: `slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                        }}
                      >
                        {activeVehicle.name.toUpperCase()}
                      </h2>
                    </div>

                    {/* Animated Stats Row */}
                    <div
                      key={`stats-${contentKey}`}
                      className="flex items-center gap-8 mb-8 transform transition-all duration-800 delay-200"
                      style={{
                        animation: `slideInFromRight 0.8s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
                      }}
                    >
                      <div>
                        <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">
                          LOCATION
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-bold transform hover:scale-110 transition-transform duration-300">
                            {activeVehicle.location}
                          </span>
                          <span className="text-gray-300">
                            {activeVehicle.model}
                          </span>
                        </div>
                      </div>

                      {/* Separator */}
                      <div className="w-px h-12 bg-gray-600"></div>
                    </div>

                    {/* Animated Description */}
                    <div className="overflow-hidden mb-8">
                      <p
                        key={`desc-${contentKey}`}
                        className="text-gray-300 leading-relaxed text-lg transform transition-all duration-800 delay-400"
                        style={{
                          animation: `slideInFromRight 0.8s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
                        }}
                      >
                        {activeVehicle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl overflow-hidden shadow-2xl">
              {/* Mobile Image Section */}
              <div className="relative h-64 sm:h-80 bg-olive flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 -translate-y-12"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 translate-y-16"></div>
                </div>

                {/* Vehicle Image */}
                <motion.div
                  className="relative z-10 w-64 h-48 sm:w-80 sm:h-60 rounded-xl overflow-hidden shadow-2xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeFromCenter}
                >
                  <img
                    key={activeIndex}
                    src={activeVehicle.image}
                    alt={activeVehicle.name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </motion.div>

                {/* Fleet Text */}
                <div className="absolute top-4 left-4 text-white/20 text-2xl sm:text-4xl font-black transform -rotate-12 animate-pulse">
                  CLIENTS
                </div>
              </div>

              {/* Mobile Content Section */}
              <motion.div
                className="p-6 sm:p-8 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeFromCenter}
              >
                <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-wider">
                  {activeVehicle.name.toUpperCase()}
                </h2>

                {/* Mobile Stats */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">
                      LOCATION
                    </p>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-bold inline-block w-fit">
                        {activeVehicle.location}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {activeVehicle.model}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {activeVehicle.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-2 lg:-left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 z-20 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-2 lg:-right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 z-20 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gray-500 w-8"
                    : "bg-gray-500 hover:bg-gray-400 w-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-darkolive p-8 rounded-3xl mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromCenter}
        >
          <div className="text-center mb-6">
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
              integer scelerisque. Feugiat et at dui nulla urna tristique sit.
              Netus in molestie mauris sagittis vel sem. Tempor urna eros in
              faucibus euismod ultricies massa fames massa.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-olive px-6 py-3 rounded-full text-white font-semibold transition-all hover:bg-opacity-80 shadow-lg hover:shadow-xl cursor-pointer">
              For More Inquiries
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
