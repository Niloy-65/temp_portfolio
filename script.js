// 1. Preloader
window.addEventListener("load", () => {
    const tl = gsap.timeline();
    tl.to(".loader-progress", { width: "100%", duration: 1 })
      .to(".preloader", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
      .from(".reveal-text", { y: 50, opacity: 0, stagger: 0.1, duration: 0.8 });
});

// 2. Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15 });
});

// 3. Magnetic Logic
const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.classList.add('active'));
    elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        gsap.to(elem, { x: 0, y: 0, duration: 0.3 });
    });
    elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
        gsap.to(elem, { x: x, y: y, duration: 0.3 });
    });
});

// 4. Infinite Carousel
const track = document.querySelector('.carousel-track');
if (track) {
    const cards = Array.from(track.children);
    cards.forEach(card => track.appendChild(card.cloneNode(true)));
    let anim = gsap.to(track, { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
    track.addEventListener('mouseenter', () => anim.pause());
    track.addEventListener('mouseleave', () => anim.play());
}

// 5. Theme & Mobile Menu
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    const body = document.documentElement;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggleBtn.querySelector('i').classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
});

const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

// Toggle Menu
menuToggle.addEventListener('click', () => navLinksContainer.classList.toggle('active'));

// Close Menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".reveal-img", { scrollTrigger: "#about", scale: 0.9, opacity: 0, duration: 1 });

// 6. Number Counter Animation for About Section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let zero = { val: 0 };
    let target = counter.getAttribute('data-target');

    gsap.to(zero, {
        val: target,
        duration: 2,
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%", 
        },
        onUpdate: function() {
            counter.innerText = Math.ceil(zero.val);
        }
    });
});

// Parallax effect for the Watermark Text
gsap.to(".watermark-text", {
    xPercent: 20, 
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});



// 7. Portfolio Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
                item.style.display = 'block'; // Ensure it takes up space
                // Small timeout to allow transition to play
                setTimeout(() => item.style.opacity = '1', 10);
                setTimeout(() => item.style.transform = 'scale(1)', 10);
            } else {
                item.classList.add('hide');
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                // Wait for transition then hide completely
                setTimeout(() => item.style.display = 'none', 400); 
            }
        });
    });
});



    // Simple Intersection Observer to animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });

    const cards = document.querySelectorAll('.market-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});



document.addEventListener("DOMContentLoaded", function() {
  const certificateSwiper = new Swiper('.cert-swiper', {
    // Core settings
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoHeight: false, // Ensures all cards stay the same height
    
    // Smooth Autoplay
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      }
    },

    // Modern Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation Arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Smooth transition speed
    speed: 800,
  });
});



    const pdfUrl = "assets/imgs/Cyber-Security-And-Ethics-Latest-Trend.pdf";


    function openPdfModal() {
        const modal = document.getElementById("pdfModal");
        const iframe = document.getElementById("pdfFrame");
        iframe.src = pdfUrl; 
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop scrolling
    }

    function closePdfModal() {
        const modal = document.getElementById("pdfModal");
        const iframe = document.getElementById("pdfFrame");
        modal.style.display = "none";
        iframe.src = ""; // Stop loading
        document.body.style.overflow = "auto"; // Resume scrolling
    }

    // Close if user clicks background
    window.onclick = function(event) {
        const modal = document.getElementById("pdfModal");
        if (event.target == modal) { closePdfModal(); }
    }



    //logo animation//

