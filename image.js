const imageData = [
  {
    hair: {
      serviceName: "Hair Style",
      image: ["imgs/portfolio/img1 (7).png"],
    },
  },
  {
    bridal: {
      serviceName: "Bridal",
      image: ["imgs/portfolio/img1 (7).png"],
    },
  },
  {
    saree: {
      serviceName: "saree draping",
      image: ["imgs/portfolio/img1 (7).png"],
    },
    groom: {
      serviceName: "Groom makeup",
      image: ["imgs/portfolio/img1 (7).png"],
    },
    Puberty: {
      serviceName: "Puberty makeup",
      image: ["imgs/portfolio/img1 (7).png"],
    },
    Model: {
      serviceName: "Model photo shoot",
      image: ["imgs/portfolio/img1 (7).png"],
    },
    Prewedding: {
      serviceName: "Prewedding photo shoot",
      image: ["imgs/portfolio/img1 (7).png"],
    },
    Baby: {
      serviceName: "Baby shower makeup",
      image: ["imgs/portfolio/img1 (7).png"],
    },
  },
];

const container = document.querySelector(".portfolio-container1");

const setImage = (category) => {
  const item = imageData.find((obj) => obj[category]);

  if (!item) {
    console.error("Category not found!");
    return;
  }

  const imagedata = item[category];

  container.innerHTML = `
      <div class="portfolio-title">
        <img src="./imgs/rose.png" alt="" />
        <h3 class="profile-title">${imagedata.serviceName}</h3>
        <img src="./imgs/rose.png" alt="" />
      </div>
      <ul>
        ${imagedata.image
          .map((img) => `<li><img src="${img}" alt="" /></li>`)
          .join("")}
      </ul>
    `;
};

// Retrieve category from localStorage and call setImage
const selectedCategory = localStorage.getItem("selectedCategory");
if (selectedCategory) {
  setImage(selectedCategory);
}
