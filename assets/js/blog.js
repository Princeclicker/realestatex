
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

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Category Filtering
const categoryItems = document.querySelectorAll('.category-item');
const blogCards = document.querySelectorAll('.blog-card');
const categoryFilter = document.getElementById('categoryFilter');

// Category buttons click event
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        categoryItems.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get category value
        const category = item.getAttribute('data-category');
        
        // Update the dropdown to match the clicked category
        categoryFilter.value = category;
        
        // Filter blog cards
        filterBlogCards(category);
    });
});

// Category dropdown change event
categoryFilter.addEventListener('change', () => {
    const category = categoryFilter.value;
    
    // Update the category buttons to match the selected category
    categoryItems.forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Filter blog cards
    filterBlogCards(category);
});

// Function to filter blog cards
function filterBlogCards(category) {
    blogCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // If search is empty, revert to category filtering
        const activeCategory = document.querySelector('.category-item.active').getAttribute('data-category');
        filterBlogCards(activeCategory);
        return;
    }
    
    // Filter based on search term
    blogCards.forEach(card => {
        const title = card.querySelector('.blog-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-card-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Sort functionality
const sortFilter = document.getElementById('sortFilter');

sortFilter.addEventListener('change', () => {
    const sortValue = sortFilter.value;
    const blogGrid = document.getElementById('blogGrid');
    const cardsArray = Array.from(blogCards);
    
    if (sortValue === 'latest') {
        // Sort by latest (newest first)
        cardsArray.sort((a, b) => {
            const dateA = new Date(a.querySelector('.blog-card-date').textContent);
            const dateB = new Date(b.querySelector('.blog-card-date').textContent);
            return dateB - dateA;
        });
    } else if (sortValue === 'oldest') {
        // Sort by oldest (oldest first)
        cardsArray.sort((a, b) => {
            const dateA = new Date(a.querySelector('.blog-card-date').textContent);
            const dateB = new Date(b.querySelector('.blog-card-date').textContent);
            return dateA - dateB;
        });
    } else if (sortValue === 'popular') {
        // For demo purposes, we'll just randomize the order
        // In a real application, this would sort by view count or engagement metrics
        cardsArray.sort(() => Math.random() - 0.5);
    }
    
    // Clear the grid
    blogGrid.innerHTML = '';
    
    // Append sorted cards
    cardsArray.forEach(card => {
        blogGrid.appendChild(card);
    });
    
    // Reapply any active filters
    const activeCategory = document.querySelector('.category-item.active').getAttribute('data-category');
    if (activeCategory !== 'all') {
        filterBlogCards(activeCategory);
    }
});

// Pagination (for demo purposes)
const pageItems = document.querySelectorAll('.page-item');

pageItems.forEach(item => {
    if (!item.classList.contains('disabled')) {
        item.addEventListener('click', () => {
            // Remove active class from all page items
            pageItems.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked page item
            item.classList.add('active');
            
            // In a real application, this would load the next page of blog posts
            // For demo purposes, we'll just scroll to the top of the blog grid
            document.querySelector('.blog-grid-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
