import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Refrigerated Truck",
    description:
      "Temperature-controlled vehicles for transporting perishable goods with precise climate control systems.",
    capacity: "Up to 15 tons",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Flatbed Truck",
    description:
      "Open trailers ideal for oversized or irregularly shaped cargo that requires loading from the top or sides.",
    capacity: "Up to 20 tons",
    image:
      "https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Box Truck",
    description:
      "Enclosed cargo space with rear roll-up doors, perfect for furniture, appliances, and general freight.",
    capacity: "Up to 10 tons",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Tanker Truck",
    description:
      "Specialized vehicles designed for transporting liquids, chemicals, and gases safely and efficiently.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Tanker Truck",
    description:
      "Specialized vehicles designed for transporting liquids, chemicals, and gases safely and efficiently.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "Tanker Truck",
    description:
      "Specialized vehicles designed for transporting liquids, chemicals, and gases safely and efficiently.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    name: "Tanker Truck",
    description:
      "Specialized vehicles designed for transporting liquids, chemicals, and gases safely and efficiently.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    name: "Tanker Truck",
    description:
      "Specialized vehicles designed for transporting liquids, chemicals, and gases safely and efficiently.",
    capacity: "Up to 25,000 gallons",
    image:
      "https://images.unsplash.com/photo-1577076403655-9a492e12ce70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export const VehiclesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <div className="min-h-screen ">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
      <section id="vehicles" className="w-full py-4 px-6 md:px-16">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 ">
              Our Vehicles
            </h2>
            <div className="w-36 h-1 bg-green-500 mx-auto rounded-full "></div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg pt-12 font-semibold">
              We maintain a diverse fleet of modern, well-maintained vehicles to
              meet all your transportation needs. Each truck is regularly
              serviced and equipped with GPS tracking for real-time monitoring.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mb-20">
            {/* Left Button */}
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

            {/* Right Button */}
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

            {/* Carousel */}
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
                  className="flex-shrink-0 w-80 h-96 bg-white rounded-3xl shadow-lg overflow-hidden snap-center hover:shadow-2xl transition-all duration-500 group relative animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative h-full">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Always visible title - hides on hover */}
                    <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                        {vehicle.name}
                      </h3>
                    </div>

                    {/* Hover description overlay - shows on hover */}
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

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-olive rounded-full flex items-center justify-center text-white font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      {vehicle.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-olive bg-opacity-25 p-8 rounded-3xl ">
            <div className="text-center mb-8">
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur. Blandit blandit
                tristique fusce lectus leo ac. Purus est donec sit adipiscing
                ac. Id fermentum pharetra at id molestie porttitor sit.
              </p>
            </div>

            <div className="text-center">
              <button className="bg-olive px-6 py-3 rounded-full text-white font-semibold transition-all hover:bg-opacity-80 shadow-lg hover:shadow-xl cursor-pointer">
                For More Inquiries
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
