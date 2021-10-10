// $(".decor_block-1").animate({
//   background: red,
// });

gsap.from(".decor_block-1", 1.4, {
  //   delay: 0.6,
  //   opacity: 0,
  x: -1200,
  ease: Power4.linear,
});
gsap.from(".decor_block-2", 1.2, {
    delay: 0.6,
  //   opacity: 0,
  x: -1200,
  ease: Power4.linear,
});
gsap.from(".decor_block-3", 1.0, {
    delay: 1.5,
  //   opacity: 0,
  x: -1800,
  ease: Power4.linear,
});
gsap.from(".person_3", 0.4, {
    delay: 2.2,
  //   opacity: 0,
  y: 380,
  ease: Power4.linear,
});

