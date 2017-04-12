function checkDeath() {
    var blueLeft = $("#blue").offset().left;
    var redLeft = $("#red").offset().left;
    var blueTop = $("#blue").offset().top;
    var redTop = $("#red").offset().top;
    var blueRight = blueLeft + $("#blue").width();
    var redRight = redLeft + $("#red").width();
    var blueDown = blueTop + $("#blue").width();
    var redDown = redTop + $("#red").width();
    if(blueRight > redLeft && blueLeft < redRight && blueDown > redTop && blueTop < redDown){
        alert("Touching, you are now gone; press any arrow key to restart");
        $("#blue").hide();
    }
    else{
        $("#blue").show();
    }
    
}

$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 10);
    //moves right
    } else if (event.which === 39) {
        $("#blue").css("left", $("#blue").offset().left + 10);
    }
    else if(event.which === 38){
        $("#blue").css("top", $("#blue").offset().top - 10);
    }
    else if(event.which === 40){
        $("#blue").css("top", $("#blue").offset().top + 10);
    }
    
    else {
        return;
    }
    
        //Checks for position relative to each other
        checkCollision();
});
