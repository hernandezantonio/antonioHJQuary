/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//this is all the stuff i got from the videos these deals with every cool thing 
//on the home page. 
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
    $('#superHumans').css('width', '400px');
    $('h3').css('background', 'red');
});

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//functions 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

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
    $("p").html("i <3 nadeshot");
}
//this code makes it so that when i click on the header on my page every text turns 
//into what i wrote down down there 
    
function mouseClick (){
    
    $("p").html("YOU ARE IN THE MIDDLE OF A DDOS ");
}

function addAPara() {
    $('#randPara').append('Aye Defy');
} 