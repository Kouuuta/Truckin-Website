import { ArrowRightIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const truckRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      truckRef.current,
      { x: -800, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.inOut" }
    );

    tl.fromTo(
      [
        badgeRef.current,
        titleRef.current,
        paragraphRef.current,
        buttonRef.current,
      ],
      { x: 800, opacity: 0, y: 20 },
      {
        x: 0,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=0.8"
    );

    gsap.to(truckRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      truckRef.current,
      { xPercent: 0, opacity: 1 },
      {
        xPercent: 100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    const button = buttonRef.current;
    if (button) {
      const enter = () =>
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      const leave = () =>
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);

      return () => {
        button.removeEventListener("mouseenter", enter);
        button.removeEventListener("mouseleave", leave);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="w-full py-36 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[80vh] relative overflow-hidden bg-[url('/background-gradient.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-lime-100/20 to-transparent pointer-events-none"></div>

      <div ref={truckRef} className="w-full md:w-1/2 mb-10 md:mb-0 relative">
        <img
          src="/bigc_trucksample.png"
          alt="BIG-C Refrigerated Truck"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-olive/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lime-400/20 rounded-full blur-lg"></div>
      </div>

      <div ref={contentRef} className="w-full md:w-1/2 md:pl-10 relative">
        <div
          ref={badgeRef}
          className="inline-block px-4 py-1 bg-olive/60 rounded-full mb-4 shadow-lg"
        >
          <p className="text-sm font-extrabold uppercase tracking-wider text-white">
            A TRUCKING COMPANY
          </p>
        </div>

        <h1
          ref={titleRef}
          className="py-4 text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
        >
          Welcome to BIG-C, Happy Trucking!
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg mb-8 font-semibold text-gray-700 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Turpis at sem nullam morbi eu
          praesent elementum purus. Amet sapien tempus integer aliquet cras
          consectetur. Tristique vivamus facilisi neque in elementum sit urna.
          Suspendisse egestas nibh sed malesuada imperdiet orci scelerisque id.
        </p>

        <div className="text-right">
          <a
            ref={buttonRef}
            href="#contact"
            className="inline-flex items-center bg-olive px-6 py-3 rounded-full text-white font-semibold transition-all hover:bg-opacity-80 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Contact Us <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="absolute -top-10 -right-10 text-9xl font-black text-gray-100 opacity-10 select-none pointer-events-none">
          BIG-C
        </div>
      </div>
    </section>
  );
};
