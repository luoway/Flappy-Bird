/**
 * Created by Amoon on 2015/10/18 018.
 */
var deviceHeight = $(window).height(),
    deviceWidth = $(window).width(),
    container = $("#container"),
    containerHeight = container.height(),
    containerWidth = container.width(),
    score = 0, n= 0, t=1200, keyDown = false;
var bird = $('#bird'),time1,time2;

$(document).ready(function () {

});

function newGame(){
    n=0;
    $('.block').remove();
    bird.stop(true,false);
    bird.css({
        'top':'48%'
    });
    clearInterval(time1);
    clearInterval(time2);
    time1 = setInterval(function () {
        if(n<5){
            //console.log(noBlock(0));
        }else{
            //console.log(noBlock(1));
        }
        //isGameover();
    },50);
    time2 = setInterval(function () {
        generateBlock(n++);
    },t--);
    fallStart();
}

function generateBlock(i){
    container.append('<div class="block block'+i+'">' +
    '<div class="top"></div><div class="bottom"></div>' +
    '</div>');
    var randWay = 30 + parseInt(Math.random()*200);
    $('.block'+i+' .top').css('height',randWay+'px');
    $('.block'+i+' .bottom').css('height',360-randWay-100 +'px');
    getBlockByNumber(i).animate({right:'1100px'},4.5*t,'linear',function () {
        $(this).remove();
    });
}

function isGameover(){
    if(noBlock(0) && parseInt(bird.css('top')) < 360){
        return false;
    }else{
        return GameOver();
    }
}

function GameOver(){
    alert("Game Over!")
}

$(document).keydown(function (event) {
    event.preventDefault();
    if(keyDown){}else{
        keyDown = true;
        console.log(keyDown);
        if(event.keyCode===32){
            bird.stop(false,false);
            setTimeout(function () {
                fly();
            },100);
        }
    }
});
$(document).keyup(function () {
    keyDown = false;
    console.log(keyDown);
});