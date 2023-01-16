import { Sepia } from "./ImagenLocal";
import { muestraTamanios } from "./filtros";
import { ImageType } from "./ImageType";
import { MathImg } from "./MathImg";
console.log('Esta es una prueba de funcionamiento TYPESCRIPT')
Sepia()
export var canvas = <HTMLCanvasElement>document.getElementById("img1");
const ctx = canvas.getContext("2d")
const eventOnchangesInput = <HTMLInputElement>document.getElementById("file");
canvas.width = 979;
canvas.height = 495;
 export const TamCanvasWidth = canvas.width = 979;
 export const TamCanvasHeight = canvas.height = 495;
 muestraTamanios()
eventOnchangesInput.addEventListener("change",image1Canvas);
function image1Canvas(){
    let image1 = new Image();
    
    
    const file = document.querySelector('input[type=file]') as HTMLInputElement | null;
    let fi = file?.files![0];
    const reader = new FileReader();
    reader.addEventListener('load', function(){
        image1.src = reader.result as string;
        
        image1.onload = () => {
        var  ancho=image1.width;
        var alto=image1.height;
        console.log("ESTA SON LAS MEDIDAS DE LA IMAGEN",ancho,alto);
        if(alto === ancho){
            var posicionX= (canvas.width - (canvas.width/2.3))/2;
            var posicionY=(canvas.height - (canvas.width/2.3))/2;
            var pixel = this.getImageData(posicionX, posicionY, 1, 1);
        ctx?.drawImage(image1,posicionX,posicionY,canvas.width/2.3,canvas.width/2.3);
        
            
        }else if( alto > ancho){
            console.log(`ENTRA EN Alto :${alto} > Ancho :${ancho}`)
            var porcentajeX = (ancho * 100)/alto;
            var tamHeight = (canvas.height) - 50;
            var tamWidth = (tamHeight * porcentajeX)/100;
            var posicionX= (canvas.width - tamWidth)/2;
            var posicionY=(canvas.height - tamHeight)/2;
            ctx?.drawImage(image1,posicionX,posicionY,tamWidth,tamHeight);
            

        }else if( ancho > alto){
            console.log(`ENTRA EN Ancho :${ancho} > Alto :${alto}`)
            var porcentajeY = (alto * 100)/ancho;
            var tamWidth = (canvas.width) - 340;
            var tamHeight = (tamWidth * porcentajeY)/100;
            var posicionX= (canvas.width - tamWidth)/2;
            var posicionY=(canvas.height - tamHeight)/2;
            ctx?.drawImage(image1,posicionX,posicionY,tamWidth,tamHeight);
           
        }  
        }
    },false);
    if (fi) {
        reader.readAsDataURL(fi);
  }
}

function convertirAGris(evt: any): void{
    var imagenSal:ImageType = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toGray(imagenSal));
  }


/*const dibujarFiltro=(img:any,imageData:ImageData)=>{
    ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    ctx2.putImageData(imageData, 0, 0);
}


const sepia=(img:any)=>{
    var imageData = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
    var pixels = imageData.data
    var numPixels = imageData.width * imageData.height;
    
    for(var i=0;i<numPixels;i++){
          var r = pixels[i * 4],
          g = pixels[i * 4 + 1],
          b = pixels[i * 4 + 2];
          pixels[ i * 4 ] = 255 - r;
          pixels[ i * 4 + 1 ] = 255 - g;
          pixels[ i * 4 + 2 ] = 255 - b;
          
          pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
          pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
          pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );           
    }
    dibujarFiltro(img,imageData)
}

*/

