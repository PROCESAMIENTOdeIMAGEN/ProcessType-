document.getElementById("sidemenu").addEventListener("mousemove",movingMymouse);
function movingMymouse(){
    document.getElementById("sidemenu").classList.add("active")
    document.getElementById("item-menu").classList.add("active")
    document.getElementById("item-menu1").classList.add("active")
    document.getElementById("item-menu2").classList.add("active")
    document.getElementById("item-menu3").classList.add("active")
    document.getElementById("item-menu4").classList.add("active")
    document.getElementById("item-menu5").classList.add("active")
    document.getElementById("item-menu6").classList.add("active")
    document.getElementById("item-menu7").classList.add("active")
    document.getElementById("item-menu8").classList.add("active")
}
document.getElementById("sidemenu").addEventListener("mouseout",exitMymouse);
function exitMymouse(){
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")

}
document.getElementById("item-menu1").addEventListener("click",muestra2);
function muestra2(){
   
    document.getElementById("item-menu1").classList.add("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
   
   

    
}
document.getElementById("item-menu").addEventListener("click",muestra1);
function muestra1(){
    
   
    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.add("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
  
    
}
document.getElementById("item-menu2").addEventListener("click",muestra3);
function muestra3(){
    
    document.getElementById("item-menu2").classList.add("coloractive")
    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
    


}
document.getElementById("item-menu3").addEventListener("click",muestra4);
function muestra4(){
   
    document.getElementById("item-menu3").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
   


}
document.getElementById("item-menu4").addEventListener("click",muestra5);
function muestra5(){
    
    document.getElementById("item-menu4").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
   

}
document.getElementById("item-menu5").addEventListener("click",muestra6);
function muestra6(){
   
    document.getElementById("item-menu5").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
    

}
document.getElementById("item-menu6").addEventListener("click",muestra7);
function muestra7(){
   
    document.getElementById("item-menu6").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    
}
document.getElementById("item-menu7").addEventListener("click",muestra8);
function muestra8(){
  
    document.getElementById("item-menu7").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu8").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
   
}
document.getElementById("item-menu8").addEventListener("click",muestra9);
function muestra9(){
    
    document.getElementById("item-menu8").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
    document.getElementById("item-menu6").classList.remove("coloractive")
    document.getElementById("item-menu7").classList.remove("coloractive")
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")
  

}