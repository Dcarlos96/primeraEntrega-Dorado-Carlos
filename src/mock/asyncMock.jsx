
const productos = [
    {
        id: "01",
        name: "Camiseta de Argentina",
        description: "Descripción del producto 1",
        price: 100000,
        stock: 120,
        category: ["Camisetas y Musculosas", "Ofertas"],
        images: [
            "https://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=true",
            
        ]
    },
    {
        id: "02",
        name: "Joggin Argentina",
        description: "Descripción del producto 2",
        price: 120000,
        stock: 40,
        category: "jogging",
        images: [
            "https://indumentarialegolf.com/wp-content/uploads/2025/07/IMG_20250708_154217-scaled.jpg"
            
        ]
    },
    {
        id: "03",
        name: "Short de Argentina",
        description: "Descripción del producto 3",
        price: 80000,
        stock: 50,
        category: ["Shorts y Joggins", "Ofertas"],
        images: [
            "https://production.cdn.vaypol.com/variants/lqfnajma3cn979mhhvxxc2dwu4qz/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
            
        ]
    },
    {
        id: "04",
        name: "Musculosa Argentina",
        description: "Descripción del producto 4",
        price: 100000,
        stock: 240,
        category: "Camisetas y Musculosas",
        images: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/b7c37b03757d40eabacedaecc8b54f6c_9366/Camiseta_sin_mangas_seleccion_Argentina_26_Tiro_Azul_JY7038_01_laydown.jpg",
            
        ]
    },
]


let error = false

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(productos)
            } else {
                reject("Error al obtener los productos")
            }    
        }, 2000)
    })
}
export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                let prod = productos.find((prod)=> prod.id === id)
                resolve(prod)
            } else {
                reject("Error al obtener los productos")
            }    
        }, 2000)
    })
}