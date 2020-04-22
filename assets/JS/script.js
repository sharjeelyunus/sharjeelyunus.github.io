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

function myFunction() {
  document.getElementById("burger").style.display = "none";
  document.getElementById("cross").style.display = "block";
  document.getElementById("cross").style.float = "right";
}