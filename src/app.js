//* CLASE8 **/

//TEMAS

//1) Express Router
//2) Middleware
//3) Servicios de archivos estaticos (PUBLIC)
//4) Multer
//5) Primera Pre entrega del Proyecto Final

//Expres Router: herramiente que me permite separar mis rutas en distintos modulos.

//Ejercicios de practica: Mascotas y Usuarios.

import express from "express";
const app = express();
const PUERTO = 8080;

//para inportar con Common JS:
//const express = require("express");


//vincular las rutas:
import userRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";


//Le podemos decir al servidor que vamos a trabajar con JSON y  datos complejos.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", petsRouter);


//Midleware de terceros: vamos a instalar multer que me permite cargar archivos al servidor.

//A) instalamos: npm i multer
//B) Importamos el modulo:

import multer from "multer";

// Importacion con Common JS:
// const multer = require("multer");

//1) Generamos una constante "upload", que almacenara toda la configuracion de multer.
//2) Creamos una ruta para cargar los archivos.

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/img");
        //Carpeta donde se guardan las imagenes

    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //Mantengo el nombre original

    }
})

const upload = multer({ storage });
//Version basica.

app.post("/upload", upload.single("imagen"), (req, res) => {
    res.send("Imagen creada")
})


//No olvidar el listen

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto:${PUERTO}`)
})

//SERVICIOS DE ARCHIVOS ESTATICOS:
//Express nos permite tomar archivos estaticos, es decir archivos que no cambian, como html, css, imagenes, etc.
//Estos recursos son visibles para el usuario.

//Si yo quiero que al ingresar al localhost:8080 me muestre mi index.html, primero tengo que convertir a la carpeta public en un recurso estatico y lo hago de esta manera:
//app.use(express.static("public"));

//Prefijo virtual: si queremos que la carpeta public se llame de otra forma, podemos cambiarlo de esta manera:

app.use("/branca", express.static("public"));
