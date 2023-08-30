gsap.registerPlugin(ScrollTrigger);

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
