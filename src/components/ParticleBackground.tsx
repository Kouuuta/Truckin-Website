import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const [config, setConfig] = useState<any>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    fetch("/particlejs-config.json")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  if (!config) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={config}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;
