// Gallery data with women's fashion and girls' dresses
const galleryData = [
    // Kurtas
    {
        id: 1,
        title: 'Elegant Silk Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80'
    },
    {
        id: 2,
        title: 'Designer Anarkali Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=600&q=80'
    },
    {
        id: 3,
        title: 'Printed Cotton Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80'
    },
    {
        id: 4,
        title: 'Festive Embroidered Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80'
    },
    {
        id: 5,
        title: 'Long Kurti Design',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80'
    },
    {
        id: 6,
        title: 'Modern Kurta Set',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1610652490170-3180c4e302bb?w=600&q=80'
    },
    {
        id: 7,
        title: 'Traditional Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e46f5?w=600&q=80'
    },
    {
        id: 8,
        title: 'Party Wear Kurta',
        category: 'kurtas',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80'
    },
    
    // Blouses
    {
        id: 9,
        title: 'Designer Back Neck Blouse',
        category: 'blouses',
        image: 'https://stylesatlife.com/wp-content/uploads/2023/03/rashmika-mandanna-blouse-back-neck.jpg'
    },
    {
        id: 10,
        title: 'Embroidered Silk Blouse',
        category: 'blouses',
        image: "https://threadslabel.com/cdn/shop/files/5ae63cf6-c258-4dd2-baf6-c997bec974b5.jpg?v=1760091963"
    },
    {
        id: 11,
        title: 'Mirror Work Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1610022430670-80e0e2e7d7b5?w=600&q=80'
    },
    {
        id: 12,
        title: 'Traditional Gold Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1617127365758-c9d2c0f8b5c5?w=600&q=80'
    },
    {
        id: 13,
        title: 'Bridal Blouse Design',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=600&q=80'
    },
    {
        id: 14,
        title: 'Sequin Work Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1610022430945-dc3e9f7b8a71?w=600&q=80'
    },
    {
        id: 15,
        title: 'Cut Work Blouse Pattern',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80'
    },
    {
        id: 16,
        title: 'Designer Saree Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1583391733982-9b09f5e4a0a1?w=600&q=80'
    },
    {
        id: 17,
        title: 'Fancy Back Design Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1610022430670-80e0e2e7d7b6?w=600&q=80'
    },
    {
        id: 18,
        title: 'Party Wear Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80'
    },
    {
        id: 19,
        title: 'Maggam Work Blouse',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1617127365811-0b8c16d9c4f3?w=600&q=80'
    },
    {
        id: 20,
        title: 'Contemporary Blouse Style',
        category: 'blouses',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80'
    },
    
    // Lehangas
    {
        id: 21,
        title: 'Bridal Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80'
    },
    {
        id: 22,
        title: 'Designer Lehanga Choli',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1583391733981-2b69fcabd14e?w=600&q=80'
    },
    {
        id: 23,
        title: 'Wedding Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1595777216082-7f5d4d3e4e0e?w=600&q=80'
    },
    {
        id: 24,
        title: 'Party Wear Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1617127365811-0b8c16d9c4f3?w=600&q=80'
    },
    {
        id: 25,
        title: 'Silk Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1610652488869-4c36b6d926cc?w=600&q=80'
    },
    {
        id: 26,
        title: 'Embroidered Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=600&q=80'
    },
    {
        id: 27,
        title: 'Festive Lehanga Collection',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1610652491483-1c7c0a2a7a4e?w=600&q=80'
    },
    {
        id: 28,
        title: 'Traditional Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80'
    },
    {
        id: 29,
        title: 'Modern Lehanga Design',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1617127365758-c9d2c0f8b5c5?w=600&q=80'
    },
    {
        id: 30,
        title: 'Royal Lehanga',
        category: 'lehangas',
        image: 'https://images.unsplash.com/photo-1583391733982-9b09f5e4a0a1?w=600&q=80'
    },
    
    // Dresses (Girls)
    {
        id: 31,
        title: 'Princess Party Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80'
    },
    {
        id: 32,
        title: 'Cute Frock Design',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1503944168849-5c0a5d35f0fa?w=600&q=80'
    },
    {
        id: 33,
        title: 'Birthday Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&q=80'
    },
    {
        id: 34,
        title: 'Flower Girl Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1566452929581-7c3b3f189c40?w=600&q=80'
    },
    {
        id: 35,
        title: 'Summer Frock',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80'
    },
    {
        id: 36,
        title: 'Festive Kids Wear',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80'
    },
    {
        id: 37,
        title: 'Designer Baby Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80'
    },
    {
        id: 38,
        title: 'Traditional Kids Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1503944168849-5c0a5d35f0fa?w=600&q=80'
    },
    {
        id: 39,
        title: 'Elegant Girl Dress',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&q=80'
    },
    {
        id: 40,
        title: 'Party Wear for Girls',
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1566452929581-7c3b3f189c40?w=600&q=80'
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
        'kurtas': 'Designer Kurtas',
        'blouses': 'Custom Blouses',
        'lehangas': 'Bridal & Party Lehangas',
        'dresses': 'Girls Special'
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
