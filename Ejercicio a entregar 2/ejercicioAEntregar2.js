let agencia = [
    { nombre: "C200d", tipo: "Mercedes-Benz", precio: 45000, stock: 20 },
    { nombre: "C35 AMG", tipo: "Mercedes-Benz", precio: 55000, stock: 15 },
    { nombre: "AMG ONE", tipo: "Mercedes-Benz", precio: 250000, stock: 10 },
    { nombre: "AMG GT", tipo: "Mercedes-Benz", precio: 155000, stock: 25 },
    { nombre: "G63 AMG", tipo: "Mercedes-Benz", precio: 215000, stock: 20 },

    { nombre: "118", tipo: "BMW", precio: 65000, stock: 25 },
    { nombre: "335", tipo: "BMW", precio: 75000, stock: 20 },
    { nombre: "550i", tipo: "BMW", precio: 150000, stock: 18 },
    { nombre: "X5", tipo: "BMW", precio: 120000, stock: 12 },
    { nombre: "Z4", tipo: "BMW", precio: 200000, stock: 15 },

    { nombre: "A1", tipo: "Audi", precio: 55000, stock: 20 },
    { nombre: "A3", tipo: "Audi", precio: 60000, stock: 25 },
    { nombre: "A4", tipo: "Audi", precio: 70000, stock: 15 },
    { nombre: "A5", tipo: "Audi", precio: 80000, stock: 30 },
    { nombre: "R8", tipo: "Audi", precio: 200000, stock: 20 }
];

function listar(lista, propiedad1, propiedad2, propiedad3) {
    let salida = "";
    lista.forEach((auto, index) => {
        salida += (index + 1) + ". " + auto[propiedad1] + " - " + auto[propiedad2] + " - Disponibles: " + auto[propiedad3] + "\n";
    });
    return salida;
}

function agregarAlPedido(auto, cantidad, pedido) {
    let subtotal = auto.precio * cantidad;
    pedido.push({ nombre: auto.nombre, stock: cantidad, subtotal: subtotal });
    alert("auto agregado al pedido");
    auto.stock -= cantidad;
}

function buscarAutoPorNombreYagregarAlPedido(nombre, pedido, agencia) {
    let autoEncontrado = agencia.find(auto => auto.nombre.toLowerCase() === nombre.toLowerCase());
    if (autoEncontrado) {
        let cantidad;
        do {
            cantidad = Number(prompt("Stock: " + autoEncontrado.stock + "\nIngresa la cantidad deseada:"));
            if (cantidad <= autoEncontrado.stock && cantidad > 0) {
                agregarAlPedido(autoEncontrado, cantidad, pedido);
            } else if (cantidad > autoEncontrado.stock) {
                alert("stock no disponible en la agencia");
            } else {
                alert("Ingrese una cantidad valida");
            }
        } while (!(cantidad <= autoEncontrado.stock && cantidad > 0));
    } else {
        alert("El auto no está disponible en la agencia");
    }
}

function atencionAlCliente(agencia) {
    let pedido = [];
    let opcion;
    do {
        opcion = Number(prompt("Bienvenido a la agencia.\n1. Ingresar a la agencia\n2. Finalizar compra\n3. Salir"));

        switch (opcion) {
            case 1:
                let filtro;
                let tipoFiltrado;
                let eleccion;
                let autosFiltrados;
                do {
                    do {
                        filtro = Number(prompt("Selecciona el tipo de auto:\n1. Mercedes-Benz\n2. BMW\n3. Audi\n4. Buscar auto por nombre\n5. Volver atras"));
                        switch (filtro) {
                            case 1:
                                tipoFiltrado = "Mercedes-Benz";
                                break;
                            case 2:
                                tipoFiltrado = "BMW";
                                break;
                            case 3:
                                tipoFiltrado = "Audi";
                                break;
                            case 4:
                                let nombreauto = prompt("Ingrese el auto que desea buscar:");
                                buscarAutoPorNombreYagregarAlPedido(nombreauto, pedido, agencia);
                                eleccion = undefined;
                                tipoFiltrado = undefined;
                                break;
                            case 5:
                                eleccion = undefined;
                                tipoFiltrado = undefined;
                                break;
                            default:
                                alert("Opcion no valida");
                                break;
                        }
                    } while (filtro !== 1 && filtro !== 2 && filtro !== 3 && filtro !== 5);

                    autosFiltrados = agencia.filter(auto => auto.tipo === tipoFiltrado);
                    if (tipoFiltrado !== undefined) {
                        do {
                            eleccion = Number(prompt("Elige un auto ingresando el numero correspondiente:\n" + listar(autosFiltrados, "nombre", "precio", "stock") + (autosFiltrados.length + 1) + ". Volver atras\n" + (autosFiltrados.length + 2) + ". Volver al menu principal\n"));
                            if (eleccion >= 1 && eleccion <= autosFiltrados.length) {
                                let autoSeleccionado = autosFiltrados[eleccion - 1];
                                let cantidad;
                                do {
                                    cantidad = Number(prompt("Stock: " + autoSeleccionado.stock + "\nIngresa la cantidad deseada:"));
                                    if (cantidad <= autoSeleccionado.stock && cantidad > 0) {
                                        agregarAlPedido(autoSeleccionado, cantidad, pedido);
                                    } else if (cantidad > autoSeleccionado.stock) {
                                        alert("stock no disponible en la agencia");
                                    } else {
                                        alert("Ingrese una cantidad valida");
                                    }
                                } while (!(cantidad <= autoSeleccionado.stock && cantidad > 0));
                            } else if (eleccion === autosFiltrados.length + 1) {
                                break;
                            } else if (eleccion === autosFiltrados.length + 2) {
                                break;
                            } else {
                                alert("Opcion no valida");
                            }
                        } while (eleccion !== autosFiltrados.length + 1 && eleccion !== autosFiltrados.length + 2);
                    }
                } while (eleccion !== autosFiltrados.length + 2 && eleccion !== undefined);
                break;
            case 2:
                let total = 0;
                for (const item of pedido) {
                    total += item.subtotal;
                }
                alert("Total a pagar: €" + total);
                break;
            case 3:
                alert("Gracias por visitar la agencia");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
    } while (opcion !== 3);
}

function principal(agencia) {
    atencionAlCliente(agencia);
}

principal(agencia);