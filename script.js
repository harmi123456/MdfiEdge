fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


// Header script start
// ================= HEADER SCRIPT START =================

// Load header
const isInFolder =
      window.location.pathname.includes("/about/") ||
      window.location.pathname.includes("/contact/");

const headerPath = isInFolder
  ? "../header/header.html"
  : "header/header.html";

fetch(headerPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const menuBtn = document.querySelector(".menu-btn");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        document.querySelector(".nav").classList.toggle("open");
      });
    }
  });




function initializeHeader() {

    const navbar = document.querySelector(".custom-navbar");
    const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
    const dropdownToggle = document.querySelector(".nav-link.dropdown-toggle");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    // -------- ACTIVE PAGE LOGIC --------
    const currentPath = window.location.pathname;
    const currentPage =
        currentPath.substring(currentPath.lastIndexOf('/') + 1) || "/";

    // Reset
    navLinks.forEach(link => link.classList.remove("active"));
    dropdownItems.forEach(item => item.classList.remove("active"));
    if (dropdownToggle) dropdownToggle.classList.remove("active");

    // Main nav active
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Services child page active (NO FORCE OPEN)
    let serviceActive = false;

    dropdownItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
            serviceActive = true;
        }
    });

    if (serviceActive && dropdownToggle) {
        dropdownToggle.classList.add("active");
    }

    // -------- NAVBAR SCROLL EFFECT --------
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // -------- SMOOTH SCROLL --------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                closeMobileMenu();
            }
        });
    });

    // -------- CLOSE MENU ON OUTSIDE CLICK --------
    document.addEventListener("click", e => {
        const collapse = document.querySelector(".navbar-collapse");
        const toggler = document.querySelector(".navbar-toggler");

        if (
            collapse?.classList.contains("show") &&
            !collapse.contains(e.target) &&
            !toggler.contains(e.target)
        ) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        const collapse = document.querySelector(".navbar-collapse");
        if (collapse) {
            bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        }
    }
}

// ================= HEADER SCRIPT END =================

// ================= HEADER SCRIPT END =================





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















// contact Us form script start
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submitBtn = form.querySelector('.submit-btn');

// **IMPORTANT: Replace with your actual email address**
const YOUR_EMAIL = 'your-email@example.com';

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Show error
function showError(field, errorId) {
    const input = document.getElementById(field);
    const error = document.getElementById(errorId);
    input.classList.add('error');
    error.classList.add('show');
}

// Hide error
function hideError(field, errorId) {
    const input = document.getElementById(field);
    const error = document.getElementById(errorId);
    input.classList.remove('error');
    error.classList.remove('show');
}

// Real-time validation
document.getElementById('name').addEventListener('input', function () {
    if (validateName(this.value)) {
        hideError('name', 'nameError');
    }
});

document.getElementById('phone').addEventListener('input', function () {
    if (validatePhone(this.value)) {
        hideError('phone', 'phoneError');
    }
});

document.getElementById('email').addEventListener('input', function () {
    if (validateEmail(this.value)) {
        hideError('email', 'emailError');
    }
});

document.getElementById('message').addEventListener('input', function () {
    if (validateMessage(this.value)) {
        hideError('message', 'messageError');
    }
});

// Send email using FormSubmit.co
async function sendEmail(name, phone, email, message) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_subject', `New Contact Form Submission from ${name}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
        const response = await fetch("https://formsubmit.co/harmipagada4@gmail.com", {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        return response.ok;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}


// Form submission
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate all fields
    if (!validateName(name)) {
        showError('name', 'nameError');
        isValid = false;
    } else {
        hideError('name', 'nameError');
    }

    if (!validatePhone(phone)) {
        showError('phone', 'phoneError');
        isValid = false;
    } else {
        hideError('phone', 'phoneError');
    }

    if (!validateEmail(email)) {
        showError('email', 'emailError');
        isValid = false;
    } else {
        hideError('email', 'emailError');
    }

    if (!validateMessage(message)) {
        showError('message', 'messageError');
        isValid = false;
    } else {
        hideError('message', 'messageError');
    }

    // If form is valid
    if (isValid) {
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Send email
        const emailSent = await sendEmail(name, phone, email, message);

        if (emailSent) {
            // Show success message
            successMessage.classList.add('show');

            // Reset form
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        } else {
            alert('Failed to send message. Please try again.');
        }

        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// contact Us form script over

//cont6act us subscribe script start
function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    alert('Thank you for subscribing with: ' + input.value);
    input.value = '';
    return false;
}

//contact us subscribe script over