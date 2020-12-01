var len = document.querySelectorAll(".drum").length ;

for(var i=0 ; i<len ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var data = this.innerHTML ;
    makeSound(data) ;
    makeAnimation(data) ;
  });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key) ;
    makeAnimation(event.key) ;
}) ;


function makeSound(key)
{
  switch (key) {
    case "w": var audioelement = new Audio('sounds/tom-1.mp3') ;
              audioelement.play() ;
              break;
    case "a": var audioelement = new Audio('sounds/tom-2.mp3') ;
              audioelement.play() ;
              break;
    case "s": var audioelement = new Audio('sounds/tom-3.mp3') ;
              audioelement.play() ;
              break;
    case "d": var audioelement = new Audio('sounds/tom-4.mp3') ;
              audioelement.play() ;
              break;
    case "j": var audioelement = new Audio('sounds/snare.mp3') ;
              audioelement.play() ;
              break;
    case "k": var audioelement = new Audio('sounds/crash.mp3') ;
              audioelement.play() ;
              break;
    case "l": var audioelement = new Audio('sounds/kick-bass.mp3') ;
              audioelement.play() ;
              break;
    default:  alert("This was unexpected") ;

  }
}

function makeAnimation(key)
{
    var activeButton = document.querySelector("." + key) ;
    activeButton.classList.add("pressed") ;
    setTimeout(function(){
      activeButton.classList.remove("pressed") ;
    })
}
