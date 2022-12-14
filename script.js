
let frutas = [
    {
    Nombre: "papaya",
    precio: 25,
    beneficio: 'Protege el corazon',
    id: 5,
    stock: 40 + " uni.",
    lugar: 'Chiclayo',
    },
    {
        Nombre: "mango",
        precio: 20,
        beneficio: 'Protege el higado',
        id: 1,
        stock: 41 + " uni.",
        lugar: 'Iquitos',
    },
    {
        Nombre: "naranja",
        precio: 13,
        beneficio: 'Protege el riñon',
        id: 2,
        stock: 56 + " uni.",
        lugar: 'cuzco',
    },
    {
        Nombre: "fresa",
        precio: 19,
        beneficio: 'Protege el corazon',
        id: 3,
        stock: 23 + " uni.",
        lugar: 'cajamarca',
    },
    {
        Nombre: "uva",
        precio: 9,
        beneficio: 'Protege los pulmones',
        id: 4,
        stock: 37 + " uni.",
        lugar: 'Lima',
    },
    {
        Nombre: "platano",
        precio: 25,
        beneficio: 'Protege el corazon',
        id: 6,
        stock: 15 + " uni.",
        lugar: 'Callao',
    },
    {
        Nombre: "melon",
        precio: 25,
        beneficio: 'Protege la circulacion sanguinea',
        id: 7,
        stock: 38 + " uni.",
        lugar: 'Arequipa',
    }
]

let nombreFruta = prompt("Ingrese nombre de la fruta")
let frutaBuscada = frutas.find(frutas => frutas.Nombre === nombreFruta)
alert(nombreFruta + " tiene un stock de " + frutaBuscada.stock)