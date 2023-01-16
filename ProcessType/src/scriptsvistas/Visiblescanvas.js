document.getElementById("histogramas").addEventListener("click",his2);
function his2(){
   
    document.getElementById("histogramas").classList.add("active")
    
    document.getElementById("canvaH").classList.add("active")
    document.getElementById("canvac").classList.add("inactive")
}
document.getElementById("BtnH").addEventListener("click",hisClose);
function hisClose(){
    document.getElementById("canvaH").classList.remove("active")
    document.getElementById("canvac").classList.remove("inactive")
    document.getElementById("histogramas").classList.remove("active")
}


document.getElementById("histogramas").addEventListener("mousemove",()=>{

    document.getElementById("Ax").classList.add('active')
})
document.getElementById("histogramas").addEventListener("mouseout",()=>{

    document.getElementById("Ax").classList.remove('active')
})