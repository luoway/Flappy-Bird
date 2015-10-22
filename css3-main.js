/**
 * Created by Amoon on 2015/10/22.
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
        if(keyDown){}else{
            keyDown = true;
            if(event.keyCode===32){
                event.preventDefault();
                fly();
            }
        }
    });
    $(document).on('keyup',function () {
        keyDown = false;
    });

    document.addEventListener("touchstart", fly);
}

function init(){
    n=0;t=1200;score=0;i=0;
    updateScore(score);

    clearInterval(time1);
    clearInterval(time2);

    $('.block').remove();
    bird.remove();
    container.append($('<div id="bird"></div>').css({
        'top':'45%'
    }));
    bird = $('#bird');

    time1 = setInterval(function () {
        keepRunning();
    },50);
    time2 = setInterval(function () {
        generateBlock(n++);
    },t--);
}

function generateBlock(i){
    container.append('<div class="block block'+i+'">' +
    '<div class="top"></div><div class="bottom"></div></div>');
    var randWay = containerHeight/10 + parseInt(Math.random()*containerHeight/2);
    $('.block'+i+' .top').css('height',randWay+'px');
    $('.block'+i+' .bottom').css('height',containerHeight-randWay-containerHeight*0.3 +'px');
    setTimeout(function () {
        blockMove(i,1000,5000);
    },100);
}

function isGameover(){
    if(noBlock(i) && parseInt(bird.css('top')) < containerHeight){
        return false;
    }else{
        clearInterval(time1);
        clearInterval(time2);

        $(document).off('keydown');
        $(document).off('keyup');
        document.removeEventListener('touchstart',fly);
        pause();

        GameOver();
        return false;
    }
}

function GameOver(){
    if(confirm("Game Over!\n是否开始新的游戏？")){
        newGame();
    }
}

function keepRunning(){
    isGameover();
    if(parseInt($('.block'+score).css('right'))>containerWidth-100){
        score++;
        updateScore(score);
    }
    if(parseInt($('#bird').css('top'))<=0){
        fallStart()
    }
}
