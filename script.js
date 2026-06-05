// Anime cards animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.border = '2px solid #e94560';
    });
});

// Button click effect
const btn = document.querySelector('.hero button');

btn.addEventListener('click', () => {
    alert('🎌 Welcome to Anime World!');
});

// Scroll animation
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
