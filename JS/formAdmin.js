import { db, ref, set, get } from "./conexion.js"; // Importar la base de datos y funciones necesarias

document.getElementById("formAdmin").addEventListener("submit", function (e) { // Agregar evento al formulario
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const id = document.getElementById("id_admin").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido_P = document.getElementById("apellido_P").value.trim();
    const apellido_M = document.getElementById("apellido_M").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const rango = document.getElementById("rango").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    const campos = [id, nombre, apellido_P, apellido_M, telefono, rango, contraseña];
    if (campos.some(campo => campo === "")) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const adminRef = ref(db, "administradores/" + id);

    get(adminRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("ID de administrador ya registrado.");
            } else {
                // Guardar el nuevo administrador en la base de datos
                set(adminRef, {
                    nombre,
                    apellido_P,
                    apellido_M,
                    telefono,
                    rango,
                    contraseña  
                })
                .then(() => {
                    alert("Administrador guardado correctamente.");
                    document.getElementById("formAdmin").reset();
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

