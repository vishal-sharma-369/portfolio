gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(max-width: 600px)", () => {
  gsap.from(".about-col-1", {
    x: -300,
    opacity: 0,
    scale: 1.4,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".about-col-1",
      start: "top center",
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
  // gsap.from(".services-list div", {
  //   opacity: 0,
  //   scale: 0.7,
  //   duration: 0.2,
  //   scrollTrigger: {
  //     trigger: ".services-list",
  //     start: "top 70%",
  //   },
  // });
  gsap.from("#service1", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#service1",
      start: "top 70%",
    },
  });
  gsap.from("#service2", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#service2",
      start: "top 70%",
    },
  });
  gsap.from("#service3", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#service3",
      start: "top 70%",
    },
  });
});

mm.add("(min-width: 600px)", () => {
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
});
