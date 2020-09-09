var body=document.getElementsByTagName("body")[0];game=document.createElement("div");body.appendChild(game);game.id="game";
//start div with button
start=document.createElement("div");  game.appendChild(start); start.id="start";
h1=document.createElement("h1");start.appendChild(h1);
h1.innerText="SHOT GAME";
play_btn=document.createElement("div"); start.appendChild(play_btn);play_btn.id="play_btn";play_btn.innerText="PLAY NOW";
play_btn.onclick=start_playing;

function start_playing() {

//play div
play=document.createElement("div");game.appendChild(play);play.id="play";
game_area=document.createElement("div");play.appendChild(game_area);game_area.id="game_area";game_area.style.height="500px";game_area.style.width="400px";game_area.style.overflow="hidden";
f16_area=document.createElement("div");game_area.appendChild(f16_area);f16_area.id="f16_area";f16_area.style.width="100%";f16_area.style.height="75px";

f16=document.createElement("div");game_area.appendChild(f16);f16.id="f16";f16.style.width="55px";f16.style.height="75px"; r=parseInt(f16.style.height)+25;
f16.style.left=parseInt(game_area.style.width)/2-parseInt(f16.style.width)/2+"px";f16.style.top=parseInt(game_area.style.height)-parseInt(f16.style.height)+"px";
f16_body=document.createElement("div");f16.appendChild(f16_body);f16_body.id="f16_body";//f16_body.innerHTML="&#9992;";

//start playing
function start_play() {start.remove(); go()}
start_play();
function go() {   

create_bricks();

    //make bricks

function create_bricks(){


    for (var i = 0; i <8 ; i++) {
    brick=document.createElement("div");
    game_area.appendChild(brick);
    brick.classList.add("brick"); brick.classList.add("absolute");brick.style.width="50px";brick.style.height="20px";brick.style.top="-20px";
    brick.style.left=i*50 +"px";  
    }

}



//move bricks down 

function move_down() { 
    var bricks= document.getElementsByClassName("brick");
        for (var i = 0; i <bricks.length ; i++) {bricks[i].style.top =parseInt(bricks[i].style.top)+10+"px";
    if (parseInt(bricks[bricks.length-1].style.top)>0) {create_bricks()} ;
    if (parseInt(bricks[0].style.top)>(parseInt(game_area.style.height)-r)) { play.remove(); game_end(); } 
}

}

  
        var t = 500; // Timer 

        var interval; 
  
  
        function changeTimer(){  t = t-(1/(t^2)); } 
        f1();

        function f1() { 
            clearInterval(interval); 
            move_down();
            changeTimer(); 
            interval = setInterval(f1, t); 
        } 





//events
var f16=document.getElementById("f16");

document.onkeydown = checkKey;
function checkKey(e) { var f16_position= parseInt(f16.style.left); 
    e = e || window.event;
    if      (e.keyCode == '37' && f16_position>10  ) {f16_position=f16_position-10;}
    else if (e.keyCode == '39' && f16_position<340) {f16_position=f16_position+10;}
    else if (e.keyCode == '32'){ create_shot() }
    f16.style.left=f16_position+"px";
}




function create_shot(){ 
    shot =document.createElement("div");
    game_area.appendChild(shot);
    shot.classList.add("absolute"); shot.classList.add("shot");
    shot.style.top=f16.style.top;shot.style.left=parseInt(f16.style.left)+parseInt(f16.style.width)/2-4+"px";
}










setInterval(shot_up, 100);
function shot_up() { if (typeof shot !== "undefined" ) { 
                        var  shots=document.getElementsByClassName("shot"); 
                       for (var i = 0; i < shots.length; i++) { 
                       shots[i].style.top =parseInt(shots[i].style.top)-10+"px";sht=parseInt(shots[i].style.top) ;shl=parseInt(shots[i].style.left) ;
                       var bricks=document.getElementsByClassName("brick");
                       for (var j = 0; j < bricks.length; j++) {
                           var bh1=parseInt(bricks[j].style.top);var bh2=bh1+parseInt(bricks[j].style.height);
                           var bl1=parseInt(bricks[j].style.left);var bl2=bl1+parseInt(bricks[j].style.width);
                           if ( sht>bh1 && sht<bh2 && shl>bl1 && shl<bl2) {shots[i].remove();   if (typeof bricks[j] !== "undefined" ) {    bricks[j].remove();}}
                           if ( sht<0 ) {  if (typeof shots[i] !== "undefined" ) {  shots[i].remove();} }

                       }


 }


}


}









}


function game_end(){


//game_over div
game_over=document.createElement("div");  game.appendChild(game_over);game_over.id="game_over";
h1=document.createElement("h1");game_over.appendChild(h1);
h1.innerText="GAME OVER";
play_again=document.createElement("div");game_over.appendChild(play_again); play_again.id="play_again";
play_again.innerText="PLAY AGAIN";
play_again.onclick=start_playing;


}
































}





/*


setInterval(shot_up, 100);
function shot_up() {   if (typeof line== "undefined" ) {  create_line();   }
                      if (typeof shot !== "undefined" ) {  
                       var shots=document.getElementsByClassName("shot"); 
                       for (var i = 0; i < shots.length; i++) { 
                        shots[i].style.top =parseInt(shots[i].style.top)-10+"px";sht=parseInt(shots[i].style.top) ;shl=parseInt(shots[i].style.left) ;
                        var lines=document.getElementsByClassName("line");
                        if (typeof lines !== "undefined" ) {  for (var j = 0; j < lines.length; j++) { 
                             var lh1=parseInt(lines[j].style.top);var lh2=lh1+parseInt(lines[j].style.height);
                             if ( sht>lh1 && sht<lh2 ) {
                                shots[i].remove(); lines[j].remove();

                         }  }


*/


























//game_area.style.overflow="hidden";

/*
play_btn.onclick=remove;
function remove() { this.parentElement.remove(); go();}



function go() {    

//make f16


create_line();
//make lines 


function create_line(){

    line=document.createElement("div");
    game_area.appendChild(line);
    line.classList.add("absolute"); line.classList.add("line");
    line.style.height="20px";line.style.width="100%"; line.style.top="-20px";


    relative_line=document.createElement("div");
    line.appendChild(relative_line);
    relative_line.classList.add("relative");
    relative_line.style.width="100%";relative_line.style.height="100%";


    //make bricks
    for (var i = 0; i <8 ; i++) {
    brick=document.createElement("span");
    relative_line.appendChild(brick);
    brick.classList.add("brick"); brick.classList.add("absolute");brick.style.width="50px";
    brick.style.left=i*50 +"px";  
    }

}


//move lines down 


function move_down() { 
    var lines= document.getElementsByClassName("line");
    for (var i = 0; i <lines.length ; i++) {lines[i].style.top =parseInt(lines[i].style.top)+1+"px";
    if (parseInt(lines[lines.length-1].style.top)>0) {create_line()} ;
    if (parseInt(lines[i].style.top)>parseInt(game_area.style.height)-25) { console.log("gfds")  } 
}
}

  
        var t = 50; // Timer 

        var interval; 
  
        f1(); 
  
        function changeTimer(){  t = t-(1/(t^2)); } 
  
        function f1() { 
            clearInterval(interval); 
            move_down();
            changeTimer(); 
            interval = setInterval(f1, t); 
        } 












//events

document.onkeydown = checkKey;
function checkKey(e) { var f16_position= parseInt(f16.style.left); 
    e = e || window.event;
    if      (e.keyCode == '37' && f16_position>10  ) {f16_position=f16_position-10;}
    else if (e.keyCode == '39' && f16_position<340) {f16_position=f16_position+10;}
    else if (e.keyCode == '32'){ create_shot() }
    f16.style.left=f16_position+"px";
}




function create_shot(){ 
    shot =document.createElement("div");
    game_area.appendChild(shot);
    shot.classList.add("absolute"); shot.classList.add("shot");
    shot.style.top=f16.style.top;shot.style.left=parseInt(f16.style.left)+parseInt(f16.style.width)/2-3+"px";
}



}




*/
































/*





//make f16
f16=document.createElement("div");
game_area.appendChild(f16);
f16.classList.add("absolute");f16.style.width="50px";f16.style.height="50px";
f16.style.top=parseInt(game_area.style.height)-parseInt(f16.style.height)-15+"px";f16.style.left="175px";

f16_relative=document.createElement("div");
f16.appendChild(f16_relative);
f16_relative.classList.add("relative");f16_relative.style.width="100%";f16_relative.style.height="100%";


f16_body=document.createElement("div");
f16_relative.appendChild(f16_body);
f16_body.classList.add("absolute");f16_body.classList.add("f16_body");
f16_body.style.background="#f00";f16_body.style.width="7px";f16_body.style.height="100%";f16_body.style.left="45%";


f16_wing=document.createElement("div");
f16_relative.appendChild(f16_wing);
f16_wing.classList.add("absolute");f16_wing.classList.add("f16_wing");
f16_wing.style.width="100%";f16_wing.style.top="25%";

f16_tail=document.createElement("div");
f16_relative.appendChild(f16_tail);
f16_tail.classList.add("absolute");f16_tail.classList.add("f16_tail");
f16_tail.style.top="77%";f16_tail.style.left="26%";f16_tail.style.width="25px";
var t1=100;









//events

document.onkeydown = checkKey;
function checkKey(e) { var f16_position= parseInt(f16.style.left); 
    e = e || window.event;
    if      (e.keyCode == '37' && f16_position>10  ) {f16_position=f16_position-10;}
    else if (e.keyCode == '39' && f16_position<340) {f16_position=f16_position+10;}
    else if (e.keyCode == '32'){ create_shot() }
    f16.style.left=f16_position+"px";
}





function create_shot(){ 
    shot =document.createElement("div");
    game_area.appendChild(shot);
    shot.classList.add("absolute"); shot.classList.add("shot");
    shot.style.top=f16.style.top;shot.style.left=parseInt(f16.style.left)+parseInt(f16.style.width)/2-3+"px";
}



setInterval(shot_up, 100);
function shot_up() {   if (typeof line== "undefined" ) {  create_line();   }
                      if (typeof shot !== "undefined" ) {  
                       var shots=document.getElementsByClassName("shot"); 
                       for (var i = 0; i < shots.length; i++) { 
                        shots[i].style.top =parseInt(shots[i].style.top)-10+"px";sht=parseInt(shots[i].style.top) ;shl=parseInt(shots[i].style.left) ;
                        var lines=document.getElementsByClassName("line");
                        if (typeof lines !== "undefined" ) {  for (var j = 0; j < lines.length; j++) { 
                             var lh1=parseInt(lines[j].style.top);var lh2=lh1+parseInt(lines[j].style.height);
                             if ( sht>lh1 && sht<lh2  ) {
                                shots[i].remove();  lines[j].remove();


                         }  }



                        if ( sht<0 ) { shots[i].remove();}}




}
}
}




*/





