import { gsap } from "gsap";

const open = document.querySelector('.menu__button');
const nav = document.querySelector('.nav');
const links = gsap.utils.toArray('.nav__list li');
const close = document.querySelector('.nav__close');
const mobile = window.matchMedia("(max-width: 1024px)");
const mm = gsap.matchMedia();
const tl = gsap.timeline({ paused: true });


tl.to(nav, {
    transformOrigin: 'top',
    display: 'flex',
    scaleY: 0,
    duration: 0
}, 0)
.to(nav, {
    scaleY: 1,
    duration: 0.3,
    ease: "sine.inOut",
}, 0.2)
.from(close, {
    x: '-5rem',
    opacity: 0,
    rotate: 360,
    duration: 0.4
}, 0.6)
.from(links, {
    y: '10rem',
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.inOut(4)",
    duration: 0.5
}, 0.5)



function openModal() {
    tl.play();
};
function closedModal() {
    tl.reverse();
};


open.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    if(!mobile.matches) {
        document.body.style.paddingRight = '15px';
    };
    openModal();
});


close.addEventListener('click', () => {
    closedModal();
    setTimeout(() => {
        document.body.style.removeProperty('overflow');
        if(!mobile.matches) {
            document.body.style.removeProperty('padding-right');
        }
    }, 1200)
});


links.forEach(link => {
    mm.add("(min-width: 1025px)", () => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                x: '3rem',
                duration: 0.2,
                boxShadow: '-3rem 0 0 0 #FFEF66'
            })
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                x: 0,
                duration: 0.2,
                boxShadow: '0rem 0 0 0 #FFEF66'
            })
        });
    });
    link.addEventListener('click', () => {
        gsap.to(link, {
            y: '1rem',
            duration: 0.05,
            repeat: 1,
            yoyo: true
        })
    });
})