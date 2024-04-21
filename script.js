let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let currentScroll = window.scrollY || this.document.documentElement.scrollTop;

  if(currentScroll > lastScrollTop) {
    this.document.getElementById('header').classList.add('hidden');
  } else {
    this.document.getElementById('header').classList.remove('hidden')
  }

  lastScrollTop = currentScroll;

});