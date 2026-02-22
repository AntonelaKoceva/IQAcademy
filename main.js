const home=document.querySelector("#home");
const programs=document.querySelector("#programs");
const socials=document.querySelectorAll("#socials img");

//navigation btns
home.addEventListener("click", () =>{
    window.location.href="home.html";
});
programs.addEventListener("click", () =>{
    window.location.href="programs.html";
});

//socials
socials.forEach(item => {
    item.addEventListener("click", () =>{
        switch(item.id){
            case "fb":
                window.open("https://www.facebook.com/IQOnlineAcademyMK/");
                break;
            case "ig":
                window.open("https://www.instagram.com/iqonlineacademy/?hl=en");
                break;
            case "in":
                window.open("https://mk.linkedin.com/company/iq-online-academy");
                break;
        }
    });
});

//buttons
function buttonListeners() {
  const schedules = document.querySelectorAll(".schedule");
  const explores = document.querySelectorAll(".explore");

  schedules.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open(
        "https://calendly.com/info-iq-online-academy/15min?month=2025-10",
      );
    });
  });
  explores.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "programs.html";
    });
  });
}

//testimonials
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let current = 0;

slides[current]?.classList.add("active");
function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    slides[index].classList.add("active");
}

rightBtn?.addEventListener("click", () => {
    current = (current+1) % slides.length;
    showSlide(current);
});

leftBtn?.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

programs
const pages = document.querySelectorAll(".page");
const leftB = document.getElementById("left-slide");
const rightB = document.getElementById("right-slide");
let currentPage = 0;

pages[currentPage]?.classList.add("visible");
function showPage(index) {
  pages.forEach((page) => page.classList.remove("visible"));
  pages[index].classList.add("visible");
  currentPage = index;
}
rightB?.addEventListener("click", () => {
  const nextPage = (currentPage + 1) % pages.length;
  showPage(nextPage);
});

leftB?.addEventListener("click", () => {
  const prevPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(prevPage);
});


//popups
const btnPopup = document.querySelectorAll(".btn-popup");
const popup = document.querySelector(".popups");
const overlay = document.querySelector(".overlay");

btnPopup &&
  btnPopup.forEach((item) => {
        item.addEventListener("click", function () {
          document
  .querySelectorAll(".popup-block")
  .forEach(p => p.classList.remove("popup-open"));

          popup?.classList.add("display-flex");
          overlay.classList.add("display-block");
          document.body.style.overflow = "hidden";

          loadPopups();

          const idParent = item.parentElement.parentElement.id + "-popup";
          const parentId = item.parentElement.id + "-popup";

          if (idParent != "-popup") {
            setTimeout(() => {
              switch (idParent) {
                case "digital-marketing-popup":
                  document
                    .getElementById("digital-marketing-popup")
                    ?.classList.add("popup-open");
                  break;

                case "graphic-design-popup":
                  document
                    .getElementById("graphic-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "uxui-design-popup":
                  document
                    .getElementById("uxui-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "motion-graphics-popup":
                  document
                    .getElementById("motion-graphics-popup")
                    ?.classList.add("popup-open");
                  break;

                case "interior-design-popup":
                  document
                    .getElementById("interior-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "frontend-popup":
                  document
                    .getElementById("frontend-popup")
                    ?.classList.add("popup-open");
                  break;
              }
            }, 50);
          } else {
            setTimeout(() => {
              switch (parentId) {
                case "digital-marketing-popup":
                  document
                    .getElementById("digital-marketing-popup")
                    ?.classList.add("popup-open");
                  break;

                case "graphic-design-popup":
                  document
                    .getElementById("graphic-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "uxui-design-popup":
                  document
                    .getElementById("uxui-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "motion-graphics-popup":
                  document
                    .getElementById("motion-graphics-popup")
                    ?.classList.add("popup-open");
                  break;

                case "interior-design-popup":
                  document
                    .getElementById("interior-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "frontend-popup":
                  document
                    .getElementById("frontend-popup")
                    ?.classList.add("popup-open");
                  break;
              }
            }, 50);
          }

        });
  });

const popupBlock = document.querySelectorAll(".popup-block");
function closePopup(){
    popup?.classList.remove("display-flex");
    btnPopup.forEach(nav => nav.classList.remove("display-block"));
    popupBlock.forEach(sec => sec.classList.remove("popup-open"));
    overlay.classList.remove("display-block");
    document.body.style.overflow="auto";
}
function popupClose(){
    const closePopupBlock=document.querySelectorAll(".esc-container");
    closePopupBlock.forEach(item => {
    item.addEventListener("click", closePopup)
})
}
overlay.addEventListener("click", closePopup)
let popupsLoaded = false;
function loadPopups() {
  if (popupsLoaded) return;

  fetch("programs.html")
    .then(res => res.text())
    .then(html => {
      const temp = document.createElement("div");
      temp.innerHTML = html;

      const popupsFromPrograms = temp.querySelector(".popups");
      document.querySelector(".popups").innerHTML = popupsFromPrograms.innerHTML;
      
      buttonListeners();
      popupClose();
      
      popupsLoaded = true;
    });
}


//menu - responsive
const logo=document.querySelector(".logo-menu");
const mobileMenu=document.querySelector(".mobile-menu");
logo?.addEventListener("click", (e) =>{
  e.preventDefault();
  mobileMenu?.classList.toggle("open");
  // console.log(logo)
})

//program - responsive


























//programs
// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swipe-programs', {  // твојата класа .swipe-programs
//     // Основни поставки
//     slidesPerView: 1,            // default: 1 карта (за мобилен)
//     slidesPerGroup: 1,           // поместување по 1
//     spaceBetween: 20,            // простор помеѓу карти
//     loop: false,                 // без бесконечен циклус (можеш да ставиш true ако сакаш да се враќа)
//     speed: 600,                  // smooth анимација (600ms)

//     // Навигација – твоите копчиња
//     navigation: {
//       nextEl: '#right-slide',    // твоето десно копче
//       prevEl: '#left-slide',     // твоето лево копче
//     },

//     // Точки долу
//     pagination: {
//       el: '.swipe-dots',         // твојот .swipe-dots
//       clickable: true,           // можеш да кликнеш на точка за да оди директно
//       dynamicBullets: true,      // точките се менуваат динамички
//     },

//     // Responsive: прилагодување според екран
//     breakpoints: {
//       419: {                     // за таблети (~2 карти)
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 30,
//       },
//       420: {                    // за desktop (3 карти)
//         slidesPerView: 3,
//         slidesPerGroup: 3,       // поместување по 3 – скриј 3, покажи 3
//         spaceBetween: 40,
//       },
//     },
//   });
// });

// const slider = document.querySelector('.swipe-programs');
// const wrapper = document.querySelector('.swipe-wrapper');
// const items = document.querySelectorAll('.swipe-item');
// const prevBtn = document.getElementById('left-slide');
// const nextBtn = document.getElementById('right-slide');

// const itemsPerPage = 3;
// const totalPages = Math.ceil(items.length / itemsPerPage);

// let currentPage = 0;

// function setPosition(animate = true) {
//     const sliderWidth = slider.clientWidth;
//     wrapper.style.transition = animate ? 'transform 0.4s ease' : 'none';
//     wrapper.style.transform = `translateX(-${currentPage * sliderWidth}px)`;
// }

// // RIGHT
// nextBtn.addEventListener('click', () => {
//     if (currentPage === totalPages - 1) {
//         // teleport to first
//         currentPage = 0;
//         setPosition(false);

//         // ⬇️ ВАЖНО: враќање на animation во следниот frame
//         requestAnimationFrame(() => {
//             requestAnimationFrame(() => {
//                 setPosition(true);
//             });
//         });
//     } else {
//         currentPage++;
//         setPosition(true);
//     }
// });

// // LEFT
// prevBtn.addEventListener('click', () => {
//     if (currentPage === 0) {
//         // teleport to last
//         currentPage = totalPages - 1;
//         setPosition(false);

//         requestAnimationFrame(() => {
//             requestAnimationFrame(() => {
//                 setPosition(true);
//             });
//         });
//     } else {
//         currentPage--;
//         setPosition(true);
//     }
// });

// window.addEventListener('resize', () => setPosition(false));

// // rightB?.addEventListener("click", () => {
// //   const nextPage = (currentPage + 1) % pages.length;
// //   showPage(nextPage);
// // });

// // leftB?.addEventListener("click", () => {
// //   const prevPage = (currentPage - 1 + pages.length) % pages.length;
// //   showPage(prevPage);
// // });