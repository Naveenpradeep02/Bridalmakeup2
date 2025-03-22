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

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Step 2: Define portfolio data
const portfolioData = {
  1: {
    title: "Bridal Makeup 1",
    description: "Elegant bridal makeup look with soft tones.",
    image: "./imgs/1.jpg",
  },
  2: {
    title: "Bridal Makeup 2",
    description: "Glamorous bridal look with bold shades.",
    image: "./imgs/2.jpg",
  },
  3: {
    title: "Bridal Makeup 3",
    description: "Classic wedding style with natural highlights.",
    image: "./imgs/3.jpg",
  },
};

// Step 3: Find elements in the HTML
const titleElement = document.querySelector(".portfolio-title");
const descriptionElement = document.querySelector(".portfolio-description");
const imageElement = document.querySelector(".portfolio-image");

// Step 4: Update content if ID is valid
if (portfolioData[id]) {
  titleElement.innerText = portfolioData[id].title;
  descriptionElement.innerText = portfolioData[id].description;
  imageElement.src = portfolioData[id].image;
} else {
  titleElement.innerText = "Portfolio Not Found";
  descriptionElement.innerText = "Invalid portfolio selection.";
  imageElement.src = "";
}
