$(document).ready(function(){
    $(".strona").click(function(){
        $(".strona").animate().css({
           'background-color': 'blue'
        });
    });
    $(".strona").dblclick(function(){
        $(".strona").animate().css({
           'background-color': 'yellow'
        });
    });
});