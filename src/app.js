//1) ¿Que es un servidor?
//2) Protocolo HTTP.
//3) Modulo nativo HTTP.
//4) Express JS.
//5) Objet Request.
//6) Desafio N°3.

////////////////////////////////////////////////

//1) ¿Que es un servidor?
// Software o Hardware que almacena y administra recursos. Estos recursos pueden ser imagenes, archivos, sitios webs, videos, datos, jueguitos. su funcion es responder a las peticiones de los clientes. Aclaramos: el servidor puede responder a multiples clientes al mismo tiempo. a esta relacion se la conoce como modelo Cliente-Servidor.

//Cliente = request
//Servidor = response

// Se comunican mediante el protocolo HTTP.

//2) Modulo nativo HTTP.

//Primer paso: importar el modulo nativo HTTP.

// const http = require("http")

//segundo paso: vamos a crear el servidor web. para esto vamos a usar un metodo que se llama createServer(). Este metodo recibe por parametro una funcion callback que va aser ejecutada cada vez que se realcie una peticion al servidor. esta funcion recibe dos parametros: request(pedido) y response(respuesta).


// const server = http.createServer((request, response) => {
//     console.log("se realizo una peticion al server");
//     response.end("Mi primer hola mundo desde backend");
// })

//Tercer paso: vamos a poner a escuchar a nuestro servidor en un puerto especifico de la pc.


// server.listen(PUERTO, () => {
//     console.log(`Escuchando en el http://localhost:${PUERTO}`);
// })





//4) Express JS: es un framework minimalista de Node js que nos permite crear servidores de una forma mucho mas sencilla.

//Instalacion: npm install express

//Importamos el modulo:
const PUERTO = 8080;
const express = require("express");

//Creacion de una app de express.
const app = express();

//Rutas(GET, POST, PUT, DELETE)

app.get("/", (req, res) => {
    //Cuanto utilizo "/" estoy haciendo referencia a la ruta raiz de mi aplicacion. La principal.

    res.send("escuchando express")

})

//Los metodos HTTP o verbos son los que nos permiten indicarle al servidor que tipo de accion queremos realizar.los mas utilizados son:
//GET: lo usamos para pedir datos el server.
//POST: lo usamos para enviar datos al server.
//PUT: lo usamos para actualizar datos del servidor.
//DELETE: lo utilizamos para eliminar datos del servidor.

app.listen(PUERTO, () => {
    console.log(`Escuchando el puerto http://localhost:${PUERTO}`)
})
//(listen siempre va al final)

//Practicamos con otras rutas:

// app.get("/tienda", (req, res) => {
//     res.send("bienvenidos a la tienda")
// })

// app.get("/productos", (req, res) => {
//     res.send("Productos disponibles")
// })

//5) Objetos request: es un objeto que representa la peticion que realiza el cliente al servidor. este objeto tiene informarción sobre la peticion que se realizo, por ej la url, el metodo, los parametros, el cuerpo..

const misProductos = [
    { id: 1, nombre: "Fideos", precio: 2000 },
    { id: 2, nombre: "Arroz", precio: 1500 },
    { id: 3, nombre: "Lentejas", precio: 200 },
    { id: 4, nombre: "Yerba", precio: 500 },
    { id: 5, nombre: "Fernet", precio: 5000 },
    { id: 6, nombre: "Gancia", precio: 2500 },
    { id: 7, nombre: "Cerveza", precio: 1200 }

]

//Vamos a crear una ruta nueva, que se va a llamar "productos" y nos retornara a todos los productos del array:

// app.get("/productos", (req, res) => {
//     res.send(misProductos);
// })

//req.params = contiene los parametros de la ruta. por ejemplo si tenemos la ruta /productos/:id, podemos acceder a ese id de la siguiente manera: req.params.id

// app.get("/productos/:id", (req, res) => {
//     let id = parseInt(req.params.id);
//     //Siempre que recuperamos un dato de los params es un "STRING"!!! 
//     //Para solucionar esto se puede parsear(parseInt )

//     const producto = misProductos.find(producto => producto.id === id);


//     if (producto) {
//         res.send(producto)
//     } else {
//         res.send("El producto no se encuentra en stock")
//     }
// })


//res.query= se refiere a las multiples consultas que se pueden hacer en determinada ruta (endpoint). Simplemente le tenemos que colocar el simbolo de interrogacion (?) y luego el nombre de la consulta.



app.get("/productos", (req, res) => {
    // let nombre = req.query.nombre;
    // let precio = req.query.precio;

    //desestructurandolo mejor

    let { nombre, apellido } = req.query;

    res.send(`Producto ${nombre}
        ${apellido}`)
})

// app.get("/productos/:nombre", (req, res) => {
//     let nombre = req.params.nombre;

//     const producto = misProductos.find(p => p.nombre === nombre)
//     if (producto) {
//         res.send(producto)
//     } else {
//         res.send(`producto no encontrado`)
//     }
// })


