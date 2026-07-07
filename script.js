
}
*
function toggleMenu() {
  document.getElementById('menuBox').classList.toggle('active');
}

let currentCard = 0;
const cards = document.querySelectorAll('.card');

function showNextCard() {
  cards[currentCard].classList.remove('active');
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add('active');
}

setInterval(showNextCard, 5000); // 5 seconds
