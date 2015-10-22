/**
 * Created by Amoon on 2015/10/22.
 */
function setTransition(element, time ,timing){
    element.css({
        '-webkit-transition':'all '+time+'ms '+timing,
        '-moz-transition':'all '+time+'ms '+timing,
        '-o-transition':'all '+time+'ms '+timing,
        'transition':'all '+time+'ms '+timing
    })
}

function birdMoveDown(moveTop, time){
    var timing = 'cubic-bezier(0.6, 0.2, 1, 0.5)';
    setTransition(bird, time, timing);
    bird.css({
        'top':moveTop+'px'
    });
}

function birdMoveTop(moveTop, time){
    var timing ='cubic-bezier(0.19, 0.6, 0.22, 1)';
    setTransition(bird, time, timing);
    bird.css({
        'top':moveTop+'px'
    }).one("webkitTransitionEnd otransitionend transitionend",function(){
        fallStart();
    })
}

function blockMove(blockNumber, moveLeft, time){
    var block = getBlockByNumber(blockNumber),
        timing = 'linear';
    setTransition(block, time, timing);
    block.css({
        'right':moveLeft+'px'
    }).one("webkitTransitionEnd otransitionend transitionend",function(){
        $(this).remove();
    });
}

function updateScore( score ){
    $('#score').text( score );
}

function pause(){
    setTransition(bird,0,'');
    setTransition($('.block'),0,'');
    $('.block').map(function () {
        $(this).css('right',$(this).css('right'));
    });
    bird.css('top',$('#bird').css('top'));
}