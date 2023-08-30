let width = window.innerWidth;

gsap.registerPlugin(ScrollTrigger);

if (width < 600) {
  gsap.from(".about-col-1", {
    x: -300,
    opacity: 0,
    scale: 1.4,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".about-col-1",
      start: 35,
    },
  });
  gsap.from(".about-col-2", {
    x: 200,
    y: 100,
    opacity: 0,
    duration: 0.8,
    scale: 1.4,
    scrollTrigger: {
      trigger: ".about-col-2",
      start: 300,
    },
  });
  gsap.from(".services-list div", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    scrollTrigger: {
      trigger: ".services-list",
      start: 1200,
    },
  });
} else {
  gsap.from(".about-col-1", {
    x: -300,
    opacity: 0,
    scale: 1.4,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".about-col-1",
      start: "top 50%",
    },
  });
  gsap.from(".about-col-2", {
    x: 200,
    y: 100,
    opacity: 0,
    duration: 0.8,
    scale: 1.4,
    scrollTrigger: {
      trigger: ".about-col-2",
      start: "top 70%",
    },
  });
  gsap.from(".services-list div", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    scrollTrigger: {
      trigger: ".services-list",
      start: "top 70%",
    },
  });
}
