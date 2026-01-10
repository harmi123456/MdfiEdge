fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


// Header script start
const navbar = document.querySelector(".custom-navbar");
const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu after click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            }
        }
    });
});

// Header script over





//img scroll effect
$(window).on("scroll", function () {
    $(".image-wrapper").each(function () {
        const elementTop = $(this).offset().top;
        const elementHeight = $(this).outerHeight();
        const windowTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (windowTop + windowHeight > elementTop + elementHeight / 4) {
            $(this).addClass("active");
        }
    });
});



// home page section 3 script
// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
});




// Home page section 5
// Intersection Observer for scroll animations
// Intersection Observer for card animations
const observerOptions1 = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions1);

document.querySelectorAll('.service-card').forEach(card => {
    observer1.observe(card);
});