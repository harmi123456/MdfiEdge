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

const navbar = document.querySelector(".custom-navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Active link on scroll
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});





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
const servicesObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const servicesScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, servicesObserverOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    // Add staggered delay
    card.style.transitionDelay = `${index * 0.1}s`;
    servicesScrollObserver.observe(card);
});