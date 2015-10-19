/**
 * Created by Amoon on 2015/10/18 018.
 */
function birdMoveDown(moveTop, time){
    $('#bird').animate({top:moveTop},time,"easeInExpo");
}

function birdMoveTop(moveTop, time){
    $('#bird').animate({top:moveTop},time,"easeOutExpo", function () {
        fallStart();
    });
}

function blockMove(blockNumber, moveLeft, time){
    getBlockByNumber(blockNumber).animate({right:moveLeft+'px'},time,"linear", function () {
        $(this).remove();
    })
}

function updateScore( score ){
    $('#score').text( score );
}