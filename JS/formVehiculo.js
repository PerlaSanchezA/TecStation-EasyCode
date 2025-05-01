import { db, ref, set, get } from "./conexion.js"; // Importar la base de datos y funciones necesarias

document.getElementById("formVehiculo").addEventListener("submit", function (e) { // Agregar evento al formulario
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const placa_V = document.getElementById("placa_V").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const color = document.getElementById("color").value.trim();
    
    const campos = [placa, marca, modelo, color];
    if (campos.some(campo => campo === "")) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const vehiculosRef = ref(db, "vehiculos/" + placa_V);

    get(vehiculosRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("Placa del vehículo ya registrada.");
            } else {
                // Guardar el nuevo administrador en la base de datos
                set(vehiculosRef, {
                    marca,
                    modelo, 
                    color 
                })
                .then(() => {
                    alert("Vehículo registrado correctamente.");
                    document.getElementById("formVehiculo").reset();
                })
                .catch((error) => {
                    alert("Error al guardar: " + error);
                });
            }
        })
        .catch((error) => {
            alert("Error al verificar la placa: " + error);
        });
});