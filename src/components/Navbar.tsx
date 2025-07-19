import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);
  const [menu, setMenu] = useState(false);
  const [, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (Math.abs(currentScroll - lastScroll) > 10) {
        if (currentScroll > lastScroll && currentScroll > 1000) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        setLastScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Enhanced scrollToSection with better mobile support
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to: ${sectionId}`); // Debug log

    const element = document.getElementById(sectionId);
    console.log(`Element found:`, element); // Debug log

    if (element) {
      // Close mobile menu first
      setMenu(false);

      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        const headerOffset = 100; // Adjust this based on your navbar height
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    } else {
      console.warn(`Element with ID '${sectionId}' not found`);
    }
  };

  const navItems = [
    { title: "Home", id: "home" },
    { title: "Clients", id: "clients" },
    { title: "Organization", id: "organization" },
    { title: "About Us", id: "about" },
  ];

  return (
    <motion.header
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-500 ease-out
        ${
          scrollDirection === "down" && lastScroll > 200
            ? "-translate-y-full"
            : "translate-y-0"
        }
        font-['Lexend',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]`}
      initial={false}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <motion.div
        className={`mx-auto transition-all duration-700 ease-out ${
          scrolled ? "max-w-6xl mt-4 px-4" : "max-w-full px-0"
        }`}
        layout
      >
        <motion.div
          className={`relative flex items-center justify-between h-16 transition-all duration-700 ease-out ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl rounded-full px-6 shadow-2xl border border-gray-200/50"
              : "bg-transparent px-6"
          } text-black`}
          layout
        >
          {/* Logo */}
          <motion.div className="flex-shrink-0 z-10" layout>
            <button
              onClick={() => scrollToSection("home")}
              className="transition-colors duration-300 focus:outline-none"
            >
              <span className="sr-only">BIG-C Trucking Logo</span>
              <img
                src="/bigc_logo.png"
                alt="BIG-C Trucking Logo"
                className="h-12 w-auto"
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav className="hidden lg:flex items-center space-x-8" layout>
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <motion.button
                  onClick={() => item.id && scrollToSection(item.id)}
                  className="relative font-bold text-black transition-all duration-300 hover:text-[#61A11D] border-b-2 border-transparent hover:border-[#61A11D] pb-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.title}
                </motion.button>
              </div>
            ))}
          </motion.nav>

          {/* Right side controls */}
          <motion.div className="flex items-center space-x-3 z-10" layout>
            {/* Contact CTA Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex items-center px-4 py-2 bg-olive text-white rounded-full font-extrabold hover:bg-olive hover:opacity-80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => {
                console.log("Mobile menu clicked, current state:", menu);
                setMenu(!menu);
              }}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors touch-manipulation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: menu ? 45 : 0,
                    translateY: menu ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{ opacity: menu ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: menu ? -45 : 0,
                    translateY: menu ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="lg:hidden fixed top-20 left-0 w-full px-4 z-[60]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`rounded-2xl p-6 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-xl border border-gray-200/50"
                  : "bg-white border border-gray-200"
              } shadow-2xl`}
            >
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(
                          `Mobile nav item clicked: ${item.title} -> ${item.id}`
                        );
                        if (item.id) {
                          scrollToSection(item.id);
                        }
                      }}
                      className="block w-full text-left text-xl font-bold py-3 px-2 text-black hover:text-[#61A11D] transition-colors border-b-2 border-transparent hover:border-[#61A11D] focus:outline-none focus:text-[#61A11D] touch-manipulation"
                      style={{ touchAction: "manipulation" }}
                    >
                      {item.title}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Mobile Contact Us clicked");
                      scrollToSection("contact");
                    }}
                    className="inline-flex items-center px-6 py-3 bg-olive text-white rounded-full font-bold hover:bg-olive transition-colors touch-manipulation"
                    style={{ touchAction: "manipulation" }}
                  >
                    Contact Us
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
