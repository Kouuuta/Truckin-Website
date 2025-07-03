export const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-16 flex justify-between items-center">
      <nav className="flex space-x-8">
        <a
          href="#home"
          className="text-black font-bold border-b-2 border-[#61A11D]"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-black font-bold hover:border-b-2 hover:border-[#61A11D] transition-all"
        >
          Services
        </a>
        <a
          href="#vehicles"
          className="text-black font-bold hover:border-b-2 hover:border-[#61A11D] transition-all"
        >
          Vehicles
        </a>
        <a
          href="#organization"
          className="text-black font-bold hover:border-b-2 hover:border-[#61A11D] transition-all"
        >
          Organization
        </a>
        <a
          href="#about"
          className="text-black font-bold hover:border-b-2 hover:border-[#81FF00] transition-all"
        >
          About Us
        </a>
      </nav>
      <div className="logo">
        <img src="/bigc_logo.png" alt="BIG-C Logo" className="h-20" />
      </div>
    </header>
  );
};
