import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, 10);
    return () => clearTimeout(timer);
  }, [loadingProgress]);
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen"
      style={{
        background: "linear-gradient(to bottom, #E7FFCD, #9BAE87)",
      }}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="relative inline-block shine-logo">
          <img
            src="/bigc_logo.png"
            alt="BIG-C Logo"
            className="h-36 md:h-96 object-contain"
          />
        </div>
      </div>
      <div className="w-40 h-2 bg-white/30 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${loadingProgress}%`,
          }}
        ></div>
      </div>
      <p className="text-gray-700 text-sm">{loadingProgress === 100}</p>
    </div>
  );
};
export default LoadingScreen;
