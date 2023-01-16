var rangeZoom= document.getElementById("final")
var sobreDiv = document.getElementById("selector")

rangeZoom.oninput = function (){
    var Rv = (parseInt(this.value)/2);
    sobreDiv.style.width = `${Rv}px`
}
 var actionRotation = document.getElementById("GradosA")
 var sobreDiv2 = document.getElementById("selector2")
 actionRotation.oninput = function(){
    var Rv = (parseInt(this.value)/2);
    sobreDiv2.style.width = `${Rv}px`
 }

 var actionRange1 = document.getElementById("Rang1")
 var sobreDiv22 = document.getElementById("selector22")
 actionRange1.oninput = function(){
    
    var Rv = (parseFloat(this.value))*0.78125;
    sobreDiv22.style.width = `${Rv}px`
 }

 var actionRange2 = document.getElementById("Rang2")
 var sobreDiv222 = document.getElementById("selector222")
 actionRange2.oninput = function(){
    var Rv = (parseInt(this.value))*0.78125;
    sobreDiv222.style.width = `${Rv}px`
 }

 var actionRange3 = document.getElementById("Rang3")
 var sobreDiv223 = document.getElementById("selector223")
 actionRange3.oninput = function(){
    var Rv = (parseInt(this.value))*0.78125;
    sobreDiv223.style.width = `${Rv}px`
 }
 function rangeSlider(valuess){
   document.getElementById('range').value = valuess
}
function valueSlider(e){
   var econd = document.getElementById('range').value
   document.getElementById('final').value=econd
}