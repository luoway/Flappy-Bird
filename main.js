/**
 * Created by Amoon on 2015/10/18 018.
 */
var deviceHeight, deviceWidth, container = $("#container"),
    containerHeight, containerWidth,
    score = 0, n, t, i=0, keyDown = false,
    bird = $('#bird'),time1,time2;

$(document).ready(function () {
    deviceHeight = $(window).height();
    deviceWidth = $(window).width();
    prepareForMobile();
    containerHeight = container.height();
    containerWidth = container.width();

});

function prepareForMobile(){
    if(deviceWidth<800){
        $('header').css({
            position:'absolute',
            backgroundColor:'transparent',
            zIndex:'2'
        });
        container.css('height',deviceHeight+'px');
    }
}

function newGame(){
    init();

    $(document).on('keydown',function (event) {
        event.preventDefault();
        if(keyDown){}else{
            keyDown = true;
            if(event.keyCode===32){
                bird.stop(false,false);
                fly();
            }
        }
    });
    $(document).on('keyup',function () {
        keyDown = false;
    });
}

function init(){
    n=0;t=1200;score=0;i=0;
    updateScore(score);
    $('.block').remove();
    bird.stop(true,false);
    bird.css({
        'top':'45%'
    });
    time1 = setInterval(function () {
        keepRunning();
    },50);
    time2 = setInterval(function () {
        generateBlock(n++);
    },t--);
    fallStart();
}

function generateBlock(i){
    container.append('<div class="block block'+i+'">' +
    '<div class="top"></div><div class="bottom"></div></div>');
    var randWay = containerHeight/10 + parseInt(Math.random()*containerHeight/2);
    $('.block'+i+' .top').css('height',randWay+'px');
    $('.block'+i+' .bottom').css('height',containerHeight-randWay-containerHeight*0.3 +'px');
    blockMove(i,1100,5000);
}

function isGameover(){
    if(noBlock(i) && parseInt(bird.css('top')) < containerHeight){
        return false;
    }else{
        clearInterval(time1);
        clearInterval(time2);
        bird.stop();
        $(".block").stop();

        $(document).off('keydown');
        $(document).off('keyup');
        GameOver();
        return false;
    }
}

function GameOver(){
    if(confirm("Game Over!")){
        newGame();
    }
}

function keepRunning(){
    isGameover();
    if(parseInt($('.block'+score).css('right'))>containerWidth-100){
        score++;
        updateScore(score);
    }
    if(parseInt($('#bird').css('top'))<=0){bird.stop();fallStart()}
}
