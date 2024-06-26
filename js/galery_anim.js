import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const photos = document.querySelectorAll('.galery__img');
const photosArray = gsap.utils.toArray(photos);
const gallery = document.querySelector('.galery__photos');


function getToScrollAmount() {
    let galleryWidth = gallery.scrollWidth  + window.innerWidth;
    return -(galleryWidth - window.innerWidth)
}

let tween = gsap.to(gallery, {
    x: getToScrollAmount,
    duration: 5,
    ease: 'none',
    scrollTrigger: {
        trigger: '.galery__container',
        start: 'top 10%',
        end: () => `+=${getToScrollAmount() * -1}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
    }
});


gsap.to('.galery__bg', {
    x: '50%',
    duration: 5,
    scrollTrigger:{
        containerAnimation: tween,
        trigger: gallery,
        start: 'left 100%',
        scrub: 1,
        // markers: true
    }
});


mm.add("(min-width: 1025px)", () => {
    photosArray.forEach((photo) =>{
        gsap.from(photo, {
            y: '-10rem',
            x: '10rem',
            duration: 0.5,
            opacity: 0,
            ease: 'elastic.inOut(1.5,1)',
            scrollTrigger:{
                containerAnimation: tween,
                trigger: photo,
                start: 'center 80%',
                end: 'center 80%',
                toggleActions: 'play none reverse reverse',
                // markers: true
            }
        });
    });
});
