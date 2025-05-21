
// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        mobileToggle.innerHTML = '✕';
    } else {
        mobileToggle.innerHTML = '☰';
    }
});

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-link, .nav-cta');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '☰';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Load More Properties
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenProperties = document.querySelectorAll('.hidden-property');

loadMoreBtn.addEventListener('click', () => {
    hiddenProperties.forEach(property => {
        property.style.display = 'block';
    });
    loadMoreBtn.style.display = 'none';
    
    // Update property count
    const visibleProperties = document.querySelectorAll('.property-card:not([style*="display: none"])');
    document.getElementById('propertyCount').textContent = visibleProperties.length;
});

// Filter Properties
const filterForm = document.getElementById('filterForm');
const propertyCards = document.querySelectorAll('.property-card');
const noResults = document.getElementById('noResults');
const resetFiltersBtn = document.getElementById('resetFilters');

filterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const propertyType = document.getElementById('propertyType').value;
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('priceRange').value;
    const bedrooms = document.getElementById('bedrooms').value;
    
    let visibleCount = 0;
    
    propertyCards.forEach(card => {
        // Show all cards first
        card.style.display = 'block';
        
        // Apply filters
        if (propertyType && card.dataset.type !== propertyType) {
            card.style.display = 'none';
        }
        
        if (location && card.dataset.location !== location) {
            card.style.display = 'none';
        }
        
        if (priceRange) {
            const price = parseInt(card.dataset.price);
            const [min, max] = priceRange.split('-');
            
            if (min && max && (price < parseInt(min) || price > parseInt(max))) {
                card.style.display = 'none';
            } else if (min && !max && priceRange.includes('+')) {
                if (price < parseInt(min)) {
                    card.style.display = 'none';
                }
            }
        }
        
        if (bedrooms && parseInt(card.dataset.bedrooms) < parseInt(bedrooms)) {
            card.style.display = 'none';
        }
        
        // Count visible properties
        if (card.style.display !== 'none') {
            visibleCount++;
        }
    });
    
    // Update property count
    document.getElementById('propertyCount').textContent = visibleCount;
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.style.display = 'block';
        loadMoreBtn.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        
        // Only show load more button if there are hidden properties
        const hiddenCount = document.querySelectorAll('.hidden-property:not([style*="display: none"])').length;
        loadMoreBtn.style.display = hiddenCount > 0 ? 'inline-block' : 'none';
    }
});

// Reset Filters
resetFiltersBtn.addEventListener('click', () => {
    filterForm.reset();
    
    propertyCards.forEach(card => {
        if (card.classList.contains('hidden-property')) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
    
    noResults.style.display = 'none';
    loadMoreBtn.style.display = 'inline-block';
    document.getElementById('propertyCount').textContent = document.querySelectorAll('.property-card:not(.hidden-property)').length;
});
