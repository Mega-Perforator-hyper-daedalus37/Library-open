document.querySelectorAll('.header-list-element').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});