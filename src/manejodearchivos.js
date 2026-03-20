// //1) File System es un manejador de archivos que ya viene incorporado con Node JS.
// // Me permite realizar las opreaciones Crear, Leer, Actualizar y borrar registros (CRUD).

// //1) PASO: vamos a incorporar el modulo.

// const fs = require("fs");
// const { connected } = require("process");
// // console.log(fs);

// //trabajamos de forma sincronica:

// const rutaSin = "./ejemplo-sin.txt";

// //Crear un archivo:

// fs.writeFileSync(rutaSin, "Hola estamos trabajando en un ejemplo sincronico");

// // //Leer un archivo:

// // let contenido = fs.readFileSync(rutaSin, "utf-8");
// // //primer paramatro es el path(ruta), el segundo es el tipo de codificacion.
// // console.log(contenido);

// // //podemos verificar primero que el archivo existe.
// // if (fs.existsSync(rutaSin)) {
// //     let resultado = fs.readFileSync(rutaSin, "utf-8");
// //     console.log(resultado);
// // } else {
// //     console.log("El archivo es inexistente")
// // }

// //Mi forma de actualizar es pisar el contenido.

// // fs.writeFileSync(rutaSin, "Hola, actualizamos la info(pisamos)");

// //agregamos mas contenido al final:
// // fs.appendFileSync(rutaSin, " y aca agregamos mas contenido al texto");

// //Eliminar un archivo:
// // fs.unlinkSync(rutaSin);

// //B) Trabajando con Callbacks
const fs = require("fs");
const conCall = "./ejemplo-con.txt";

fs.writeFile(conCall, "Nuevo archivo, ahora con Calbacks", (error) => {
    //el tercer parametro es un cb, que pregunta si hubo un error.
    if (error) return console.log("No pudimos crear el archivo");

    //leemos el archivo:

    fs.readFile(conCall, "utf-8", (error, contenido) => {
        if (error) return console.log("No se puede leer");
        console.log(contenido);
        //Aca el cb tiene 2 parametros, uno el error y el otro el contenido.

        //si queremos agregar mas contenido
        fs.appendFile(conCall, " agregamos mas contenido", (error) => {
            if (error) return console.log("no podemos agregar mas contenido");

        })

        fs.unlink(conCall, (error) => {
            if (error) return console.log("no se puede eliminar el archivo")
        })
    })
})

//C) Tranajamos con promesas:

//para podes trabajar con promesas,  tenemos que usar la propiedad "promises" del modulo fs.

const textoPromises = "./text.pro.txt";

const operacionesAsincronicas = async () => {
    //Crear un archivo.
    await fs.promises.writeFile(textoPromises, "Nuevo archivo con promesas!!");

    //Leer archivo
    let respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta)

    //Agregar contenido al final
    await fs.promises.appendFile(textoPromises, " Contenido agregado")

    respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta);

    await fs.promises.unlink(textoPromises);
}

operacionesAsincronicas();

// Manejo de datos complejos:

//Desarrollamos un array de personas:

const arrayPersonas = [
    { nombre: "Pepe", apellido: "Argento", edad: 50 },
    { nombre: "Moni", apellido: "Argento", edad: 40 },
    { nombre: "Coky", apellido: "Argento", edad: 17 },
    { nombre: "Paola", apellido: "Argento", edad: 15 },
    { nombre: "Fatiga", apellido: "Argento", edad: 9 }
]

const archivoArgento = "./archivo-argentos.json";

const guardarArchivos = async () => {
    await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas, null, 2));

}

guardarArchivos();

//lo recuperamos:

const leerArchivos = async () => {
    const respuesta = await fs.promises.readFile(archivoArgento, "utf-8");
    const nuevoArray = JSON.parse(respuesta);
    console.log(nuevoArray)
}
leerArchivos();