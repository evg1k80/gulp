window.addEventListener('scroll', headerScroll);
function headerScroll() {
  let currentScroll = scrollY;
  const header = document.querySelector('header.header');
  if (header !== null) {
    if (currentScroll > 10) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }
}

