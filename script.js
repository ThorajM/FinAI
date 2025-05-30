// Hamburger menu toggle (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// Theme toggle (light/dark mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});

// Launch App Button (simulate "booting the application")
const startAppBtn = document.getElementById('startApp');
const finalStartAppBtn = document.getElementById('finalStartApp');
const launchApp = function(e) {
  e.preventDefault();
  alert("🎉 Thank you for choosing FinAI! Redirecting to the application...");
  // In a real project, you would redirect to your app or demo
  // window.location.href = "https://yourapp.com";
};
startAppBtn.addEventListener('click', launchApp);
finalStartAppBtn.addEventListener('click', launchApp);

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! You'll hear from us soon.`);
    this.reset();
  });
}
