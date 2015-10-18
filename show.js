/**
 * Created by Amoon on 2015/10/18 018.
 */
function birdMoveDown(moveTop, time){
    $('#bird').animate({top:moveTop},time,"easeInExpo");
}

function birdMoveTop(moveTop, time){
    $('#bird').animate({top:moveTop},time,"easeOutExpo", function () {
        console.log($('#bird').css('top'));
        fallStart();
    });
}