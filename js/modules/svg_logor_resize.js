const svg = document.querySelector('.logo__icon');

function resizeSVG() {
  if (window.innerWidth <= 767) {
    svg.setAttribute('width', '5rem');
    svg.setAttribute('height', '4.7rem');
  } else {
    svg.setAttribute('width', '7.6rem');
    svg.setAttribute('height', '6.8rem');
  }
}

export default resizeSVG;


