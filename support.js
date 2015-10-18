/**
 * Created by Amoon on 2015/10/18 018.
 */
function getBlockByNumber(i){
    return $('.block'+i);
}


/*
    第i个障碍距离左边nowBlockLeft
    nowBlockLeft<=0 与bird在x轴无重叠，换后一个
    0<=nowBlockLeft<=130 与bird在x轴有重叠
    nowBlockLeft>130 与bird在x轴无重叠，即将重叠
*/

function noBlock(i){
    var nowBlock = $($(".block")[i]);
    if(nowBlock){
        var nowBlockLeft = containerWidth -100 - parseInt(nowBlock.css("right"));
    }
    if(nowBlockLeft>=0 && nowBlockLeft<=130){
        var topTop = parseInt(nowBlock.children(".top").css("height")),
            bottomTop = topTop + 100,
            birdTop = parseInt(bird.css("top"));
        return topTop<birdTop && birdTop<bottomTop;
    }else if(nowBlockLeft<0){
        noBlock(++i);
    }
    return true;
}

function fallStart(){
    var moveTop=parseInt($('#bird').css("top"))+containerHeight+"px";
    birdMoveDown(moveTop, 900);

}

function fly(){
    var moveTop=parseInt($('#bird').css("top"))-50+"px";
    birdMoveTop(moveTop,200);
}

jQuery.extend( jQuery.easing,//change from 10 to 7
    {
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 6 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -6 * t/d) + 1) + b;
        }
    });
