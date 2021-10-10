// $(".decor_block-1").animate({
//   background: red,
// });

gsap.from(".decor_block-1", 1.1, {
  x: -1200,
  ease: Power4.linear,
});
gsap.from(".decor_block-2", 1.0, {
  delay: 0.6,
  //   opacity: 0,
  x: -1200,
  ease: Power4.linear,
});
gsap.from(".decor_block-3", 1.0, {
  delay: 1.5,
  x: -1700,
  ease: Power4.linear,
});
gsap.from(".person_1", 0.4, {
  delay: 2.7,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_2", 0.4, {
  delay: 3.0,
  y: 600,
  ease: Power4.linear,
});
gsap.from(".person_3", 0.4, {
  delay: 2.2,
  y: 380,
  ease: Power4.linear,
});
// gsap.from(".text-block__tankui", 0.4, {
//     delay: 2.2,
//     width: 1200,
//     x: 80,
//     ease: Power4.linear,
//   });