import { addDoc, collection } from "firebase/firestore"
import db from "src/db/db"

const productos = [
  {
    id: "121281-0",
    nombre: "Vaso de Batman - The Batman",
    descripcion: "Material : 100% Cristal",
    precio: 180.00,
    categoria: "DC",
    categoriaTienda: "favoritos",
    stock: 10,
    imagen: "https://static1.funidelia.com/509959-f6_list/vaso-de-batman-the-batman.jpg"
  },
  {
    id: "56946-0",
    nombre: "Gorra de Deadpool",
    descripcion: "Material : 80% Poliéster, 20% Algodón",
    precio: 394.00,
    categoria: "marvel",
    categoriaTienda: "favoritos",
    stock: 3,
    imagen: "https://static1.funidelia.com/58485-f6_list/gorra-de-deadpool.jpg"
  },
  {
    id: "118312-0",
    nombre: `Camiseta Rick & Morty "I'm Pickle Rick"`,
    descripcion: `Material : 100% Algodón`,
    precio: 208.00 ,
    categoria: "RickyMorty",
    categoriaTienda: "nuevo",
    stock: 5,
    imagen: "https://static1.funidelia.com/490822-f6_list/camiseta-rick--morty-im-pickle-rick.jpg"
  },
  {
    id: "120389-0",
    nombre: `Sudadera Mario champiñón rojo - Super Mario`,
    descripcion: `Material : 50% algodón 50% poliéster`,
    precio: 1200.00 ,
    categoria: "nintendo",
    categoriaTienda: "nuevo",
    stock: 5,
    imagen: "https://static1.funidelia.com/504873-f6_list/sudadera-mario-champinon-rojo-super-mario.jpg"
  },
  {
    id: "121337-0",
    nombre: `Taza 3D Pikachu - Pokémon`,
    descripcion: `Incluye: Taza 3D de cerámica de 500ml en caja de regalo`,
    precio: 500.00 ,
    categoria: "nintendo",
    categoriaTienda: "nuevo",
    stock: 15,
    imagen: "https://static1.funidelia.com/512434-f6_list/taza-3d-pikachu-pokemon.jpg"
  }
]

const seedProducts = () => {
  productos.map( ({ id, ...rest}) => {
    const productosRef = collection(db, "productos")
    addDoc(productosRef, rest)
  })
  console.log("productos subidos correctamente")
}

export default seedProducts