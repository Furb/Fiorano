/* MainNavbar */

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.querySelector("#main__links");
  const navToggle = document.querySelector(".nav__toggle");
  const menuIcon = document.querySelector(".menu__icon");
  const overlay = document.querySelector(".overlay");

  navToggle.addEventListener("click", () => {
    const visibillity = mainNav.getAttribute("data-visible");

    if (visibillity === "false") {
      mainNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
      menuIcon.textContent = "close";
      overlay.style.display = "block";
    } else if (visibillity === "true") {
      mainNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
      menuIcon.textContent = "menu";
      overlay.style.display = "none";
    }
  });
});

/* copyright år */

const year = `
        ${new Date().getFullYear()} 
     `;

document.querySelector(".year").innerHTML = year;
