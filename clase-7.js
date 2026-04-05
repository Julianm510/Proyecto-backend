//CLASE 7 - EXPRESS AVANZADO

//TEMAS

//1) Codigos de estado.
//2) ¿Que es una API?
//3) API Rest.
//4) Metodos de la peticion.
//5) Postman.
//6) Practicamos GET - POST - PUT - DELETE


//Recordemos: el servidor se comunica con el cliente por medio del modelo "cliente-servidor", en donde el cliente hace peticiones = request y el servidor da respuestas = response. Esta comunicacion se realiza bajo el protocolo HTTP.

//1) Codigo de estado:

//Se dividen en 5 categorias:

//Los que comienzan con 1xx: son respuestas informativas.
//Los que comienzan con 2xx: son respeustas exitosas, la peticion fue recibida, entendida y aceptada.
//Los que comienzan con 3xx: redirecciones, el cliente necesita realizar algunas acciones adicionales.
//Los que comienzan con 4xx: son errores del cliente.
//Los que comienzan con 5xx: son errores del servidor.

//Los mas utilizados:
//200: la peticion fue exitosa
//400: bad request
//401: acceso no autorizado
//403: tus credenciales no te dan permiso para ingresar a ese recuros
//404: not found, recurso no encontrado
//500: error interno del servidor

//2) ¿Que es una API?
//API es el acronimo de Application Programing Interface = Interfaz de programacion de aplicaciones.
//Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse para trabajar juntos.

//Los formatos mas importantes:
//JSON: es un formate de texto sencillo para el intercambio de datos.
//XML: es un lenguaje de marcado creado para almacenar e intercambiar informacion.

///////////////////////////////////
//importando con Module (debemos agregar "type": "module" en package.json)

import express from "express";
const app = express();
const PUERTO = 8080;
//sino - const express = require("express"); (Common JS)


//Middleware
app.use(express.json())
//le decimos a la API voy a utilizar JSON para mis datos.

//le dice al servidor que vamos a trabajar con datos complejos, es decir recibir por ejemplo varias querys.
app.use(express.urlencoded({ extended: true }));

//Array de clientes:

const clientes = [
    { id: 1, nombre: "Diego", apellido: "Maradona" },
    { id: 2, nombre: "Michael", apellido: "Jordan" },
    { id: 3, nombre: "Martin", apellido: "Palermo" },
    { id: 4, nombre: "Mike", apellido: "Tyson" },
    { id: 5, nombre: "Angus", apellido: "Young" },

]

//Rutas

//Metodo GET
app.get("/clientes", (req, res) => {
    try {

        res.send(clientes)
    } catch (error) {
        res.send(error);
    }
})

//Version con limite en el retorno de los productos

app.get("/conlimite/:limit", (req, res) => {
    //let limit = req.params.limit;

    //otra forma de hacerlo
    try {
        let { limit } = req.params;

        const arrayConLimites = clientes.slice(0, parseInt(limit));
        res.send(arrayConLimites);
    } catch (error) {
        console.log(error)
    }
})

//retorno un cliente por id

app.get("/cliente/:id", (req, res) => {
    let { id } = req.params;
    const clientePorId = clientes.find(cliente => cliente.id == id);
    if (clientePorId) {
        res.send(clientePorId)
    } else {
        res.send(`El cliente no existe`)
    }
})

//Trabajamos con metodo POST

app.post("/clientes", (req, res) => {
    const body = req.body;
    const clienteNuevo = {
        id: clientes.length + 1,
        ...body
    }

    clientes.push(clienteNuevo);
    console.log(clientes);
    res.status(201).send({ message: "cliente nuevo creado" });


})

//Vamos a actualizar un dato: PUT

app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido } = req.body;

    //tengo que encontrar el cliente con este id:

    const clienteIndex = clientes.findIndex(cliente => cliente.id == id);

    if (clienteIndex !== -1) {
        //Si el cliente existe, actualizo los datos:
        clientes[clienteIndex].nombre = nombre;
        clientes[clienteIndex].apellido = apellido;
        console.log(clientes);

        res.status(201).send({ message: "cliente actualizado" });


    } else {
        //si el cliente no se encuentra tiro este mensaje
        res.status(404).send({ message: "cliente no encontrado" });
    }

})


//Vamos a borrar un recurso: DELETE

app.delete("/:id", (req, res) => {
    let { id } = req.params;
    console.log(id)

    //Una vez que tengo el ID, lo voy a buscar en mi array:
    const clienteIndex = clientes.findIndex(cliente => cliente.id == id)

    if (clienteIndex !== -1) {
        //Si el cliente existe, lo elimino:
        clientes.splice(clienteIndex, 1);

        console.log(clientes);

        res.status(201).send({ message: "cliente eliminado" });
    } else {
        //si el cliente no se encuentra tiro este mensaje
        res.status(404).send({ message: "cliente no encontrado" });
    }

})







//NO OLVIDAR LISTEN

app.listen(PUERTO, () => {
    console.log(`escuchando en el http://localhost:${PUERTO}`);
})

