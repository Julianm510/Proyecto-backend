import express from "express";
const router = express.Router();

const users = [];

router.get("/api/users", (req, res) => {
    res.send(users);
})

//Ruta para cargar usuarios nuevos
router.post("/api/users", (req, res) => {
    const nuevoUser = req.body;
    users.push(nuevoUser);
    res.send({ message: "Usuario creada correctamente" });
})

export default router;


