import { db, ref, set, get } from "./conexion.js"; // Importar la base de datos y funciones necesarias

document.getElementById("formTarjeton").addEventListener("submit", function (e) { // Agregar evento al formulario
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const folioT = document.getElementById("folioT").value.trim();
    const f_Creacion = document.getElementById("f_Creacion").value.trim();
    const f_Expiracion = document.getElementById("f_Expiracion").value.trim();
    const id_propietario = document.getElementById("id_propietario").value.trim();
    const placa_V = document.getElementById("placa_V").value.trim();
    const id_admin = document.getElementById("id_admin").value.trim();

    const campos = [folioT, f_Creacion, f_Expiracion, id_propietario, placa_V, id_admin];
    if (campos.some(campo => campo === "")) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const tarjetoRef = ref(db, "tarjetones/" + folioT);

    get(tarjetoRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert("Folio de tarjetón ya registrado.");
            } else {
                // Guardar el nuevo tarjetón en la base de datos
                set(tarjetoRef, {
                    f_Creacion,
                    f_Expiracion,
                    id_propietario,
                    placa_V,
                    id_admin
                })
                .then(() => {
                    alert("Tarjetón registrado correctamente.");
                    document.getElementById("formTarjeton").reset();
                })
                .catch((error) => {
                    alert("Error al guardar: " + error);
                });
            }
        })
        .catch((error) => {
            alert("Error al verificar el folio del tarjetón: " + error);
        });
});