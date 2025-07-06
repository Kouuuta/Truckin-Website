import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-28 h-28 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <div className="absolute inset-2 flex items-center justify-center">
            <img
              src="/bigc_logo.png"
              alt="Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
        </button>
      )}
    </div>
  );
};
