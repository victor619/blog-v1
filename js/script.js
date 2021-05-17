const button = document.getElementsByTagName("button")
const like = document.getElementById("like")
const dislike = document.getElementById("dislike")
let index = 0
button[0].addEventListener("click",Like)
button[1].addEventListener("click",Dislike)

function Like(){
    if (index == 0) {
        dislike.innerHTML = 0 
        index++
    }

    else {
        index--
    }

like.innerHTML = index
}

function Dislike(){ 

    if (index == 0) {
        like.innerHTML = 0
        index++
    } 

    else {
        index--
    }

dislike.innerHTML = index
}