$(document).ready(function(){
    $("body").keydown(function(event) {
         var xoffset = $("#player").offset().left - $("#ship").offset().left;
        if (event.which === 37) {
           
           $("#player").css("left", xoffset - 10);
        } 
        if(event.which === 38){
            console.log($("#player").offset().top);
            $("#player").css("top", $("#player").offset().top - 10);
        }
        if (event.which === 39) {
           $("#player").css("left", $("#player").offset().left + 10);
        } 
        if(event.which === 40){
            $("#player").css("top", $("#player").offset().top + 10);
        }
    });
});
