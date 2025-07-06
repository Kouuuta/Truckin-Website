import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const vehicles = [
  {
    id: 1,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 15 tons",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 20 tons",
    image:
      "https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 10 tons",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    name: "Truck",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in molestie mauris sagittis vel sem.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export const VehiclesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

      const cardWidth = 200;
      const gap = 32;
      const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(currentIndex, vehicles.length - 1));
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -50,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 50,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 200;
      const gap = 32;
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInCenter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen ">
      <section id="vehicles" className="w-full py-4 px-6 md:px-16">
        <div className="max-w-8xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInCenter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 ">
              Our Vehicles
            </h2>
            <div className="w-36 h-1 bg-green-500 mx-auto rounded-full "></div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg pt-12 font-semibold">
              Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
              integer scelerisque. Feugiat et at dui nulla urna tristique sit.
              Netus in molestie mauris sagittis vel sem. Tempor urna eros in
              faucibus euismod ultricies massa fames massa.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative mb-8">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white/80 border-white/20 text-gray-700 hover:bg-white hover:scale-110 shadow-2xl hover:shadow-blue-200/50"
                  : "bg-gray-100/50 border-gray-200/50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-white/80 border-white/20 text-gray-700 hover:bg-white hover:scale-110 shadow-2xl hover:shadow-blue-200/50"
                  : "bg-gray-100/50 border-gray-200/50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>

            <div
              ref={carouselRef}
              onScroll={checkScrollButtons}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 px-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="vehicle-card flex-shrink-0 w-80 h-96 bg-white rounded-3xl shadow-lg overflow-hidden snap-center hover:shadow-2xl transition-all duration-500 group relative animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.9}s`,
                  }}
                >
                  <div className="relative h-full">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                        {vehicle.name}
                      </h3>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                          {vehicle.name}
                        </h3>
                        <p className="text-sm font-semibold text-blue-200 mb-2">
                          Capacity: {vehicle.capacity}
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {vehicle.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-12 h-12 bg-olive rounded-full flex items-center justify-center text-white font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      {vehicle.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-green-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="bg-darkolive p-8 rounded-3xl mt-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
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
      </section>
    </div>
  );
};
