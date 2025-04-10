document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav');
    
    if (menuToggle && navMenu) {
        // Add initial state for mobile
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
        
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Toggle display directly for immediate feedback
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                navMenu.style.display = 'none';
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                navMenu.style.display = 'flex';
            } else {
                if (!navMenu.classList.contains('active')) {
                    navMenu.style.display = 'none';
                }
            }
        });
    }
}); 