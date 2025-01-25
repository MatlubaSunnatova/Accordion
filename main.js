let buttons = document.getElementsByClassName("right")
let texts = document.getElementsByClassName("text")

for ( let i=0; i< buttons.length; i++){
    buttons[i].onclick = function(){
        texts[i].classList.toggle("show")
        buttons[i].classList.toggle("active")



        for(let a=0; a<buttons.length; a++){
            if(a==i){

            }else{
                texts[a].classList.remove("show")
                buttons[a].classList.remove("active")
            }
        }
    }
}