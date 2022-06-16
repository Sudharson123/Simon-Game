var colors=["red","green","blue","yellow"]
var gamepattern=[]
var userChoice=[]
var Level=0
var s=false
if(!s){$(document).on("keypress",function(event){
   var press=event.key;
   beginn(press);
   s=true
})};
function beginn(a){
    
    if((a=='a') | (a=='A')){
    
     $("h1").text("Level  "+Level);
     
     start();
    
}
}
$(".btn").on("click",function(){
    a=$(this).attr("id")
    playsound(a)
    userChoice.push(a);
    btnAnimation(a);
    
    currentcolor=userChoice.length-1
    check(currentcolor);
    
});
function check(currentcolor){
    if(userChoice[currentcolor]===gamepattern[currentcolor]){
        if(userChoice.length===gamepattern.length){
            setTimeout(function () {
                start();
              }, 1000);
            
        }
    }
    else{
        playsound("wrong")
        $("h1").text("Game over, Press 'A' key to restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        startAgain()
        
    }
}
function btnAnimation(key){
    $("."+key).addClass("pressed");
    setTimeout(function(){
        $("."+key).removeClass("pressed");
    },100);
}
function start(){
        userChoice=[]
        Level+=1;
        $("h1").text("Level "+Level)
        var randomNumber=Math.floor(Math.random()*4);
        gamepattern.push(colors[randomNumber])
        $("#" + colors[randomNumber]).fadeIn(300).fadeOut(300).fadeIn(300)
        playsound(colors[randomNumber])
       
        
    }
function playsound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}
function startAgain(){
    gamepattern=[]
    Level=0
    s=false

}
