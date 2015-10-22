/**
 * Created by Amoon on 2015/10/22.
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

function noBlock(){
    var nowBlock = $(".block"+i);
    if(nowBlock){
        var nowBlockLeft = containerWidth -100 - parseInt(nowBlock.css("right"));
    }else{return true}
    if(nowBlockLeft>=0 && nowBlockLeft<=135){
        var topFix = 3;
        if(nowBlockLeft<20 || nowBlockLeft>115){
            topFix = 20;
        }
        var topTop = parseInt(nowBlock.children(".top").css("height"))-topFix,
            bottomTop = topTop + 0.3*containerHeight + 2*topFix -30,
            birdTop = parseInt($('#bird').css("top"));
        return (topTop<birdTop && birdTop<bottomTop);
    }else if(nowBlockLeft<0){
        i++;
        noBlock();
    }
    return true;
}

function fallStart(){
    var moveTop=parseInt($('#bird').css("top"))+containerHeight;
    birdMoveDown(moveTop, 800);

}

function fly(){
    var moveTop=parseInt($('#bird').css("top"))-0.15*containerHeight;
    birdMoveTop(moveTop,300);
}