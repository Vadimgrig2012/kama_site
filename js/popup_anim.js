import { gsap } from "gsap";

const open = document.querySelector('.interactive-block__btn');
const modal = document.querySelector('.modal');
const card = document.querySelector('.modal__card');
const close = document.querySelector('.modal__close');
const icons = gsap.utils.toArray('.modal__links a');
const mobile = window.matchMedia("(max-width: 1024px)");
const mm = gsap.matchMedia();
const tl = gsap.timeline({ paused: true });


tl.to(modal, {
    display: 'flex',
    duration: 0
}, 0)
.from(card, {
    scale: 0,
    opacity: 0,
    y: '-50rem',
    ease: "back.inOut(4)",
    duration: 0.5
})
.from(icons, {
    y: '10rem',
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.inOut(4)",
    duration: 0.2
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
    }, 1000)
});



icons.forEach(icon => {
    mm.add("(min-width: 1025px)", () => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                rotate: 45
            })
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                rotate: 0
            })
        });
    });
    icon.addEventListener('click', () => {
        gsap.to(icon, {
            y: '1rem',
            duration: 0.05,
            repeat: 1,
            yoyo: true
        })
    });
})

