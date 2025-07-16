export const BubbleBackground = () => {
  const bubbles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #E7FFCD, #9BAE87)",
        }}
      />
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white shadow-lg"
          style={{
            filter: `blur(${Math.random() * 40 + 10}px)`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: "-100px",
            opacity: bubble.opacity,
            animation: `float ${bubble.duration}s infinite linear`,
            animationDelay: `${bubble.delay}s`,
            boxShadow:
              "inset 0 0 20px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3)",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
