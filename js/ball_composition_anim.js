import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);


const pathElement = document.getElementById("pathway");

const ballPurple = document.getElementById("ball-purple")

// gsap.set(ballPurple, {xPercent:-50, yPercent:-50, transformOrigin: "300% 100%"})

gsap.to(ballPurple, {
    duration: 5,
    motionPath: {
        path: pathElement,
        align: pathElement,
        autoRotate: true
    },
    scrollTrigger: {
        trigger: '.kuromi',
        start: 'top 20%',
        endTrigger: '#ball-orange-main',
        end: 'bottom 70%',
        scrub: 70,
        markers: true
    }
})
