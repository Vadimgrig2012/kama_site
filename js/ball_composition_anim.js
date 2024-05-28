import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);


const pathElement = document.getElementById("pathway2");

const ballPurple = document.getElementById("ball-purple");
const ballWhite2 = document.getElementById("ball-white2");


gsap.to(ballPurple, {
    motionPath: {
        path: pathElement,
        align: pathElement,
        autoRotate: false,
        offsetX: -40,
        offsetY: -30,
    },
    scrollTrigger: {
        trigger: '#ball-orange-main',
        start: '-20% center',
        end: '120% center',
        scrub: 5,
        markers: true,
    }
});
