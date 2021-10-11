// gsap.from(".decor_block-1", 1.0, {
//   x: -1600,
//   ease: Power4.linear,
// });

const gsapFunc = (selector, transition, delayVal, xVal) => {
  gsap.from(selector, transition || 1.0, {
    delay: delayVal || 0,
    x: xVal,
    ease: Power4.linear,
  });
};
gsapFunc(".decor_block-1__decor_2", 1.0, 1.4, -1600);
gsapFunc(".decor_block-1__decor_3", 1.0, 1.4, -1600);
gsapFunc(".decor_block-1__decor_5", 1.0, 0.8, -1600);

gsapFunc(".decor_block-2__decor_2", 1.0, 0.8, -1600);

gsapFunc(".decor_block-3__decor_2", 1.0, 1.6, -1900);
gsapFunc(".decor_block-3__decor_3", 1.0, 2.0, -1600);
gsapFunc(".decor_block-3__decor_5", 1.0, 1.4, -1600);
gsapFunc(".decor_block-3__decor_6", 1.0, 0.8, -1600);

gsap.from(".person_1", 0.3, {
  delay: 3.2,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_2", 0.3, {
  delay: 3.6,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_3", 0.2, {
  delay: 2.9,
  y: 380,
  ease: Power4.linear,
});
gsap.from(".decor_block-3__decor_1", 0.2, {
  delay: 2.9,
  y: 120,
  ease: Power4.linear,
});
gsap.from(".decor_block-3__decor_4", 0.3, {
  delay: 3.0,
  y: 320,
  ease: Power4.linear,
});
gsap.from(".decor_block-2__decor_1", 0.3, {
  delay: 3.6,
  y: 220,
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
  y: -90,
  ease: Power4.linear,
});
gsap.from(".text-block__text1", 0.7, {
  delay: 5.2,
  x: -455,
  // y: -90,
  ease: Power4.linear,
});
// gsap.fromTO(
//   ".text-block__tankui-spray",
//   0.7,
//   { scale: 0 },
//   {
//     delay: 5.2,
//     // x: -455,
//     scale: 0.5,
//     // y: -90,
//     ease: Power4.linear,
//   }
// );
gsap.from(".button-block", 0.7, {
  delay: 5.2,
  scale: 0,
  ease: Power4.linear,
});

gsap.from(".rating", 0.7, {
    delay: 1.9,
    x: -400,
    ease: Power4.linear,
  });