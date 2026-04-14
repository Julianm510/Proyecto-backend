import express from "express";
const router = express.Router();

let arrayProductos = [
    { nombre: "Fideos", descripcion: "Moñitos", precio: 100 },
    { nombre: "Arroz", descripcion: "Carnaroli", precio: 150 },
    { nombre: "Yerba", descripcion: "Playadito", precio: 200 },
    { nombre: "Coca", descripcion: "Vidrio", precio: 300 },

];

//Ruta

router.get("/", (req, res) => {
    const usuario = {
        nombre: "Julián",
        apellido: "Muriel",
        mayorEdad: false
    }
    res.render("index", { usuario, arrayProductos, titulo: "Plantillita" });
})

router.get("/contacto", (req, res) => {
    res.render("contacto")
})

router.get("/asd", (req, res) => {
    res.render("asd")
})

export default router;