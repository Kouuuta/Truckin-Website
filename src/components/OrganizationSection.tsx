const executives = [
  {
    id: 1,
    name: "Zayn Malik",
    position: "Chief Executive Officer",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.KsqMOqsFvVfEc-Aab3jWWgHaFb?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Harry Styles",
    position: "Chief Operations Officer",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    name: "Wally Bayola ",
    position: "Operations Manager",
    image:
      "https://th.bing.com/th/id/OIP.EkDwPlNslRYKsaFlrWRzJAHaIa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Jose Manalo",
    position: "Customer Relations Director",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.gX9SZwXY8CGhlFL7gZu2mwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];
export const OrganizationSection = () => {
  return (
    <section id="organization" className="w-full py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our Leadership Team
        </h2>
        <div className="w-36 h-1 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-center mb-10 max-w-3xl mx-auto pt-16 font-semibold text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla integer
          scelerisque. Feugiat et at dui nulla urna tristique sit. Netus in
          molestie mauris sagittis vel sem. Tempor urna eros in faucibus euismod
          ultricies massa fames massa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive) => (
            <div key={executive.id} className="flex flex-col items-center">
              <div className="w-60 h-60 rounded-full overflow-hidden mb-4 border-4 border-[#E7FFCD]">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {executive.name}
              </h3>
              <p className="text-gray-700 text-center">{executive.position}</p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto pt-36 pb-14s">
          <p className="text-center mb-10 max-w-3xl mx-auto font-semibold text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur. Adipiscing risus nulla
            integer scelerisque. Feugiat et at dui nulla urna tristique sit.
            Netus in molestie mauris sagittis vel sem. Tempor urna eros in
            faucibus euismod ultricies massa fames massa.
          </p>
        </div>
      </div>
    </section>
  );
};
