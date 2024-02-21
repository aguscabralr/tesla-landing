import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const wConfig = {
  ratio: window.innerWidth / window.innerHeight,
};

window.addEventListener('resize', () => {
  wConfig.ratio = window.innerWidth / window.innerHeight;
});

export const scrollTo = (href) => {
  const section = document.getElementById(href);
  gsap.to(window, {
    scrollTo: section,
  });
  // section.scrollIntoView({ behavior: 'smooth' });
};

export const crx = () => {
  if (wConfig.ratio < 1) {
    gsap.to('#line1', {
      rotate: 45,
    });
    gsap.to('#line2', {
      opacity: 0,
    });
    gsap.to('#line3', {
      rotate: -45,
    });
  }
};
export const opt = () => {
  if (wConfig.ratio < 1) {
    gsap.to('#line1', {
      x: 0,
      y: 0,
      rotate: 0,
    });
    gsap.to('#line2', {
      opacity: 1,
    });
    gsap.to('#line3', {
      x: 0,
      y: 0,
      rotate: 0,
    });
  }
};

export const previous = () => {
  const tl = gsap.timeline();
  tl.from('#prev', {
    xPercent: 100,
  });
};
export const selected = () => {
  const tl = gsap.timeline();
  tl.from('#select', {
    xPercent: 100,
  });
  if (wConfig.ratio > 1) {
    tl.from('#seltx', {
      opacity: 0,
      xPercent: -100,
    });
  } else {
    tl.from('#seltx', {
      opacity: 0,
      yPercent: -100,
    });
  }
};

export const comp = (comp) => {
  const comp1 = gsap.utils.toArray('.comp1');
  const comp2 = gsap.utils.toArray('.comp2');
  const comp3 = gsap.utils.toArray('.comp3');

  if (comp === 'comp1') {
    const tl = gsap.timeline();
    comp1.map((cm) => {
      tl.from(cm, 0.25, { opacity: 0, y: 50 });
    });
  }
  if (comp === 'comp2') {
    const tl = gsap.timeline();
    comp2.map((cm) => {
      tl.from(cm, 0.25, { opacity: 0, y: 50 });
    });
  }
  if (comp === 'comp3') {
    const tl = gsap.timeline();
    comp3.map((cm) => {
      tl.from(cm, 0.25, { opacity: 0, y: 50 });
    });
  }
};

export const wC = () => {
  const tl = gsap.timeline();
  tl.from('#tsct', { xPercent: -100 });
  tl.from('#lgwb', { xPercent: -300 }, '-=0.45');
  tl.from('#lg', { yPercent: -200 });
};

export const sT = () => {
  const vhtl = gsap.timeline({
    scrollTrigger: {
      trigger: '#second',
      scrub: 2,
      start: 'top 70%',
      end: 'bottom 80%',
    },
  });
  const cmtl = gsap.timeline({
    scrollTrigger: {
      trigger: '#third',
      scrub: 2,
      start: 'top 70%',
      end: 'center 90%',
    },
  });

  vhtl.from('#vhtx', { yPercent: 100, opacity: 0 });
  const carShow = gsap.utils.toArray('.show');
  carShow.map((car) => {
    vhtl.from(car, { opacity: 0, yPercent: 100 });
  });

  cmtl.from('#cmtx', { yPercent: 100, opacity: 0 });
  cmtl.from('#cmst', { yPercent: 100, opacity: 0 });
  cmtl.from('#cms1', { xPercent: -100, opacity: 0 });
  cmtl.from('#cms2', { xPercent: 100, opacity: 0 });
  cmtl.from('#cms3', { xPercent: 100, opacity: 0 });
};