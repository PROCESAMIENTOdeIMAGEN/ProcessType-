document.getElementById("iex").addEventListener("click",expand);
function expand(){
    
    document.getElementById("op3-4").classList.remove("expand")
    document.getElementById("op3-3").classList.add("expand")
}
document.getElementById("iexU").addEventListener("click",expand1);
function expand1(){
    
    document.getElementById("op3-4").classList.remove("expand")
    document.getElementById("op3-3").classList.remove("expand")
}

document.getElementById("iex2").addEventListener("click",expand2);
function expand2(){
    
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.add("expand")
}
document.getElementById("iexU2").addEventListener("click",expand3);
function expand3(){
    
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")
}