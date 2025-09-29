const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".gallery img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
function openLightbox(event, index) {
  lightbox.style.display = "flex";
  lightboxImg.src = event.target.src;
  currentIndex = index;
}
function closeLightbox() {
  lightbox.style.display = "none";
}
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}
images.forEach((img, index) => {
  img.addEventListener("click", (event) => openLightbox(event, index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

document.addEventListener("keydown", function(event) {
  if (lightbox.style.display === "flex") { 
    if (event.key === "ArrowLeft") {
      showPrev();
    } else if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }
});