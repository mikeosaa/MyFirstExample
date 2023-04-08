const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.display = 'flex';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
  }
});

const image = document.querySelector('#animation-image');
window.addEventListener('scroll', () => {
  if (isInViewport(image)) {
    image.classList.add('show');
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
