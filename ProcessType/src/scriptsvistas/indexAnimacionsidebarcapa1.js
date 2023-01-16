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
    document.getElementById("sub-menus").classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
    document.getElementById("sub-menus2").classList.remove("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")
   

    
}
document.getElementById("item-menu").addEventListener("click",muestra1);
function muestra1(){
    
    document.getElementById('sub-menus').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")
   
    
    
}
document.getElementById("item-menu2").addEventListener("click",muestra3);
function muestra3(){
    document.getElementById('sub-menus3').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")


}
document.getElementById("item-menu3").addEventListener("click",muestra4);
function muestra4(){
    document.getElementById('sub-menus4').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")


}
document.getElementById("item-menu4").addEventListener("click",muestra5);
function muestra5(){
    document.getElementById('sub-menus5').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")

}
document.getElementById("item-menu5").addEventListener("click",muestra6);
function muestra6(){
    document.getElementById('sub-menus6').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")

}
document.getElementById("item-menu6").addEventListener("click",muestra7);
function muestra7(){
    document.getElementById('sub-menus7').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
    document.getElementById("item-menu6").classList.add("coloractive")

    document.getElementById("item-menu1").classList.remove("coloractive")
    document.getElementById("item-menu").classList.remove("coloractive")
    document.getElementById("item-menu2").classList.remove("coloractive")
    document.getElementById("item-menu3").classList.remove("coloractive")
    document.getElementById("item-menu4").classList.remove("coloractive")
    document.getElementById("item-menu5").classList.remove("coloractive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")

}
document.getElementById("item-menu7").addEventListener("click",muestra8);
function muestra8(){
    document.getElementById('sub-menus8').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus9').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")

}
document.getElementById("item-menu8").addEventListener("click",muestra9);
function muestra9(){
    document.getElementById('sub-menus9').classList.remove("inactive")
    document.getElementById('sub-menus2').classList.add("inactive")
    document.getElementById('sub-menus').classList.add("inactive")
    document.getElementById('sub-menus3').classList.add("inactive")
    document.getElementById('sub-menus4').classList.add("inactive")
    document.getElementById('sub-menus5').classList.add("inactive")
    document.getElementById('sub-menus6').classList.add("inactive")
    document.getElementById('sub-menus7').classList.add("inactive")
    document.getElementById('sub-menus8').classList.add("inactive")
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
    document.getElementById("sub-menusActions1").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions2").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions3").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions4").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions5").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions6").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions7").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions8").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions9").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions10").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions11").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions12").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions13").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions14").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions15").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions16").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions17").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions18").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions19").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions20").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions21").style.transform = "translateX(-240px)"
    document.getElementById("sub-menusActions22").style.transform = "translateX(-240px)"
    document.getElementById("sub-menus").classList.remove("despliceX")
    document.getElementById("sub-menus2").classList.remove("despliceX")
    document.getElementById("sub-menus3").classList.remove("despliceX")
    document.getElementById("sub-menus4").classList.remove("despliceX")
    document.getElementById("sub-menus6").classList.remove("despliceX")
    document.getElementById("sub-menus9").classList.remove("despliceX")
    document.getElementById("op3-3").classList.remove("expand")
    document.getElementById("op3-4").classList.remove("expand")

}