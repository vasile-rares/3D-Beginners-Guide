window.onload = function () {
    // Get the logo and logo-show elements
  const logo = document.querySelector('.logo');
  const logoShow = document.querySelector('.logo-show');

  // Function to show or hide the logo-show element
  function toggleLogoShow() {
    // Get the position of the logo element relative to the viewport
    const rect = logo.getBoundingClientRect();

    // Check whether the logo element is currently visible on the screen
    const isVisible = (rect.bottom >= 0 && rect.top <= window.innerHeight);

    // Show or hide the logo-show element based on the visibility of the logo element
    logoShow.style.opacity = isVisible ? '0' : '1';
  }

  // Call the toggleLogoShow function on page load and whenever the window is resized or scrolled
  window.addEventListener('load', toggleLogoShow);
  window.addEventListener('resize', toggleLogoShow);
  window.addEventListener('scroll', toggleLogoShow);

  const navigationBar = document.querySelector('.navbar');
  const scrollWatcher = document.createElement('div');

  scrollWatcher.setAttribute('data-scroll-watcher', '');
  navigationBar.before(scrollWatcher);

  const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    navigationBar.classList.toggle('sticking', !entries[0].isIntersecting)
  });

  navObserver.observe(scrollWatcher);
}