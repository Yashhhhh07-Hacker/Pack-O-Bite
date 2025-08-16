// Slide-in animation for About images
window.addEventListener("scroll", () => {
  document.querySelectorAll(".about img").forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add("visible");
    }
  });
});
