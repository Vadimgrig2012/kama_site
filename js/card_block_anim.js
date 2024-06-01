import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = document.querySelectorAll(".about__block");


const scrolling = {
  enabled: true,
  events: "scroll,wheel,touchmove,pointermove".split(","),
  prevent: e => e.preventDefault(),
  disable() {
    if (scrolling.enabled) {
      scrolling.enabled = false;
      window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
      scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
    }
  },
  enable() {
    if (!scrolling.enabled) {
      scrolling.enabled = true;
      window.removeEventListener("scroll", gsap.ticker.tick);
      scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
    }
  }
};






function goToSection(section, i) {
  if (scrolling.enabled) { // сбросс, если скролл в процессе
    scrolling.disable();
    gsap.to(window, {
      scrollTo: {y: section ,autoKill: false},
      duration: 1,
    });

    gsap.from(section.querySelector('.about__card '),{
      scaleX: 0,
      duration: 1,
      delay: 1,
      transformOrigin: i === 0 ? 'right': 'left',
      onComplete: scrolling.enable,
    })
    // На случай, если будем передавать анимацию из sections.forEach
    // anim && anim.restart();
  }
}





sections.forEach((section, i) => {

  ScrollTrigger.create({
    trigger: section,
    start: "top bottom-=1",
    end: "bottom top+=1",
    markers: true,
    onEnter: () => goToSection(section, i),
    onEnterBack: () => goToSection(section, i),
  });

});