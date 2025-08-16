// Floating snack icons
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");
  icons.forEach(icon => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    setInterval(() => {
      x += (Math.random() - 0.5) * 10;
      y += (Math.random() - 0.5) * 10;
      icon.style.transform = `translate(${x}px, ${y}px)`;
    }, 1000);
  });
});
