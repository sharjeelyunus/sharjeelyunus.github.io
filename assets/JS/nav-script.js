jQuery(document).ready(function(){
  jQuery('.mobile-view').click(function () {
    jQuery('.desktop-view').toggleClass('expand');
  });
});

jQuery(document).ready(function(){
  jQuery('.cross').click(function () {
    jQuery('.desktop-view').toggleClass('expand');
  });
});

function displayCross() {
  document.getElementById("cross").style.display = "block";
  document.getElementById("cross").style.float = "right";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}