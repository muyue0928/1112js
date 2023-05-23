let box=document.getElementById("box");
let move=function(e){
    box.style.left=(e.clientX-21)+"px";
    box.style.top=(e.clientY-21)+"px";
}
let mousedown=function(){ 
    document.addEventListener("mousemove",move)
}
let mouseup=function(){
    document.removeEventListener("mousemove",move);
}
box.addEventListener("mousedown",mousedown);
box.addEventListener("mouseup",mouseup);