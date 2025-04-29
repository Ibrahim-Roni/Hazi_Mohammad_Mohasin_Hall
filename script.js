// JavaScript for scroll event
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
}

// Reveal sections smoothly while scrolling
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach(section => {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const revealPoint = 100; // how early animation starts
  
      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check in case some sections are already visible
  revealOnScroll();
  

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// See More Button for Images
document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const gallery = document.querySelector('.image-gallery');
    gallery.classList.toggle('grid-rows-auto');
    this.textContent = gallery.classList.contains('grid-rows-auto') ? 'See Less' : 'See More';
});

// Fullscreen Image Viewer
function openFullscreen(imgSrc) {
    const viewer = document.getElementById('fullscreenViewer');
    const img = document.getElementById('fullscreenImg');
    img.src = imgSrc;
    viewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    document.getElementById('fullscreenViewer').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Student Counter Animation
function animateCounter(target, duration) {
    const element = document.getElementById(target);
    const targetNumber = parseInt(element.textContent);
    const increment = targetNumber / (duration / 16); // 60fps
    
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
            clearInterval(timer);
            current = targetNumber;
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Start counter when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter('studentCount', 8000);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('#studentCount').parentElement.parentElement);

// Admin Login Button
document.getElementById('adminLoginBtn').addEventListener('click', function() {
    document.getElementById('adminModal').classList.remove('hidden');
});

// Go Button for Location
document.getElementById('goBtn').addEventListener('click', function() {
    const location = document.getElementById('userLocation').value;
    if (location) {
        alert(`Showing directions from ${location} to our hostel`);
        // In a real implementation, you would use Google Maps API to show directions
    }
});