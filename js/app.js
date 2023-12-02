"use strict"
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const wrapper = document.getElementById("wrapper");
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  const lockPadding = body.querySelectorAll(".lock-padding");
  const timeout = 300;
  const anchors = body.querySelectorAll(".js-scroll-link");
  for (let t of anchors)
    t.addEventListener("click", function (e) {
      e.preventDefault();
      const o = t.getAttribute("href").substr(1);
      document
        .getElementById(o)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });

  function bodyLock() {
    const t = window.innerWidth - wrapper.offsetWidth + "px";
    let e = window.scrollY;
    if (lockPadding.lenght > 0)
      for (let e = 0; e < lockPadding.lenght; e++) {
        lockPadding[e].style.paddingRight = t;
      }
    (body.style.paddingRight = t),
      body.classList.add("lock"),
      (body.dataset.position = e),
      (body.style.top = -e + "px");
  }
  function bodyUnLock() {
    setTimeout(function () {
      let t = parseInt(body.dataset.position, 10);
      if (((body.style.top = "auto"), lockPadding.lenght > 0))
        for (let t = 0; t < lockPadding.lenght; t++) {
          lockPadding[t].style.paddingRight = "0px";
        }
      (body.style.paddingRight = "0px"),
        body.classList.remove("lock"),
        window.scroll({ top: t, left: 0 }),
        body.removeAttribute("data-position");
    }, 300);
  }

  const heroMenu = document.getElementById("hero-menu");
  const heroBurger = document.getElementById("hero-burger");
  const heroMenuLinks = document.querySelectorAll(".hero-menu__link");

  function heroOpenMenu(burger) {
    if (burger.classList.contains("open-menu")) {
      heroMenu.classList.add("open-menu");
    } else {
      heroMenu.classList.remove("open-menu");
    }
  }
  heroBurger.addEventListener("click", () => {
    heroBurger.classList.toggle("open-menu");
    heroOpenMenu(heroBurger);
  });
  heroMenuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      heroBurger.classList.remove("open-menu");
      heroOpenMenu(heroBurger);
    });
  });
  document.addEventListener("click", (element) => {
    if (!element.target.closest("#hero-burger, .hero__nav")) {
      heroBurger.classList.remove("open-menu");
      heroMenu.classList.remove("open-menu");
    }
  });

});
