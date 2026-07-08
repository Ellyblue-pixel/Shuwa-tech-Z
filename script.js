


document.addEventListener('DOMContentLoaded', () => {
  
  // 1. MENU TOGGLE FUNCTION
  const menuBtn = document.querySelector('.menu-icon');
  const menuBox = document.getElementById('menuBox');

  if (menuBtn && menuBox) {
    menuBtn.addEventListener('click', () => {
      menuBox.classList.toggle('active');
    });
  }

  // 2. CARD SLIDER FUNCTION
  const cards = document.querySelectorAll('.card');
  let currentCardIndex = 0;

  if (cards.length > 0) {
    // Show first card
    cards[currentCardIndex].classList.add('active');

    // Loop every 5 seconds
    setInterval(() => {
      cards[currentCardIndex].classList.remove('active');
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      cards[currentCardIndex].classList.add('active');
    }, 5000);
  }

});
