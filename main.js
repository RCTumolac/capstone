$(document).ready(function(){
    $("body").keydown(function(event) {
         var xoffset = $("#player").offset().left - $("#ship").offset().left;
        if (event.which === 37) {
           $("#player").css("left", xoffset - 15);
        } 

        if (event.which === 39) {
           $("#player").css("left", xoffset + 15);
        } 

    });
});

