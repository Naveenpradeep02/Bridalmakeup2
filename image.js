const imageData = [
  {
    hair: {
      serviceName: "Hair Style",
      image: [
        "./imgs/hair/hair (1).jpg",
        "./imgs/hair/hair (2).jpg",
        "./imgs/hair/hair (3).jpg",
        "./imgs/hair/hair (4).jpg",
        "./imgs/hair/hair (5).jpg",
        "./imgs/hair/hair (6).jpg",
        "./imgs/hair/hair (7).jpg",
        "./imgs/hair/hair (8).jpg",
        "./imgs/hair/hair (9).jpg",
        "./imgs/hair/hair (10).jpg",
      ],
    },
  },
  {
    bridal: {
      serviceName: "Bridal",
      image: [
        "./imgs/bridal/bridal (1).jpg",
        "./imgs/bridal/bridal (2).jpg",
        "./imgs/bridal/bridal (3).jpg",
        "./imgs/bridal/bridal (4).jpg",
        "./imgs/bridal/bridal (5).jpg",
        "./imgs/bridal/bridal (6).jpg",
        "./imgs/bridal/bridal (7).jpg",
        "./imgs/bridal/bridal (8).jpg",
        "./imgs/bridal/bridal (9).jpg",
        "./imgs/bridal/bridal (10).jpg",
        "./imgs/bridal/bridal (11).jpg",
        "./imgs/bridal/bridal (12).jpg",
        "./imgs/bridal/bridal (13).jpg",
        "./imgs/bridal/bridal (14).jpg",
        "./imgs/bridal/bridal (15).jpg",
        "./imgs/bridal/bridal (16).jpg",
      ],
    },
  },
  {
    saree: {
      serviceName: "saree draping",
      image: [
        "imgs/sree/saree (1).jpg",
        "imgs/sree/saree (2).jpg",
        "imgs/sree/saree (3).jpg",
        "imgs/sree/saree (4).jpg",
        "imgs/sree/saree (5).jpg",
      ],
    },
    groom: {
      serviceName: "Groom makeup",
      image: [],
    },
    Puberty: {
      serviceName: "Puberty makeup",
      image: [],
    },
    Model: {
      serviceName: "Model photo shoot",
      image: [],
    },
    Prewedding: {
      serviceName: "Prewedding photo shoot",
      image: [
        "imgs/preWed/prewed (1).jpg",
        "imgs/preWed/prewed (2).jpg",
        "imgs/preWed/prewed (3).jpg",
        "imgs/preWed/prewed (7).jpg",
        "imgs/preWed/prewed (4).jpg",
        "imgs/preWed/prewed (5).jpg",
        "imgs/preWed/prewed (6).jpg",
      ],
    },
    Baby: {
      serviceName: "Baby shower makeup",
      image: [
        "./imgs/baby/baby (1).jpg",
        "./imgs/baby/baby (2).jpg",
        "./imgs/baby/baby (3).jpg",
        "./imgs/baby/baby (4).jpg",
        "./imgs/baby/baby (5).jpg",
        "./imgs/baby/baby (6).jpg",
        "./imgs/baby/baby (7).jpg",
        "./imgs/baby/baby (8).jpg",
        "./imgs/baby/baby (9).jpg",
        "./imgs/baby/baby (10).jpg",
        "./imgs/baby/baby (11).jpg",
      ],
    },
  },
];

const container = document.querySelector(".portfolio-container1");

const setImage = (category) => {
  const item = imageData.find((obj) => obj[category]);

  if (!item) {
    console.error("Category not found!");
    container.innerHTML = `<p class="error-message">Category not found!</p>`;
    return;
  }

  const imagedata = item[category];

  // Check if the image array is empty
  const imagesMarkup = imagedata.image.length
    ? imagedata.image.map((img) => `<img src="${img}" alt="Image" />`).join("")
    : `<p class="no-image">No Image Available</p>`;

  container.innerHTML = `
      <div class="portfolio-title">
        <img src="./imgs/rose.png" alt="Rose Icon" />
        <h3 class="profile-title">${imagedata.serviceName}</h3>
        <img src="./imgs/rose.png" alt="Rose Icon" />
      </div>
      <div class="imgage-container">
        ${imagesMarkup}
      </div>
    `;
};

// Retrieve category from localStorage and call setImage
const selectedCategory = localStorage.getItem("selectedCategory");
if (selectedCategory) {
  setImage(selectedCategory);
}
