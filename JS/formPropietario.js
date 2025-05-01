import { db, ref, set, get } from "./conexion.js"; // Importar la base de datos y funciones necesarias

document.getElementById("formPropietario").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const id = document.getElementById("id_propietario").value.trim();
    const nombre = document.getElementById("nombreP").value.trim();
    const apellido_P = document.getElementById("apellido_PP").value.trim();
    const apellido_M = document.getElementById("apellido_MP").value.trim();
    const telefono = document.getElementById("telefonoP").value.trim();
    const correo = document.getElementById("correoP").value.trim();
    const tipo = document.getElementById("tipoP").value.trim();
    const contraseña = document.getElementById("contraseñaP").value.trim();

    const campos = [id, nombre, apellido_P, apellido_M, telefono, correo, tipo, contraseña];
    if (campos.some(campo => campo === "")) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const propietarioRef = ref(db, "propietarios/" + id);

    get(propietarioRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("ID de propietario ya registrado.");
            } else {
                set(propietarioRef, {
                    nombre,
                    apellido_P,
                    apellido_M,
                    telefono,
                    correo,
                    tipo,
                    contraseña 
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
