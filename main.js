/* global $ */

//Moving the Ship
//-----------------------------------------------------------------------------------
$(document).ready(function(){
    $("body").keydown(function(event) {
        if (event.which === 37) {
            var x = $("#player").offset();
            console.log($("#player").offset());
            console.log(x.left);
            $("#player").css("left", ($("#player").offset().left - 10) - x.left);
            
        } else if (event.which === 39) {
            var x = $("#player").offset();
            console.log($("#player").offset());
            console.log(x.left);
           $("#player").css("left", ($("#player").offset().left + 10) + x.left);
        } 
        else if(event.which === 38){
            $("#player").css("top", $("#player").offset().top - 10);
        }
        else if(event.which === 40){
            $("#player").css("top", $("#player").offset().top + 10);
        }
        else{
            return;
        }
    });
});
//-----------------------------------------------------------------------------------
