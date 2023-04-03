import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
// import { parallax } from "tsparticles-demo-configs";
import type { Container, Engine } from "tsparticles-engine";

const parallax = {"name":"Parallax","particles":{"number":{"value":100,"density":{"enable":true}},"color":{"value":["#00ff33","#ff3300","#0033ff"]},"shape":{"type":"circle"},"opacity":{"value":{"min":0.1,"max":0.5},"animation":{"enable":false}},"size":{"value":2,"animation":{"enable":false}},"links":{"enable":true,"distance":300,"color":"#777777","opacity":0.4,"width":1},"move":{"enable":true,"speed":2}},"interactivity":{"events":{"onHover":{"enable":false,"mode":"grab","parallax":{"enable":true,"smooth":10,"force":100}},"onClick":{"enable":true,"mode":"push"}},"modes":{"grab":{"distance":400,"links":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":0.8},"repulse":{"distance":200},"push":{"quantity":4},"remove":{"quantity":2}}},"background":{"color":"#000022"},"fullScreen":{"enable":true,"zIndex":-1}}
console.log(JSON.stringify(parallax))

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