const  suma   =  ( a , b )  =>  a  +  b ;
const  resta  =  ( a , b )  =>  a  -  b ;
const  iva    =  x  =>  x  *  0.21 ;

let  precioProducto   =  2900 ;
let  ​​descuento  =  40 ; 

let  nuevoPrecio  =  resta ( suma ( precioProducto ,  iva ( precioProducto ) ) ,  descuento ) ;
 
console.log(nuevoPrecio);