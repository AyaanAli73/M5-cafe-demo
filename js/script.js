// Loader
window.onload = () => {
    setTimeout(() => { 
        document.getElementById('loader').style.opacity = '0'; 
        setTimeout(() => { 
            document.getElementById('loader').style.display = 'none'; 
        }, 500); 
    }, 800);
}

 // Typewriter
        const words = ["Comfort", "Tradition", "Magic"];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        const typeTarget = document.getElementById('typewriter-text');
        
        function type() {
            const currentWord = words[wordIndex];
            typeTarget.innerText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
            if (!isDeleting && charIndex === currentWord.length) { isDeleting = true; setTimeout(type, 2000); }
            else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; setTimeout(type, 500); }
            else { setTimeout(type, isDeleting ? 100 : 200); }
        }
        type();

        // Mobile Menu
        const menuBtn = document.getElementById('hamburger-btn');
        const closeMenu = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() { mobileMenu.classList.toggle('translate-x-full'); document.body.classList.toggle('overflow-hidden'); }
        menuBtn.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        links.forEach(l => l.addEventListener('click', toggleMenu));

        // Filtering Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const menuItems = document.querySelectorAll('.menu-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-sage-900', 'text-white', 'shadow-md');
                    b.classList.add('text-sage-500', 'hover:text-sage-900', 'hover:bg-white');
                });
                btn.classList.remove('text-sage-500', 'hover:text-sage-900', 'hover:bg-white');
                btn.classList.add('bg-sage-900', 'text-white', 'shadow-md');

                const filter = btn.getAttribute('data-filter');
                menuItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.classList.remove('hidden-item');
                        // Simple re-trigger
                        item.style.animation = 'none';
                        item.offsetHeight; 
                        item.style.animation = null; 
                    } else {
                        item.classList.add('hidden-item');
                    }
                });
            });
        });

        // Scroll Reveal Observer (CSS Based)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
