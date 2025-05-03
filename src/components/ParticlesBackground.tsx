'use client';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { speed: 0.5 },
          links: { enable: true, distance: 120, opacity: 0.2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
