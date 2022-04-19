
//menu
var menu =document.getElementById('menu')
var lis =document.getElementById('lis')
var title =document.getElementById('h-h1')
var s = 1;

menu.addEventListener('click', show)
function show(){
    if (s==1) {
        lis.style.top = '9%'
        title.style.marginTop = '100px'
        s=-1;
    }else{
        lis.style.top = '-300px'
        title.style.marginTop = '-20px'
        s=1;
    }
}




//reveal

window.addEventListener("scroll", reveal)

function reveal() {
    var reveal = document.querySelectorAll(".reveal")
    
    for(var i = 0; i < reveal.length; i++){
        var windowHeight = window.innerHeight
        var revealTop = reveal[i].getBoundingClientRect().top
        var revealPoint =150

        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add("active")
        }else{
            reveal[i].classList.remove("active")
        }
    }
}
