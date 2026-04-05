// class ProductManager {
//     // static ultId = 0;
//     constructor() {

//         this.products = [];
//         this.id = 0;
//     }
//     //validaciones
//     //1) validamos que los campos se agregaron:
//     addProduct(title, description, price, img, code, stock) {
//         if (!title || !description || !price || !img || !code || !stock) {
//             console.log("Todos los campos deben ser obligatorios")
//             return;
//         }
//         //validamos que el código sea unico
//         if (this.products.some(item => item.code === code)) {
//             console.log("Atención el código debe ser unico")
//             return;
//         }

//         const newProduct = {
//             // id: ++ProductManager.ultId,
//             id: this.id,
//             title,
//             description,
//             price,
//             img,
//             code,
//             stock
//         }

//         //lo agrego al array
//         this.products.push(newProduct);
//         this.id++;

//     }

//     getProduct() {
//         return this.products;

//     }

//     getProductById(id) {
//         const product = this.products.find(item => item.id === id)

//         if (!product) {
//             console.log("Producto no encontrado")
//         } else {
//             console.log("Producto encontrado", product)
//         }
//     }

// }

// const manager = new ProductManager()



// manager.addProduct("Producto prueba", "este es un producto de prueba", 500, "no img", "abc123", 25)

// manager.addProduct("fideos", "mostacholes", 1000, "no img", "abc124", 55)
// manager.addProduct("arroz", "doble carolina", 1500, "no img", "abc125", 55)

// manager.addProduct("mostacholes", 1000, "no img", "abc124", 55)
// manager.addProduct("arroz", "doble carolina", 1500, "no img", "abc125", 55)
// manager.addProduct("arroz gallo", "doble carolina", 1500, "no img", "abc127", 70)



// console.log(manager.getProduct())

// manager.getProductById(20)



class personas {
    constructor() {
        this.personas = [];
        this.id = 0;
    }

    addPersona(nombre, apellido, edad, genero, dni) {
        if (!nombre || !apellido || !edad || !genero || !dni) {
            console.log("Deben completarse todo los campos")
            return;
        }

        if (this.personas.find(p => p.dni === dni)) {
            console.log("Ya existe una persona con ese DNI")
            return;
        }
        const newPersona = {
            id: this.id,
            nombre,
            apellido,
            edad,
            genero,
            dni
        }

        this.personas.push(newPersona);
        this.id++;


    }



    getPersona() {
        return this.personas;
    }

    getPersonaById(id) {
        const persona = this.personas.find(p => p.id === id)
        if (!persona) {
            console.log("Persona no encontrada")
        } else {
            return persona
        }




    }
    // filtro para buscar gente por edad
    getPersonaByAge(agemax) {
        const persona = this.personas.filter(p => p.edad <= agemax)
        if (persona.length === 0) {
            console.log("No hay personas menores a esa edad")
            return
        } else return persona





    }

    getPersonaByDni(dni) {
        const persona = this.personas.find(p => p.dni === dni)
        if (!persona) {
            return console.log("persona no encontrada ")
        } else {
            return persona

        }

    }

    getPersonaByGender(genero) {
        const persona = this.personas.filter(p => p.genero === genero)
        if (persona.length === 0) {
            return console.log("No hay personas con ese genero")

        } return persona
    }

    getNombres() {
        const nombres = this.personas.map(p => p.nombre)
        return nombres
    }

    getMayoresDeEdad(edad) {
        const mayores = this.personas.filter(p => p.edad >= 70)
        if (mayores.length === 0) {
            return console.log("no hay personas mayores de 70")
        } return mayores
    }

    getNombreCompleto() {
        const nombrecompleto = this.personas.map(p => `${p.nombre} ${p.apellido}`)
        return nombrecompleto
    }


    getPersonasEntreEdades(min, max) {
        const rangoedad = this.personas.filter(p => p.edad >= min && p.edad <= max)
        if (rangoedad.length === 0) {
            return console.log("No se encontraron personas entre esos rangos de edad")
        } return rangoedad



    }
    getPersonasOrdenadasPorEdad() {
        return this.personas.sort((a, b) => b.edad - a.edad)
    }
}

const pruebaper = new personas()

pruebaper.addPersona("Julián", "Muriel", 30, "Masculino", 38980544)
pruebaper.addPersona("Camila", "Herrera", 30, "Femenino", 38980500)
pruebaper.addPersona("Diego", "Maradona", 40, "Masculino", 38980540)
pruebaper.addPersona("Diego", "Cagna", 50, "Masculino", 38980547)
pruebaper.addPersona("Fabián", "Muriel", 60, "Masculino", 17070278)
pruebaper.addPersona("Juan", "Roman", 10, "Masculino", 170702738)




// console.log(pruebaper.getPersona())
// pruebaper.getPersonaById(2)
// console.log(pruebaper.getPersonaByAge(10))
// console.log(pruebaper.getPersonaByDni(38980500))
// console.log(pruebaper.getPersonaByGender("Femenino"))
// console.log(pruebaper.getNombres())
// console.log(pruebaper.getMayoresDeEdad())
// console.log(pruebaper.getNombreCompleto())
// console.log(pruebaper.getPersonasEntreEdades(5, 9))
// console.log(pruebaper.getPersonasOrdenadasPorEdad())


const fs = require("fs");
const { text } = require("stream/consumers");
// console.log(fs)


//ubicacion del archivo que voy a crear
const rutaSin = "./ejemplo-sin-txt"


//crear un archivo

fs.writeFileSync(rutaSin, "Hola, estamos trabajando en un ejemplo sincronico");

//leer el archivo
//primer parametro la ruta y el esegundo el tipo de codificacion.
let contenido = fs.readFileSync(rutaSin, "utf-8");
console.log(contenido);

//podemos verificar primero si el archivo existe

if (fs.existsSync(rutaSin)) {
    let resultado = fs.readFileSync(rutaSin, "utf-8");
    console.log(resultado)
} else {
    console.log("el archivo no existe")
}


//actualizar el contenido
//mi forma de actualizar el contenido es pisandolo
fs.writeFileSync(rutaSin, "Hola, actualizamos la info")

//agregamos mas contenido al final
fs.appendFileSync(rutaSin, " y este es un texto agregado al final")

//eliminar un archivo
fs.unlinkSync(rutaSin)


//trabajamos con Callbacks

const conCall = "./ejemplo-con.txt";

fs.writeFile(conCall, "Nuevo archivo, ahora con callbacks", (error) => {
    if (error) return console.log("No pudimos crear el archivo");

    fs.readFile(conCall, "utf-8", (error, contenido) => {
        if (error) return console.log("No podemos leer");
        console.log(contenido)
        // aca el cb tiene 2 parametros, uno el error y el otro el contenido

    })
    //agregamos info

    fs.appendFile(conCall, " mas contenido", (error) => {
        if (error) return console.log("No podemos agregar mas contenido")

        // fs.unlink(conCall, (error) => {
        //     if (error) return console.log("No se puede eliminar")
        // })
    })

})

// let contenid = fs.readFileSync(conCall, "utf-8");
// return console.log(contenid)


//trabajamos con promesas, tenemos que usar la propuedad "promises" del modulo fs:

const textoPromise = "./texto-pro.txt";

const operacionesAsincronicas = async () => {
    await fs.promises.writeFile(textoPromise, "Nuevo archivo");

    //leer el archivo
    let respuesta = await fs.promises.readFile(textoPromise, "utf-8");
    console.log(respuesta)


    await fs.promises.appendFile(textoPromise, " texto agregado")

    respuesta = await fs.promises.readFile(textoPromise, "utf-8")
    console.log(respuesta)

    await fs.promises.unlink(textoPromise, (error) => {
        if (error) return console.log("No se pudo eliminar el archivo")
    })
}
operacionesAsincronicas();



//manejo de datos complejos

//desarrollamos un array de personas:

const arrayPersonas = [
    { nombre: "Pepe", apellido: "Argento", edad: 50 },
    { nombre: "Moni", apellido: "Argento", edad: 40 },
    { nombre: "Coky", apellido: "Argento", edad: 17 },
    { nombre: "Paola", apellido: "Argento", edad: 15 }, { nombre: "Fatiga", apellido: "Argento", edad: 9 }

]

const archivoArgento = "./archivo-argento.json"

//De esta forma lo guardamos
const guardarArchivos = async () => {
    await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas, null, 2))

}

guardarArchivos();

//lo recuperamos:

const leerArchivos = async () => {
    const respuesta = await fs.promises.readFile(archivoArgento, "utf-8");
    const nuevoArray = JSON.parse(respuesta);
    console.log(nuevoArray)
}
leerArchivos();


// //Modulos

const operaciones = require("./operaciones.js");

//require es una funcion que me permite cargar o "requerir" algun modulo en particular.

console.log(operaciones.suma(10, 5));
console.log(operaciones.resta(25, 10));
console.log(operaciones.multi(2, 5));
console.log(operaciones.division(10, 5));