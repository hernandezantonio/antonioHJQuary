/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".defy").css("background-color", "green"); 
    $("p").css("color", "black");
    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("h1").bind("click", mouseClick);   
    $('#replaceWText').bind('click', replaceWText);
    $('#addPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);   
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click', showThePage);
    $('#superHumans').accordion({header: "h3"});
    $('#superHumans').css('width', '400px')
    $('h3').css('background', 'red');
});



function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);

}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe (){
    $("h1").html("you aint bout that life hamie- mlk");
}

function mouseOverMe (){
    $("h1").html("i <3 nadeshot");
}

function mouseClick (){
    
    $("p").html("YOU ARE IN THE MIDDLE OF A DDOS ")
}

function addAPara() {
    $('#randPara').append('Aye Defy');
}