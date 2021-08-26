$(document).ready(function(){

//efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({ top:'0'}, 1000 + (index * 500));
    });


//SCROLL MENU
    var somos = $('#somos').offset().top,
        competiciones = $('#competiciones').offset().top,
        losequipos = $('#los-equipos').offset().top;
        registro = $('#registro').offset().top;


    $('#btn-somos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: somos
        }, 500);
    });

    $('#btn-competiciones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: competiciones
        }, 500);
    });

    $('#btn-los-equipos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: losequipos
        }, 500);
    });

    $('#btn-registro').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: registro
        }, 500);
    });
});