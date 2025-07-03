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
];
export const VehiclesSection = () => {
  return (
    <section id="vehicles" className="w-full py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Fleet</h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">
          We maintain a diverse fleet of modern, well-maintained vehicles to
          meet all your transportation needs. Each truck is regularly serviced
          and equipped with GPS tracking for real-time monitoring.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white/80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-sm font-medium text-gray-600 mb-3">
                  Capacity: {vehicle.capacity}
                </p>
                <p className="text-gray-700">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
