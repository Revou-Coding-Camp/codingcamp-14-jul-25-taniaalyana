document.addEventListener("DOMContentLoaded", function () {
  // Greeting
  let name = prompt("Hai, siapa namamu?");
  document.getElementById(
    "greeting"
  ).innerText = `Hai ${name}, Selamat datang di Kukiku!`;

  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
  };

  // Click outside to hide navbar
  const hamburger = document.querySelector("#hamburger-menu");
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });

  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Pesan Anda telah terkirim! Terima kasih telah menghubungi Kukiku."
      );
      contactForm.reset();
    });
  }

  // Feather icon replacement
  feather.replace();
});
