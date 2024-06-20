import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function ballCompositionAnimation() {

    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    const matchMedia = window.matchMedia("(max-width: 1024px)");
    const pathElement1 = document.getElementById("pathway1");
    const ballPurple = document.getElementById("ball-purple");
    const ballWhite = document.getElementById("ball-white");
    const ballWhite2 = document.getElementById("ball-white2");
    const ballCyanSmall = document.getElementById("ball-cyan-small");
    const ballRedBig = document.getElementById("ball-red-big");
    const ballRedSmall = document.getElementById("ball-red-small");

    gsap.to([ballPurple, ballWhite, ballWhite2, ballCyanSmall, ballRedBig, ballRedSmall], {
        opacity:1,
        scale: 1,
        duration: 0.5
    })


    gsap.to(ballPurple, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: -0.1,
            end: -0.9,
            autoRotate: false,
            offsetX: -40,
            offsetY: -30,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 5,
        }
    });


    gsap.to(ballWhite, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: -0.5,
            end: -0.3,
            autoRotate: false,
            offsetX: -20,
            offsetY: -10,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 5,
        }
    });

    gsap.to(ballWhite2, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: -0.3,
            end: -0.9,
            autoRotate: false,
            offsetX: -20,
            offsetY: -10,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 5,
        }
    });

    gsap.to(ballCyanSmall, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: 0.6,
            end: 0.9,
            autoRotate: false,
            offsetX: -40,
            offsetY: -30,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 5,
        }
    });

    gsap.to(ballRedBig, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: -0.1,
            end: -0.6,
            autoRotate: false,
            offsetX: -60,
            offsetY: -70,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 10,
        }
    });

    gsap.to(ballRedSmall, {
        motionPath: {
            path: pathElement1,
            align: pathElement1,
            start: 0.3,
            end: 0.8,
            autoRotate: false,
            offsetX: -60,
            offsetY: -70,
        },
        scrollTrigger: {
            trigger: '#ball-orange-main',
            start: !matchMedia.matches ? '-20% center' : '-20% 20%',
            end: !matchMedia.matches ? '120% center' : '120% top',
            scrub: 8,
        }
    });
};