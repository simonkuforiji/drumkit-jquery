
$(".drum").click(function(evt){
    var drumLetter = evt.currentTarget.innerHTML;
    playDrum(drumLetter);
    pressedShade(drumLetter);
});

$(".drum").keypress((evt) => {
    playDrum(evt.key);
    pressedShade(evt.key);
});

function pressedShade(dl){ //dl = drumLetter
    $("." + dl).addClass("pressed");
    
    setTimeout(function(){
        $("." + dl).removeClass("pressed");
    },100);
}

function playDrum(keyPressed){
    switch (keyPressed) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: 
        console.log("No such Drum!");
            break;
    }
}