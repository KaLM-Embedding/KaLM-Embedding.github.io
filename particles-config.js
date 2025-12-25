/* particles-config.js */

// Configuration for a subtle, Google-color dotted effect
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90, // Fewer dots for a cleaner look
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#1a73e8", "#ea4335", "#fbbc04", "#34a853"], // Google palette
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.35,
      random: false,
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: false, // Keep dots disconnected
    },
    move: {
      enable: true,
      speed: 0.35, // Slow, subtle movement
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Subtle repulse on hover
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
