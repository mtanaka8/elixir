// OVERLAY NAV MENU SHOW HIDE

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function() {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed')
    } else {
        mysitenav.setAttribute('data-navstate', 'open')
    }
};

var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

//  REVEAL ON SCROLL ANIMATION
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-sectionstate", "active");
      } else {
        entry.target.setAttribute("data-sectionstate", "inactive");
      }
    });
  });
  
  
  document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    myobserver.observe(section);
  });

 
