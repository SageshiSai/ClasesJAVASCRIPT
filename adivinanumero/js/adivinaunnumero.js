var numaleat = 0;
var fallos = 0;
function CalcularNumero() {
    var elemento = document.getElementById("divjuego");
    elemento.style.display = "block";
    numaleat = Math.round(Math.random()*50);
    
    alert("Número Aleatorio: " + numaleat);
    return numaleat;
}
function mostrar() {
    var numeroIngresado = document.getElementById("mi_numero").value;
    var elemento = document.getElementById("celda"+fallos);
    if(numeroIngresado == numaleat){
        elemento.style.backgroundColor ="Green";

        var elemento = document.getElementById("texto");
        elemento.textContent = "FELICIDADES!! HAS ACERTADO EL NUMERO A LOS "+(fallos+1)+" INTENTOS!";

        var imagen = document.getElementById("divimagen");
        var imagen1 = document.getElementById("imagen");
        var imagen2 = "ok.png";

        imagen1.setAttribute("src","../images/"+imagen2);
        imagen.style.display = "block";
        

    } else if ((numeroIngresado > (numaleat-10) ) && (numeroIngresado < (numaleat+10) )) {
        elemento.style.backgroundColor ="Orange";
        fallos++;
    } else if(numeroIngresado < (numaleat-10) || numeroIngresado > (numaleat+10) ) {
        elemento.style.backgroundColor ="Red";
        fallos++
    }  
    
    if(fallos === 5){
        var elemento = document.getElementById("texto");
        elemento.textContent = "Has agotado los 5 intentos SIN ACERTAR";
        
        var imagen = document.getElementById("divimagen");
        imagen.style.display = "block";
    }
}

