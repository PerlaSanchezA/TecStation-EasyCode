import { db, ref, set, get } from "./conexion.js"; // Importar la base de datos y funciones necesarias

document.getElementById("formPropietario").addEventListener("submit", function (e) { // Agregar evento al formulario
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const id = document.getElementById("id_Tarjeton").value.trim();
    const f_Creacion = document.getElementById("f_Creacion").value.trim();
    const f_Expiracion = document.getElementById("f_Expiracion").value.trim();
    const apellido_M = document.getElementById("apellido_M").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipo = document.getElementById("tipo").value.trim();

    const campos = [id, nombre, apellido_P, apellido_M, telefono, correo, tipo];
    if (campos.some(campo => campo === "")) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const propietarioRef = ref(db, "propietarios/" + id);

    get(propietarioRefRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("ID de propietario ya registrado.");
            } else {
                // Guardar el nuevo administrador en la base de datos
                set(propietarioRefRef, {
                    nombre,
                    apellido_P,
                    apellido_M,
                    telefono,
                    correo,
                    tipo  
                })
                .then(() => {
                    alert("Propietario registrado correctamente.");
                    document.getElementById("formPropietario").reset();
                })
                .catch((error) => {
                    alert("Error al guardar: " + error);
                });
            }
        })
        .catch((error) => {
            alert("Error al verificar el ID: " + error);
        });
});