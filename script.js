$(document).ready(() => {
  function hidePreloader() {
    var preloader = $(".preloader");
    preloader.fadeOut(2000);
  }

  hidePreloader();
  setTimeout(function () {
    new WOW().init();
    $("#main").css("display", "block");
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });
  }, 1000);
  
});
