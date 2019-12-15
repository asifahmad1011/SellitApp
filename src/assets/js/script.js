


"use strict";
$(document).ready(function() {

  /*=====================
   01.Pre loader
   ==========================*/
  $('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
  });


  /*=====================
   02.Tap on Top
   ==========================*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
      $('.tap-top').fadeIn();
    } else {
      $('.tap-top').fadeOut();
    }
  });
  $('.tap-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  /*=====================
   03. toggle nav
   ==========================*/
  $('.toggle-nav').on('click', function() {
    $('.sm-horizontal').css("right", "0px");
  });
  $(".mobile-back").on('click', function() {
    $('.sm-horizontal').css("right", "-410px");
  });

});



function myFunction() {
  var x = localStorage.getItem("token");
  document.getElementById("sell_id").innerHTML = x;
}


      document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
