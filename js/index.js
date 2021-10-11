gsap.from(".decor_block-1", 1.0, {
  x: -1600,
  ease: Power4.linear,
});
gsap.from(".decor_block-2", 1.0, {
  delay: 0.6,
  //   opacity: 0,
  x: -1200,
  ease: Power4.linear,
});
gsap.from(".decor_block-3", 0.8, {
  delay: 1.8,
  x: -1700,
  ease: Power4.linear,
});
gsap.from(".rating", 0.7, {
    delay: 1.9,
    x: -400,
    ease: Power4.linear,
  });
  
gsap.from(".person_1", 0.2, {
  delay: 3.2,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_2", 0.2, {
  delay: 3.6,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_3", 0.2, {
  delay: 2.6,
  y: 380,
  ease: Power4.linear,
});

gsap.fromTo(
  ".text-block__tankui",
  0.2,
  { x: 250, y: 120, scale: 0 },
  {
    delay: 3.8,
    x: 360,
    y: 125,
    scale: 1.6,
    ease: Power4.linear,
  }
);
gsap.to(".text-block__tankui", 0.2, {
  delay: 4.4,
  x: 290,
  y: 125,
  scale: 1.3,
  ease: Power4.linear,
});
gsap.to(".text-block__tankui", 0.1, {
  delay: 3.8,
  x: 360,
  y: 125,
  scale: 1.6,
  ease: Power4.linear,
});
gsap.to(".text-block__tankui", 0.2, {
  delay: 4.8,
  x: -105,
  y: 128,
  scale: 0.7,
  ease: Power4.linear,
});
gsap.from(".text-block__logo", 0.7, {
  delay: 4.8,
  //   x: -25,
  y: -90,
  ease: Power4.linear,
});
gsap.from(".text-block__text1", 0.7, {
  delay: 5.2,
  x: -455,
  // y: -90,
  ease: Power4.linear,
});

gsap.from(".button-block", 0.7, {
  delay: 5.2,
  scale: 0,
  ease: Power4.linear,
});
