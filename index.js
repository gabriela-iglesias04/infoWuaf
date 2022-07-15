  
  /*  */

  function bienvenida (nombre , apellido){
   console.log(`Bienvenidx a Info Wuaf ${nombre} ${apellido}`);
  }
 bienvenida("tali" , "iglesias");

 const suma =(a , b) => a + b;
 const resta =(a , b)=> a - b;
 const iva = x => x * 0.21;

 let precioProducto = 2900;
 let descuento = 40;

 let nuevoPrecio = resta(suma (precioProducto , iva (precioProducto)) , descuento);
 console.log(nuevoPrecio)

 
const productos = [
  {id: 1,nombre:"curso de agresividad" , precio:1500},
  {id: 2,nombre:"curso de criar cachorro" , precio:2000},
  {id: 3,nombre:"curso de reactividad", precio:2500},
];


console.log(productos.some(elemento => elemento.nombre === "curso de reactividad"));

const actualizacion = productos.map(elemento => {
  return {
    id:elemento.id,
    nombre : elemento.nombre,
    precio: elemento.precio + 1000
  }
})

console.log(actualizacion);

const carrito = [
  { id: 1, nombre: "curso de agresividad", precio: 1500},
  {id: 2,nombre:"curso de criar cachorro" , precio:2000},
  {id: 3,nombre:"curso de reactividad", precio:2500},
];

let total= carrito.reduce ((acumulador, elemento) => acumulador + elemento.precio, 0);
console.log(total);