import express from "express";
import multer from "multer";

const app = express();
const PUERTO = 8080;

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

app.post("/upload", upload.array("imagen"), (req, res) => {
    res.send("Imagen cargada!!!");

})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en: ${PUERTO}`)
})