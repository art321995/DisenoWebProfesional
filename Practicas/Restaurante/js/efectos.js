$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    ///Scrol elementos Menu

    var  acercaDe = $('#acerca-de').offset().top,
         info = $('#info').offset().top,
         galeria = $('#galeria').offset().top,
         ubicacion = $('#ubicacion').offset().top;

    $('#btn-acercade').on('click', function(e){
        $('html, body').animate({
            scrollTop: 650
        }, 500);
    });
    $('#btn-info').on('click', function(e){
        $('html, body').animate({
            scrollTop: info
        }, 500);
    });
    $('#btn-galeria').on('click', function(e){
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btn-ubicacion').on('click', function(e){
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});