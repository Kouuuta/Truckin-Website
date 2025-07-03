export const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About BIG-C Trucking
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in 2005, BIG-C Trucking started with just two trucks and a
              vision to revolutionize the logistics industry. Today, we're proud
              to operate a fleet of over 50 specialized vehicles, serving
              clients across the country.
            </p>
            <p className="mb-4">
              Our commitment to excellence, reliability, and customer
              satisfaction has made us one of the most trusted names in the
              transportation industry.
            </p>
            <p>
              At BIG-C, we invest in the latest technology and maintain our
              vehicles to the highest standards to ensure efficient, safe, and
              environmentally responsible operations.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              To provide exceptional transportation and logistics solutions that
              exceed our clients' expectations through reliability, efficiency,
              and innovation.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-6">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Safety First:</span> We prioritize
                the safety of our team, cargo, and everyone on the road.
              </li>
              <li>
                <span className="font-medium">Reliability:</span> We deliver on
                our promises, every time.
              </li>
              <li>
                <span className="font-medium">Excellence:</span> We strive for
                excellence in every aspect of our operations.
              </li>
              <li>
                <span className="font-medium">Sustainability:</span> We're
                committed to reducing our environmental impact.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
