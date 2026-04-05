import express from "express";
import fs, { read } from "fs";



const app = express();
const PUERTO = 8080;


const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error)
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
};

readData();



app.get("/productos", (req, res) => {
    const data = readData();
    res.json(data.productos);

})

app.get("/productos/:id", (req, res) => {
    const data = readData();
    const { id } = req.params;
    const productoById = data.productos.find(producto => producto.id == id)
    res.send(productoById)
})

app.post("/", (req, res) => {
    const productoNuevo = req.body;
    const data = readData();
    productoNuevo.push(data);
    console.log(data)

})

app.listen(PUERTO, () => {
    console.log(`Server listening on port:${PUERTO}`)
})