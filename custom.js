$(document).ready(function(){

    $('#on').click(function(){
        $(".bulb").addClass('current');
    })
    $('#off').click(function(){
        $('.bulb').removeClass('current');
    })

    $('.menu').click(function() {
        $(this).toggleClass('clicked');
    })


})