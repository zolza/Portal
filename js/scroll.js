$(document).ready(function(){
  $(".menu li").on('click', function(event) {
    event.preventDefault();
    var element = $(event.target).attr('data-target');

    $('html, body').animate({
        scrollTop: $(element).offset().top -100
    }, 1000);
  });
});
