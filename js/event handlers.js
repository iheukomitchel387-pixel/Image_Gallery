document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  function openLightbox(event) {
    lightbox.style.display = "block";
    lightboxImg.src = event.target.src; 
  }
  function closeLightbox() {
    lightbox.style.display = "none";
  }
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    img.addEventListener("click", openLightbox);
  });
  closeBtn.addEventListener("click", closeLightbox);
});