//CLASE 6 - SERVIDORES WEB
//TEMAS:
//1) ¿QUE ES UN SERVIDOR?
//2) PROTOCOLO HTTP.
//3) MODULO NATIVO HTTP.
//4) EXPRESS JS.
//5) OBEJCT REQUEST.
//6) DESAFIO N°3.

//primer paso: importar el modulo nativo HTTP
const http = require("http");

//Segundo paso: crear el servidor web. para esto vamos a usar un metodo que se llama createServer().este metodo rebibe por parametro una funcion Callback que va a ser ejecutada cada vez que se realice una peticion al servidor. esta funcion recibe dos parametros: Requetes,response.

// const server = http.createServer((request, response) => {
//     console.log("se realizo una peticion al servidor!")
//     response.end("mi primer hola mundo desde backend")
// })

//tercer paso: vamos a poner a escuchar a nuestro servidor en un puerto especifico de la compu.

// const PORT = 8080;

// server.listen(PORT, () => {
//     console.log(`escuchando en el http://localhost:${PORT}`);
// })

// Express JS: Es un framework minimalista de Node js que nos permite crear servidores de una forma mucha mas sencilla.




// Instalacion npm install express

// importamos el modulo:
const PUERTO = 8080;
const express = require("express");
//midleware para datos complejos(muchas querys)
// app.use(express.urlencoded({ extended: true }))

//Creacion de una app de express

const app = express();

//Rutas

app.get("/", (req, res) => {
    //cuando utilizo "/" estoy haciendo referencia a la ruta raiz de mi aplicacion. la principal.
    res.send("mi primera chamba con uso de express")
})

app.listen(PUERTO, () => {
    console.log(`escuchando en el http://localhost:${PUERTO}`);
})

app.get("/tienda", (req, res) => {
    res.send("Bienvenido a la tienda")
})

//obejto request: es un objeto que representa la peticion que realiza el cliente al servidor. este objetio tiene info sobre la peticion que se realizo, por ej la url, el metodo, los parametros, el cuerpo..

const misProductos = [
    { id: 1, nombre: "Arroz", precio: 1200 },
    { id: 2, nombre: "Fideos", precio: 1000 },
    { id: 3, nombre: "Yerba", precio: 500 },
    { id: 4, nombre: "Aceite", precio: 1500 },
    { id: 5, nombre: "Aceite", precio: 1500 },
    { id: 6, nombre: "Aceite", precio: 1500 },
    { id: 7, nombre: "Aceite", precio: 1500 },
    { id: 8, nombre: "Aceite", precio: 1500 },
    { id: 9, nombre: "Aceite", precio: 1500 },
    { id: 10, nombre: "Aceite", precio: 1500 },
    { id: 11, nombre: "Aceite", precio: 1500 },
]

app.get("/productos", (req, res) => {
    res.send(misProductos)
})

//req.params = contiene los parametros de la ruta, por ej si tenemos la ruta /productos/:id podemos acceder a ese id de la siguiente manera: req.params.id

app.get("/productos/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const producto = misProductos.find(producto => producto.id === id)

    if (producto) {
        res.send(producto)
    } else {
        res.send("Producto no encontrado")
    }
})

//req.query= se refiere a las multiples consultas que se pueden hacer en determinada ruta(endpoint). simplemente le tenemos que colocarl el simbolo de interrogacion(?) y luego el nombre de la consulta.

app.get("/product", (req, res) => {
    let limit = parseInt(req.query.limit);
    console.log(typeof limit)
    //slice devuelve una cantidad determinada del array
    let productos = misProductos.slice(0, limit);
    if (limit) {
        res.send(misProductos.slice(0, limit))

    } else {
        res.send(misProductos)
    }

})

app.get("/productos/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    const producto = await misProductos.find(producto => producto.id === id)

    if (producto) {
        res.send(producto)
    } else {
        res.send("Producto no encontrado")
    }
})