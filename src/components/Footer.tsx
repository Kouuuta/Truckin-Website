import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
export const Footer = () => {
  return (
    <footer className="w-full bg-[#333333] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <img src="/bigc_logo.png" alt="BIG-C Logo" className="h-12 mb-4" />
            <p className="max-w-xs">
              Delivering excellence in transportation and logistics solutions
              since 2005.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#E7FFCD] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#vehicles"
                    className="hover:text-[#E7FFCD] transition-colors"
                  >
                    Vehicles
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#E7FFCD] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#E7FFCD] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#E7FFCD] transition-colors">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#E7FFCD] transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#E7FFCD] transition-colors">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#E7FFCD] transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; 2025 BIG-C Trucking Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
