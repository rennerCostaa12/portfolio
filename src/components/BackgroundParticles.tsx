import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function BackgroundParticles() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 400,
                fullScreen: {
                    enable: true,
                    zIndex: 0
                },
                particles: {
                    number: {
                        value: 200
                    },
                    color: {
                        value: "#c0f7a8",
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: { min: 0.2, max: 2 },
                    },  
                    opacity: {
                        value: { min: 0.3, max: 0.5 }
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                }
            }}
        />

    )
}