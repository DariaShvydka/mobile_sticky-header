
window.onscroll = function() {
  var fixedTop = document.getElementById('main-nav'); 
    if (window.pageYOffset > 110) {
        fixedTop.classList.add('fixed-nav', 'animated', 'fadeInDown');
      } else {
        fixedTop.classList.remove('fixed-nav', 'animated', 'fadeInDown');
      }
    };