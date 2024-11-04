const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "☀️Light Mode";
  } else {
    themeToggleButton.textContent = "🌙Dark Mode";
  }
});





  document.querySelector("#theme-toggle").addEventListener("click", () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  });










