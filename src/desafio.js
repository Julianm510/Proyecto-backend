import fs from "fs/promises";
class ProductManager {
    // static ultId = 0;
    constructor(path) {


        this.id = 0;
        this.path = path;
    }
    //validaciones
    //1) validamos que los campos se agregaron:
    async addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos deben ser obligatorios")
            return;
        }
        const products = await this.getProducts();
        //validamos que el código sea unico
        if (products.some(item => item.code === code)) {
            console.log("Atención el código debe ser unico")
            return;
        }

        const newProduct = {
            // id: ++ProductManager.ultId,
            id: this.id,
            title,
            description,
            price,
            img,
            code,
            stock
        }
        //lo agrego al array
        products.push(newProduct);
        this.id++;
        await this.saveProducts(products);

    }

    async saveProducts(products) {
        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            return JSON.parse(data);
        } catch {
            return [];
        }

    }





    async getProduct() {
        return await this.getProducts();

    }


    async getProductById(id) {
        const productos = await this.getProducts();
        const product = productos.find(item => item.id === id)

        if (!product) {
            console.log("Producto no encontrado")
        } else {
            console.log("Producto encontrado", product)
        }
    }

    async updateProduct(id, updateFields) {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            const products = JSON.parse(data);

            const index = products.find(p => p.id === id)
            if (!index) console.log("producto no encontrado")



            products[index] = {
                ...products[index],
                ...updateFields
            }

            await fs.readFile("./productos.json", JSON.stringify(products, null, 2))
            console.log("producto actualizado correctamente");



        } catch (error) {
            console.log(`no se pudo actualizar el producto`)
        }
    }

}


// const productos = await this.getProducts();
// const nuevosProducts = productos.filter(item => item.id !== id)


// if (productos.length === nuevosProducts.length) {
//     console.log("producto no encontrado")
// } else { console.log("producto eliminado", nuevosProducts) }

// await this.saveProducts(nuevosProducts);





// try {
//     await fs.unlink("./productos.json");
//     console.log("Archivo eliminado");
// } catch (error) {
//     console.log("El archivo no existe o ya fue eliminado");
// }

const manager = new ProductManager("./productos.json")



// await manager.addProduct("Producto prueba", "este es un producto de prueba", 500, "no img", "abc123", 25)
await manager.addProduct("fideos", "mostacholes", 1000, "no img", "abc128", 55)
await manager.addProduct("arroz", "doble carolina", 1500, "no img", "abc125", 55)
// await manager.addProduct("mostacholes", 1000, "no img", "abc124", 55)
// await manager.addProduct("arroz", "doble carolina", 1500, "no img", "abc120", 55)
// await manager.addProduct("arroz gallo", "doble carolina", 1500, "no img", "abc127", 70)
// await manager.addProduct("coca cola", "2Lts", 3500, "no img", "abc129", 100)



console.log(await manager.getProduct())

// await manager.getProductById(0)
// await manager.deleteProduct(1)
await manager.updateProduct(1, {
    price: 5000,
    stock: 20
});