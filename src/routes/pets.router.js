//Comon JS 
//const express = require("express");

import express from "express";
const router = express.Router();

//Array de mascostas:
const pets = [];

//Rutas mascotas:

//Creamos una ruta para obtener el listado de mascostas:

router.get("/api/pets", (req, res) => {
    res.send(pets);
})

router.post("/api/pets", (req, res) => {
    const nuevaMascota = req.body;
    pets.push(nuevaMascota);
    res.send({ message: "Mascosta creada correctamente" });
})

//Tenemos que exportarlo:
export default router;

//Common JS:
//module.export = router;