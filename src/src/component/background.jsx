import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Background = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "transparent", // Transparent background
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: ["#FF4500", "#FFA500"], // Fire and smoke colors
                    },
                    shape: {
                        type: ["circle"],
                    },
                    opacity: {
                        value: 0.7,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 4, max: 7 },
                        random: true,
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "top",
                        random: false,
                        straight: false,
                        outModes: {
                            top: "out",
                            default: "destroy",
                        },
                        trail: {
                            enable: true,
                            length: 10,
                            fillColor: "transparent", // Ensures smoke trails blend naturally
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            size: 8,
                            duration: 1,
                            opacity: 0.8,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Background;
