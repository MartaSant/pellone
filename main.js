/**
 * main.js - Main JavaScript for Pizzeria Website
 * 
 * Handles:
 * - Burger menu toggle (mobile navigation)
 * - Body scroll lock when menu is open
 * - Language dropdown toggle
 * - Footer year update
 * 
 * Note: i18n functionality is handled in assets/js/i18n.js
 */

/**
 * Initialize burger menu functionality
 */
function initBurgerMenu() {
    const burgerButton = document.querySelector('.burger-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.body;
    
    if (!burgerButton || !mobileMenu) {
        return;
    }
    
    burgerButton.addEventListener('click', () => {
        const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true';
        
        // Toggle aria attributes
        burgerButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.setAttribute('aria-hidden', isExpanded);
        
        // Toggle menu visibility and body scroll lock
        if (!isExpanded) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerButton.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside (optional enhancement)
    document.addEventListener('click', (e) => {
        if (mobileMenu.getAttribute('aria-hidden') === 'false') {
            if (!mobileMenu.contains(e.target) && !burgerButton.contains(e.target)) {
                burgerButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                body.classList.remove('menu-open');
            }
        }
    });
}

/**
 * Initialize language dropdown functionality
 */
function initLanguageDropdown() {
    const switchers = document.querySelectorAll('.language-switcher');
    
    switchers.forEach(switcher => {
        const toggle = switcher.querySelector('.language-switcher__toggle');
        const menu = switcher.querySelector('.language-switcher__menu');
        
        if (!toggle || !menu) return;
        
        function closeMenu() {
            switcher.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
        
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = switcher.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!switcher.contains(event.target)) {
                closeMenu();
            }
        });
        
        // Close dropdown on Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && switcher.classList.contains('is-open')) {
                closeMenu();
                toggle.focus();
            }
        });
    });
}

/**
 * Update footer year
 */
function updateFooterYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Initialize bottom bar hide on scroll (mobile only)
 */
function initBottomBarScroll() {
    const bottomBar = document.querySelector('.bottom-bar');
    if (!bottomBar) {
        return;
    }

    let scrollTimeout;
    let lastScrollTop = 0;
    let isScrolling = false;
    let isTouchingBar = false;
    const scrollThreshold = 5; // Minimum scroll distance to trigger hide

    function handleScroll() {
        // Only hide on mobile
        if (window.innerWidth > 767) {
            return;
        }

        // Don't hide if user is touching the bar
        if (isTouchingBar) {
            return;
        }

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);

        if (scrollDelta > scrollThreshold) {
            if (!isScrolling) {
                isScrolling = true;
                bottomBar.classList.add('bottom-bar--hidden');
            }

            // Clear existing timeout
            clearTimeout(scrollTimeout);

            // Show bar again after scroll stops
            scrollTimeout = setTimeout(() => {
                bottomBar.classList.remove('bottom-bar--hidden');
                isScrolling = false;
            }, 1000); // Show after 1 second of no scrolling
        }

        lastScrollTop = currentScrollTop;
    }

    // Prevent hiding when touching the bottom bar
    bottomBar.addEventListener('touchstart', (e) => {
        isTouchingBar = true;
        bottomBar.classList.remove('bottom-bar--hidden');
        clearTimeout(scrollTimeout);
    }, { passive: true });

    bottomBar.addEventListener('touchend', () => {
        // Small delay to allow click events to fire
        setTimeout(() => {
            isTouchingBar = false;
        }, 100);
    }, { passive: true });

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    initBurgerMenu();
    initLanguageDropdown();
    updateFooterYear();
    initBottomBarScroll();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

