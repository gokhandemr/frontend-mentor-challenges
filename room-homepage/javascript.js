const bannerPosts = [
  {
    title: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: "./images/desktop-image-hero-1.jpg",
    imageResponsive: "./images/mobile-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
    image: "./images/desktop-image-hero-2.jpg",
    imageResponsive: "./images/mobile-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "./images/desktop-image-hero-3.jpg",
    imageResponsive: "./images/mobile-image-hero-3.jpg",
  },
];

const responsiveCloseButton = document.querySelector(".responsive-close-button");
const responsiveOpenButton = document.querySelector(".responsive-open-button");
const responsiveNav = document.querySelector("nav");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

let startBanner = 0;

previousButton.addEventListener("click", () => {
  --startBanner;
  if (startBanner < 0) {
    startBanner = bannerPosts.length - 1;
  } else if (startBanner > bannerPosts.length - 1) {
    startBanner = 0;
  }
  writeBannerUI(startBanner);
});

nextButton.addEventListener("click", () => {
  ++startBanner;
  if (startBanner > bannerPosts.length - 1) {
    startBanner = 0;
  } else if (startBanner < 0) {
    startBanner = bannerPosts.length - 1;
  }
  writeBannerUI(startBanner);
});

const writeBannerUI = (event) => {
  const bannerLeft = document.querySelector(".banner-left");
  const bannerRight = document.querySelector(".banner-right-center");
  bannerLeft.innerHTML = "";
  bannerRight.innerHTML = "";
  const imgElement = document.createElement("img");
  imgElement.srcset = `${bannerPosts[event].imageResponsive} 768w, ${bannerPosts[event].image}`;
  imgElement.src = bannerPosts[event].image;
  imgElement.alt = bannerPosts[event].title;
  bannerLeft.appendChild(imgElement);
  const bannerH1Element = document.createElement("h1");
  bannerH1Element.innerText = bannerPosts[event].title;
  bannerRight.appendChild(bannerH1Element);
  const bannerPElement = document.createElement("p");
  bannerPElement.innerText = bannerPosts[event].body;
  bannerRight.appendChild(bannerPElement);
  const bannerAElement = document.createElement("a");
  bannerAElement.href = "/";
  bannerAElement.innerText = "SHOP NOW";
  bannerAElement.className = "shop-now";
  const bannerAElementSpanElement = document.createElement("span");
  bannerAElement.appendChild(bannerAElementSpanElement);
  bannerRight.appendChild(bannerAElement);
};

document.addEventListener("DOMContentLoaded", writeBannerUI(startBanner));

responsiveCloseButton.addEventListener("click", () => {
  responsiveNav.style.display = "none";
});

responsiveOpenButton.addEventListener("click", () => {
  responsiveNav.style.display = "flex";
});
