import { ArrowRightIcon } from "lucide-react";
export const Hero = () => {
  return (
    <section
      id="home"
      className="w-full py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[80vh]"
    >
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src="/bigc_trucksample.png"
          alt="BIG-C Refrigerated Truck"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-10">
        <div className="inline-block px-4 py-1 bg-olive/60 rounded-full mb-4">
          <p className="text-sm font-extrabold uppercase tracking-wider">
            A TRUCKING COMPANY
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to BIG-C, Happy Trucking!
        </h1>
        <p className="text-lg mb-8 font-semibold">
          Lorem ipsum dolor sit amet consectetur. Turpis at sem nullam morbi eu
          praesent elementum purus. Amet sapien tempus integer aliquet cras
          consectetur. Tristique vivamus facilisi neque in elementum sit urna.
          Suspendisse egestas nibh sed malesuada imperdiet orci scelerisque id.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-olive px-6 py-3 rounded-full text-black font-extrabold transition-all hover:bg-opacity-80"
        >
          Contact Us <ArrowRightIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};
