import React from "react";
const executives = [
  {
    id: 1,
    name: "Robert Johnson",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Fleet Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "Amanda Rodriguez",
    position: "Customer Relations Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];
export const OrganizationSection = () => {
  return (
    <section
      id="organization"
      className="w-full py-16 px-6 md:px-16 bg-white/70"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our Leadership Team
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">
          Meet the experienced professionals who lead BIG-C Trucking with
          expertise, vision, and dedication to excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive) => (
            <div key={executive.id} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-[#E7FFCD]">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {executive.name}
              </h3>
              <p className="text-gray-600 text-center">{executive.position}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="bg-white/90 rounded-lg p-6 max-w-3xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Organizational Structure
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs bg-[#E7FFCD] rounded-lg p-4 mb-4 text-center">
                <p className="font-semibold">CEO</p>
              </div>
              <div className="w-8 h-8 border-l-2 border-gray-400"></div>
              <div className="w-full flex justify-center mb-4">
                <div className="w-8 h-8 border-t-2 border-gray-400 flex-grow"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-[#E7FFCD] rounded-lg p-4 text-center">
                  <p className="font-semibold">COO</p>
                </div>
                <div className="bg-[#E7FFCD] rounded-lg p-4 text-center">
                  <p className="font-semibold">Fleet Manager</p>
                </div>
                <div className="bg-[#E7FFCD] rounded-lg p-4 text-center">
                  <p className="font-semibold">Customer Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
