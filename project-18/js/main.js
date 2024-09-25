
let bgColor = [ "#fd7e14", "#198754" , "yalow" , "#6f42c1" ]

for ( let i = 0 ; i < bgColor.length ; i++ ){
    $(".color-option li").eq(i).css("backgroundColor",bgColor[i]) 

}


$(".color-option li").click(function(){

let currentBg = $(this).css("backgroundColor")

$(".chang").css("color",currentBg)
$(".changBg").css("backgroundColor",currentBg)

})

$(".color-box i").click(function(){

let optionWidth =  $(".color-option").outerWidth();

if($(".color-box").css("left")=="0px"){

    $(".color-box").animate({"left":-optionWidth},1000)


}else{

    $(".color-box").animate({"left": 0 },1000)


}


})

let servicesScroll = $("#services").offset().top

$(window).scroll(function(){

let sclolling = $(window).scrollTop()
if(sclolling>servicesScroll){

$("header").css({"background-color":"rgba(0,0,0,0.6)","transition":"all 1s"})
$("#topBtn").fadeIn(1000)

}else{

    $("header").css({"background-color":"#f0f0f0","transition":"all 1s"})
    $("#topBtn").fadeOut(1000)


}
})

$("#topBtn").click(function(){

    $("body,html").animate({scrollTop:0},100)


})


$(".navigation a").click(function(){

let attLink = $(this).attr("href");
let hrefTop = $(attLink).offset().top;
$("body").animate({scrollTop:hrefTop},1000)

})

$(document).ready(function(){

$(".loading").fadeOut(2000,function(){

$("body").css("overflow","auto")

})

})