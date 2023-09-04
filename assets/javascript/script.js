const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

const btn1 = document.querySelector(".btn1");
const dp = document.querySelector(".dp");
const dd1 = document.querySelector(".dd1");
const dd2 = document.querySelector(".dd2");
const dd3 = document.querySelector(".dd3");

btn1.addEventListener("click", () => {
  btn1.classList.toggle("active");
  dp.classList.toggle("active");
});

dd1.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });

  dd2.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });

  dd3.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });


const navbarToggle1 = document.querySelector(".play");
const navbarLinks1 = document.querySelector(".card");

navbarToggle1.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks1.classList.toggle("active");
});

const navbarToggle2 = document.querySelector(".play");
const navbarLinks2 = document.querySelector(".card1");

navbarToggle2.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
});

const navbarToggle3 = document.querySelector(".play");
const navbarLinks3 = document.querySelector(".container");

navbarToggle3.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks3.classList.toggle("active");
});


var coll = document.getElementsByClassName("qn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const fq = document.querySelector(".fq");
const landingpage = document.querySelector(".landing-page");
const btn4 = document.querySelector(".btn4");
const close = document.querySelector(".close");
const faq = document.querySelector(".faq");
const hm1 = document.querySelector(".hm1");
const hm2 = document.querySelector(".hm2");
const hm3 = document.querySelector(".hm3");
const hm4 = document.querySelector(".hm4");
const hm5 = document.querySelector(".hm5");

btn4.addEventListener("click", () => {
    close.classList.toggle("active");
});

fq.addEventListener("click", () => {
    landingpage.classList.add("active");
    faq.classList.add("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm1.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm2.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm3.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm4.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm5.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});


// const drop = document.querySelector(".drop");
// const dropdown = document.querySelector(".dropdown-content");

// drop.addEventListener("click", () => {
//   drop.classList.toggle("active");
//   dropdown.classList.toggle("active");
// });


// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }

const sliderContainer = document.querySelector('.slider-container');
const sliderContent = sliderContainer.querySelector('.slider-content');
const sliderItems = sliderContent.querySelector('.slider-items');
const sliderItem = sliderItems.querySelectorAll('.slider-item');

let slideTouched = false;
let currentMouseX = 0;
let lastMouseX = 0;
let lastSliderX = 0;
let moveTo = 0;

const runSlider = () => {

    const space = 30;
    const sliderSizes = onResize();
    const currentSlideIndex = sliderItem.length;
    const currentSlideDegree = 360 / currentSlideIndex;
    const translateZ = horizontalHeight(sliderSizes.w, currentSlideIndex, space);

    const height = calculateHeight(translateZ);

    sliderContainer.style.width = `${translateZ * 2 + space * currentSlideIndex}px`;
    sliderContainer.style.height = `${height}px`;

    sliderItem.forEach((item, i) => {
        item.style.transform = `rotateY(${currentSlideDegree * i}deg) translateZ(${translateZ}px)`;
    });

}

const onResize = () => {

    const boundingCarousel = sliderContent.getBoundingClientRect();

    const sliderSizes = {
        w: boundingCarousel.width,
        h: boundingCarousel.height
    };

    return sliderSizes;

}

const horizontalHeight = (sliderWidth, currentSlideIndex, space) => {
    return sliderWidth / 2 / Math.tan(Math.PI / currentSlideIndex) + space;
}

const calculateHeight = (translateZ) => {

    const t = Math.atan((90 * Math.PI) / 180 / 2);
    const height = 2 * t * translateZ;

    return height;

}

const updateMouseX = x => {

    currentMouseX = x;
    currentMouseX < lastMouseX ? moveTo -= 8 : moveTo += 8;

    lastMouseX = currentMouseX;

}

const updateSlider = () => {

    lastSliderX = 0.2 * (moveTo - lastSliderX) + lastSliderX;
    sliderItems.style.transform = `rotateY(${lastSliderX}deg)`;

    requestAnimationFrame(updateSlider);

}

const checkMousePosition = () => {

    sliderItems.addEventListener('mousedown', () => {
        slideTouched = true;
        sliderItems.style.cursor = "grabbing";
    });

    sliderItems.addEventListener('mouseup', () => {
        slideTouched = false;
        sliderItems.style.cursor = "grab";
    });

    sliderItems.addEventListener('mouseleave', () => {
        slideTouched = false;
    });

    sliderItems.addEventListener('mousemove', e => {
        slideTouched && updateMouseX(e.clientX);
    });

    sliderItems.addEventListener('touchstart', () => {
        slideTouched = true;
    });

    sliderItems.addEventListener('touchend', () => {
        slideTouched = false;
    });

    sliderItems.addEventListener('touchmove', e => {
        slideTouched && updateMouseX(e.touches[0].clientX);
    });

    updateSlider();
    runSlider();

}

checkMousePosition();
