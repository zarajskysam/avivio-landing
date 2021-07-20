$(document).ready(function(){
    $('.burger').click(function(event) {
        $('.burger, .header_nav, .header').toggleClass('active');
    });
});