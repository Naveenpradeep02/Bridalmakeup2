// toggle Menu
const showmenu = document.querySelector(".menu-list");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

const handleMenu = () => {
  showmenu.classList.toggle("show-menu");
  openMenu.classList.add("remove-open");
  closeMenu.classList.add("addclose");
};

const handleClose = () => {
  showmenu.classList.remove("show-menu");
  openMenu.classList.remove("remove-open");
  closeMenu.classList.remove("addclose");
};

// Active nav
const sections = document.querySelectorAll("section");
const NavLink = document.querySelectorAll(".menu-list li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;

    const offSet = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      NavLink.forEach((links) => {
        links.classList.remove("active1");
        document
          .querySelector(".menu-list li a[href*=" + id + "]")
          .classList.add("active1");
      });
    }
  });
};

//slider
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 3300,
  autoplay: { delay: 4000 },
});
