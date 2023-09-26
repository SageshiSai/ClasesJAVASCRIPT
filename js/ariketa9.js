function escribirNumeros(){
            
    var numerosPares = [];
    
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) { // Verifica si el número es par
            numerosPares.push(i); // Muestra el número par en una alerta
        }
    }
    alert(numerosPares);

    var tablaNumeros = document.getElementById("tabla-numeros");

    for (var contador = 0; contador < numerosPares.length; contador++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            var numero = numerosPares[contador + j];
            if (numero !== undefined) {
                var celda = document.createElement("td");
                celda.textContent = numero;     
                fila.appendChild(celda);
            }
            var numeroante = numero;//HAY QUE HACER QUE SE GUARDE EL ULTIMO NUMERO USADO DESPUES DE CREAR LA CELDA
        }
        tablaNumeros.appendChild(fila);
    }
    alert(numerosPares);

    
}