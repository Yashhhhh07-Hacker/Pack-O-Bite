// Floating snack emojis random positions
document.querySelectorAll('.floating-icons span').forEach(icon => {
  icon.style.left = Math.random() * 90 + "vw";
  icon.style.top = Math.random() * 80 + "vh";
});

// Simple slide-in effect on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.menu-block, .about-images img').forEach(el => {
  observer.observe(el);
});
