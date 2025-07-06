document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (testimonialSlider && testimonialItems.length > 0 && prevButton && nextButton) {
        let currentIndex = 0;
        
        // Set initial position
        updateSliderPosition();
        
        // Previous button click
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
            updateSliderPosition();
        });
        
        // Next button click
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonialItems.length;
            updateSliderPosition();
        });
        
        // Auto slide every 5 seconds
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonialItems.length;
            updateSliderPosition();
        }, 5000);
        
        // Update slider position
        function updateSliderPosition() {
            testimonialItems.forEach((item, index) => {
                if (index === currentIndex) {
                    item.style.transform = 'translateX(0)';
                } else if (index < currentIndex) {
                    item.style.transform = 'translateX(-100%)';
                } else {
                    item.style.transform = 'translateX(100%)';
                }
            });
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission Handling
    const bookingForm = document.getElementById('serviceBookingForm');
    const contactForm = document.getElementById('contactForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            
            alert('Booking berhasil! Kami akan menghubungi Anda segera untuk konfirmasi.');
            bookingForm.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            
            alert('Pesan Anda telah terkirim! Kami akan merespons segera.');
            contactForm.reset();
        });
    }
    
    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the subscription to a server
            // For demonstration, we'll just show a success message
            
            alert('Terima kasih telah berlangganan newsletter kami!');
            newsletterForm.reset();
        });
    }
    
    // Add active class to nav menu based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavMenu() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && navLink) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavMenu);
    highlightNavMenu(); // Call once on page load
});