/* Lenis Scroll */

const lenis = new Lenis({
	smooth: true,
	multiplier: 1,
	easing: (t) => t * (2 - t),
	smoothTouch: true,
	lerp: 0.05,
	duration: 0.5
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.normalizeScroll(true);



// preloader
// let percent = 0;
// const text = document.getElementById("percentText");
// const preloader = document.getElementById("preloader");
// const site = document.getElementById("site-content");

// // Fake loading counter
// const counter = setInterval(() => {
//   if (percent < 100) {
//     percent++;
//     text.textContent = percent + "%";
//   }
// }, 20);

// // WAIT FOR EVERYTHING (images, css, js)
// window.addEventListener("load", () => {
//   clearInterval(counter);
//   text.textContent = "100%";

//   setTimeout(() => {
//     preloader.classList.add("hide");
//     site.style.visibility = "visible";
//   }, 500);
// });


let percent = 0;
const text = document.getElementById("percentText");
const preloader = document.getElementById("preloader");
const site = document.getElementById("site-content");

// Animate percentage (0 → 100 in 5 seconds)
const duration = 5000; // 5 seconds
const interval = 50;
const increment = 100 / (duration / interval);

const counter = setInterval(() => {
  percent += increment;
  if (percent >= 100) {
    percent = 100;
    clearInterval(counter);
  }
  text.textContent = Math.floor(percent) + "%";
}, interval);

// Force loader to stay for 5 seconds
setTimeout(() => {
  preloader.classList.add("hide");
  site.style.visibility = "visible";
}, duration);




/* ANIMATION */

window.addEventListener("DOMContentLoaded", () => {
	const mainText = new SplitText(".text-animation__text", {
		type: "words, chars"
	});
	const secondText = new SplitText(".final__bottom-text", {
		type: "words, chars"
	});

	const words = [...document.querySelectorAll(".text-animation__word")];

	/* Main Text Animation */

	gsap.fromTo(
		mainText.chars,
		{ color: "#E0E0E0" },
		{
			color: "#000",
			stagger: 0.05,
			scrollTrigger: {
				trigger: ".text-animation__text",
				start: "top bottom",
				end: "bottom center",
				scrub: 1
			}
		}
	);

	/* Image Animation */

	words.forEach((word) => {
		const wrapper = word.querySelector(".text-animation__image-wrapper");
		const revealLeft = wrapper.querySelector(".text-animation__reveal.left");
		const revealRight = wrapper.querySelector(".text-animation__reveal.right");

		if ([wrapper, revealLeft, revealRight].some((el) => !el)) return;

		gsap.set(wrapper, { width: 0 });
		gsap.set([revealLeft, revealRight], { xPercent: 0 });

		ScrollTrigger.create({
			trigger: word,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => {
				gsap.to(wrapper, {
					width: "5vw",
					duration: 0.5,
					ease: "power2.out"
				});
				gsap.to(revealLeft, {
					xPercent: -100,
					duration: 0.5,
					ease: "power2.out"
				});
				gsap.to(revealRight, {
					xPercent: 100,
					duration: 0.5,
					ease: "power2.out",
					delay: 0.05
				});
			},
			onLeaveBack: () => {
				gsap.to(wrapper, {
					width: 0,
					duration: 0.5,
					ease: "power2.inOut"
				});
				gsap.to(revealLeft, {
					xPercent: 0,
					duration: 0.5,
					ease: "power2.inOut"
				});
				gsap.to(revealRight, {
					xPercent: 0,
					duration: 0.5,
					ease: "power2.inOut",
					delay: 0.05
				});
			}
		});
	});

	/* Second Text Animation */

	gsap.fromTo(
		secondText.chars,
		{ color: "#E0E0E0" },
		{
			color: "#023E8A",
			stagger: 0.05,
			scrollTrigger: {
				trigger: ".final__bottom-text",
				start: "top bottom-=15%",
				end: "bottom bottom",
				scrub: 1
			}
		}
	);
});
 var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            spaceBetween: -100,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 100,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            loop: true,
        });

        const button = document.querySelector('a.button');

button.addEventListener('mousemove', function(evt) {
  const movX = evt.clientX - this.getBoundingClientRect().x;
  gsap.to(".button__spotlight", {
    x: movX,
    scale: 30,
    duration: 0.3
  })
})

button.addEventListener('mouseleave', function(evt) {
  const movX = evt.clientX - this.getBoundingClientRect().x;
  gsap.to(".button__spotlight", {
    x: movX,
    scale: 0,
    duration: 0.3
  })
})

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  item.querySelector('.accordion-header').addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// 
console.clear();
gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-=";

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }

          return y;
        })
      }
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "gallerySection",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  }
});

// 
const toggleBtn = document.getElementById("toggleBtn");
const menuPanel = document.getElementById("menuPanel");

toggleBtn.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
  toggleBtn.textContent = menuPanel.classList.contains("active") ? "×" : "+";
});




let lastScrollY = window.scrollY;
const header = document.querySelector(".site-header");
const heroHeight = window.innerHeight; // 100vh lock

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  
  if (currentScrollY < heroHeight) {
    header.classList.remove("hide");
    header.classList.add("show");
    lastScrollY = currentScrollY;
    return;
  }

  // After hero
  if (currentScrollY > lastScrollY) {
    //  Scroll DOWN → hide
    header.classList.add("hide");
    header.classList.remove("show");
  } else {
    //  Scroll UP → show
    header.classList.add("show");
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });



  // Image zoom

  console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapperZoom",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to("#ImageZoom", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".sectionZoom.heroZoom",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

// Scroll to top
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// marquee three section

console.clear();

gsap.registerPlugin(ScrollTrigger);

const scrollingText = gsap.utils.toArray('.rail--left img');

const tl = horizontalLoop(scrollingText, {
  repeat: -1,
  paddingRight: 40 
});

let speedTween;

ScrollTrigger.create({
  trigger: ".rail--left",
  start: "top bottom",
  end: "bottom top",
  onUpdate: (self) => {
    speedTween && speedTween.kill();
    speedTween = gsap.timeline()
    .to(tl, {
      timeScale: 1.5 * self.direction,
      duration: 0.25
    })
    .to(tl, {
      timeScale: 1 * self.direction,
      duration: 1.5
    }, "+=0.5")
  },
  // markers: true,
})

function horizontalLoop(items, config) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		xPercents = [],
		curIndex = 0,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		totalWidth, curX, distanceToStart, distanceToLoop, item, i;
	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
		xPercent: (i, el) => {
			let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
			return xPercents[i];
		}
	});
	gsap.set(items, {x: 0});
	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
		  .add("label" + i, distanceToStart / pixelsPerSecond);
		times[i] = distanceToStart / pixelsPerSecond;
	}
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}
	tl.next = vars => toIndex(curIndex+1, vars);
	tl.previous = vars => toIndex(curIndex-1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index, vars) => toIndex(index, vars);
	tl.times = times;
	tl.progress(1, true).progress(0, true); // pre-render for performance
	if (config.reversed) {
	  tl.vars.onReverseComplete();
	  tl.reverse();
	}
	return tl;
}

const scrollingTextRight = gsap.utils.toArray('.rail--right img');

const tlRight = horizontalLoop(scrollingTextRight, {
  repeat: -1,
  paddingRight: 40,
  reversed: true // 👈 opposite direction
});

let speedTweenRight;

ScrollTrigger.create({
  trigger: ".rail--right",
  start: "top bottom",
  end: "bottom top",
  onUpdate: (self) => {
    speedTweenRight && speedTweenRight.kill();
    speedTweenRight = gsap.timeline()
      .to(tlRight, {
        timeScale: -1.5 * self.direction,
        duration: 0.25
      })
      .to(tlRight, {
        timeScale: -1 * self.direction,
        duration: 1.5
      }, "+=0.5");
  }
});


  

gsap.registerPlugin(SplitText);

gsap.set(".start__box", { opacity: 1 });

let split = SplitText.create(".start__heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.05,
  delay: 5,
});



  gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        // large screens
        // mm.add("(min-width: 769px)", () => {
        //   gsap.to(".card-2", {
        //     x: "80px",
        //     scrollTrigger: {
        //       trigger: ".scroll-root",
        //       start: "top top",
        //       end: "33% bottom",
        //       scrub: true,
        //       pin: ".scroll-container",
        //       pinSpacing: false,
        //       id: "card-2"
        //     }
        //   });

        //   gsap.to(".card-3", {
        //     x: "160px",
        //     scrollTrigger: {
        //       trigger: ".scroll-root",
        //       start: () => ScrollTrigger.getById("card-2").end,
        //       end: "66% bottom",
        //       scrub: true,
        //       pin: ".scroll-container",
        //       pinSpacing: false,
        //       id: "card-3"
        //     }
        //   });

        //   gsap.to(".card-4", {
        //     x: "240px",
        //     scrollTrigger: {
        //       trigger: ".scroll-root",
        //       start: () => ScrollTrigger.getById("card-3").end,
        //       end: "bottom bottom",
        //       scrub: true,
        //       pin: ".scroll-container",
        //       pinSpacing: false,
        //       id: "card-4"
        //     }
        //   });
        // });

        // small screens
        mm.add("(max-width: 2400px)", () => {
            gsap.to(".card-2", {
                y: "80px",
                scrollTrigger: {
                    trigger: ".scroll-root",
                    start: "top top",
                    end: "33% bottom",
                    scrub: true,
                    pin: ".scroll-container",
                    pinSpacing: false,
                    id: "card-2"
                }
            });

            gsap.to(".card-3", {
                y: "160px",
                scrollTrigger: {
                    trigger: ".scroll-root",
                    start: () => ScrollTrigger.getById("card-2").end,
                    end: "66% bottom",
                    scrub: true,
                    pin: ".scroll-container",
                    pinSpacing: false,
                    id: "card-3"
                }
            });

            gsap.to(".card-4", {
                y: "240px",
                scrollTrigger: {
                    trigger: ".scroll-root",
                    start: () => ScrollTrigger.getById("card-3").end,
                    end: "bottom bottom",
                    scrub: true,
                    pin: ".scroll-container",
                    pinSpacing: false,
                    id: "card-4"
                }
            });
        });