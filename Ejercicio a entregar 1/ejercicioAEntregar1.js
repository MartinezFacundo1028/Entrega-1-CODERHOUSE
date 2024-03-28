function agencia() {
    let opciones;
    let cantAutosElegidos = 0;
    let totalAPagar = 0;
    do {
        opciones = Number(prompt("Eleccion de auto: \n1 BMW $50000 \n2 Mercedes $75000 \n3 Fiat $10000 \n4 Audi $40000 \n0 salir" ));
        if (opciones < 0 || opciones > 4){
            alert("La opcion elegida es invalida");
        }
        else if (opciones === 1){
            cantAutosElegidos++;
            totalAPagar += 50000;
        }
        else if (opciones === 2){
            cantAutosElegidos++;
            totalAPagar += 75000;
        }
        else if (opciones === 3){
            cantAutosElegidos++;
            totalAPagar += 10000;
        }
        else if (opciones === 4){
            cantAutosElegidos++;
            totalAPagar += 40000;
        }

    } while (opciones !== 0);
    alert("El total de su compra de autos de lujo es de: $" + totalAPagar + " con una cantidad de autos de: " + cantAutosElegidos);
}

agencia();