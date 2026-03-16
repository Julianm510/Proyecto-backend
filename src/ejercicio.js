const moment = require("moment");

const fechaActual = moment();

const fechaNacimiento = moment("1995-10-05");

if (fechaNacimiento.isValid()) {
    let diasPasados = fechaActual.diff(fechaNacimiento, "days")
    console.log(`pasaron ${diasPasados} desde mi fecha de nacimiento`)
} else {
    console.log("la fecha no es valida")
}



