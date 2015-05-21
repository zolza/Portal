$(document).ready(function(){
  $(".menu li").on('click', function(event) {
    event.preventDefault(); //preventDefault blokuje domyślne zachowanie przeglądaki, mam tutaj linki
    var element = $(event.target).attr('data-target');

    $('html, body').animate({
        scrollTop: $(element).offset().top -100
    }, 1000); //czas animacji
  });
});
//to jest fragment kodu odpowiedzialny za "kotwicę" na stronie, włącznie z atrybutem "data target"
