// Gallery data with random fashion images
const galleryData = [
    {
        id: 1,
        title: 'Elegant Evening Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80'
    },
    {
        id: 2,
        title: 'Custom Tailored Suit',
        category: 'suits',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80'
    },
    {
        id: 3,
        title: 'Casual Summer Wear',
        category: 'casual',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'
    },
    {
        id: 4,
        title: 'Bridal Collection',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'
    },
    {
        id: 5,
        title: 'Business Attire',
        category: 'suits',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80'
    },
    {
        id: 6,
        title: 'Bohemian Style',
        category: 'casual',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80'
    },
    {
        id: 7,
        title: 'Cocktail Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80'
    },
    {
        id: 8,
        title: 'Classic Blazer',
        category: 'suits',
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80'
    },
    {
        id: 9,
        title: 'Street Style',
        category: 'casual',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80'
    },
    {
        id: 10,
        title: 'Formal Gown',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80'
    },
    {
        id: 11,
        title: 'Three-Piece Suit',
        category: 'suits',
        image: 'https://images.unsplash.com/photo-1617329002174-664b8616a8e8?w=600&q=80'
    },
    {
        id: 12,
        title: 'Denim Collection',
        category: 'casual',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80'
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMore');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const navbar = document.getElementById('navbar');

// State
let currentFilter = 'all';
let itemsToShow = 6;

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery filtering
function renderGallery(filter = 'all', itemsCount = 6) {
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    const itemsToRender = filteredData.slice(0, itemsCount);
    
    galleryGrid.innerHTML = '';
    
    itemsToRender.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${getCategoryName(item.category)}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });

    // Show/hide load more button
    if (filteredData.length <= itemsCount) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

function getCategoryName(category) {
    const categories = {
        'dresses': 'Evening & Formal Wear',
        'suits': 'Tailored Suits',
        'casual': 'Casual Collection'
    };
    return categories[category] || 'Custom Design';
}

// Filter button click handlers
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update filter and reset items count
        currentFilter = btn.getAttribute('data-filter');
        itemsToShow = 6;
        
        // Render gallery
        renderGallery(currentFilter, itemsToShow);
    });
});

// Load more button
loadMoreBtn.addEventListener('click', () => {
    itemsToShow += 6;
    renderGallery(currentFilter, itemsToShow);
});

// Initial gallery render
renderGallery();

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this to a server
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your inquiry! We will schedule a pickup and contact you shortly.');
    
    // Reset form
    contactForm.reset();
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .gallery-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Performance optimization: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Add to cart functionality (for future e-commerce integration)
function addToCart(itemId) {
    console.log('Item added to cart:', itemId);
    // Implement cart functionality here
}

// Search functionality (for future implementation)
function searchItems(query) {
    console.log('Searching for:', query);
    // Implement search functionality here
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lotus Fashion Designer Botique website loaded successfully');
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
