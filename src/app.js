import express from "express";
// import { ExpressHandlebars } from "express-handlebars";
const app = express();
const PUERTO = 8080;
import viewsRouter from "./routes/views.router.js";

//Midleware
app.use(express.static("./src/public"));

//Me traigo el modulo de Express-Handlebars
import exphbs from "express-handlebars";
//Common JS 
//const hxphbs = require("express-handlebars");

//Configuramos el motor de plantillas:
app.engine("handlebars", exphbs.engine());
//Le decimos a express que cuando vea un archivo de extension "handlebars" utilice el motor de plantillas: "handlebars".

app.set("view engine", "handlebars");
//Nuevamente le decimos que la vista de nuestra aplicacion es desarrollada con Handlebars.

app.set("views", "./src/views");
//Aca le decimos donde tiene que ir a buscar los archivos "handlebars", si no no los encuentra.


app.use("/", viewsRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})  