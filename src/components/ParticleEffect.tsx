import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { parallax } from "tsparticles-demo-configs";
import type { Container, Engine } from "tsparticles-engine";

parallax.background = { 
    color: '#000022'
};
parallax.fullScreen = {
    enable: true,
    zIndex: -1,
}
parallax.particles.number.value = 100;
parallax.particles.color.value = [
    '#00ff33',
    '#ff3300',
    '#0033ff',
];
parallax.particles.size.value = 2;
parallax.particles.size.animation = {
    enable: false,
}
parallax.particles.opacity.animation = {
    enable: false,
}
parallax.interactivity.events.onHover.enable = false;
parallax.interactivity.events.onHover.parallax.force = 100;
parallax.particles.links.distance = 300;
parallax.particles.links.color = '#777777';
console.log(parallax)

export const ParticleEffect = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={parallax} />
    );
};