import { gsap } from "gsap";

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {

    let tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1 
    });

    function restartAnimation() {
    tl.restart();
    }


    tl.to(".interactive-block__rect", {
    duration: 1,
    x: "20rem",
    y: "5rem",
    scale: 0.4,
    rotate: 360
    })
    .to(".interactive-block__rect", {
    duration: 1,
    x: "15rem",
    y: "-10rem",
    scale: 0.7,
    rotate: 720
    })
    .to(".interactive-block__rect", {
    duration: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 1080,
    onComplete: restartAnimation
    });


    tl.to(".interactive-block__triangle", {
    duration: 1,
    x: "-20rem",
    y: "20rem",
    rotate: 360
    }, 0)
    .to(".interactive-block__triangle", {
    duration: 1,
    x: "-25rem",
    y: "8rem",
    rotate: 720,
    scale: 1.5,
    }, 1)
    .to(".interactive-block__triangle", {
    duration: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 1080
    }, 2);


    tl.to(".interactive-block__star", {
    duration: 1,
    x: "-18rem",
    y: "-15rem",
    scale: 2,
    rotate: 360
    }, 0)
    .to(".interactive-block__star", {
    duration: 1,
    x: "-15rem",
    y: "8rem",
    scale: 1,
    rotate: 720
    }, 1)
    .to(".interactive-block__star", {
    duration: 1,
    x: 0,
    y: 0,
    scale: 1.2,
    rotate: 1080
    }, 2);
});
