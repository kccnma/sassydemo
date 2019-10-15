document.addEventListener("DOMContentLoaded", function() {
  // OVERLAY NAV
  var mymenubutton = document.querySelector(".menu-button");
  var mysitenav = document.querySelector(".site-nav");
  var mysitenavlinks = mysitenav.querySelectorAll("a");
  mymenubutton.onclick = function() {
    mysitenav.classList.toggle("active");
  };
  for (var i = 0, len = mysitenavlinks.length; i < len; i++) {
    mysitenavlinks[i].addEventListener("click", function() {
      mysitenav.classList.remove("active");
      console.log("huh");
    });
  }

  // REVEALER
  // reveal point from bottom and top of the window
  var revealerpoint = 50;
  window.addEventListener("scroll", reveal);
  reveal();

  function reveal() {
    var revealers = document.querySelectorAll(".revealer");
    for (var i = 0; i < revealers.length; i++) {
      var windowheight = window.innerHeight;
      var revealertop = revealers[i].getBoundingClientRect().top;
      var revealerbottom = revealers[i].getBoundingClientRect().bottom;
      if (revealertop < windowheight - revealerpoint) {
        revealers[i].classList.add("active");
      } else {
        revealers[i].classList.remove("active");
      }
      if (revealerbottom < 0 + revealerpoint) {
        revealers[i].classList.remove("active");
      }
    }
  }
});
