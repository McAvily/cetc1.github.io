// Reserved for future JS interactions
document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".side-menu");

    toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".side-menu");
    const overlay = document.querySelector(".overlay");

    // Open menu
    toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    // Close menu when clicking overlay
    overlay.addEventListener("click", function() {
        menu.classList.remove("show");
        overlay.classList.remove("active");
    });
});

const fullText = `The Crescent Emerging Technologies Centre (CETC) equips students with future-ready skills
through hands-on learning in robotics, AI, coding, and IoT.
It offers a creative space where young minds can explore cutting-edge technology
under expert guidance.`;

const typewriter = document.getElementById('typewriter');
let index = 0;

function type() {
  if (index <= fullText.length) {
    typewriter.textContent = fullText.slice(0, index);
    index++;
    setTimeout(type, 40); // typing speed
  }
  // no else — stop typing when done, leave blinking cursor
}

type();

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.course-card');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (rect.top <= windowHeight * 0.75) && (rect.bottom >= windowHeight * 0.25);
  }

  function checkCards() {
    cards.forEach((card, index) => {
      if (isInViewport(card)) {
        // Add visible with stagger delay
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200);
      } else {
        // Remove visible class so it fades out
        card.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkCards);
  window.addEventListener('resize', checkCards);
  checkCards(); // initial check on load
});

