//Solicita al usuario que elija entre la opción 1 o 2:
//Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
//Se le debe pedir una palabra y comprobar si empieza o termina por a

function Opcion1(){
   
var num1 = prompt("Inserta primer numero");
var num2 = prompt("Inserta segundo numero");
   
   if( num1 %2 == 0 && num2 %2 ==0){
    alert("Los dos son numeros pares")

}else if(num1 %2 == 0 && num2 %2 != 0){
    alert(num1 + " Es numero par")

}else if(num1 %2 != 0 && num2 %2 == 0){
    alert(num2 + " Es numero par")

}else if(num1 %2 != 0 && num2 %2 !=0){
    alert("Ninguno es par")

}else{
    alert("Te has equivocado");
}



if( num1 %7 == 0 && num2 %7 == 0){
   alert("Los dos son multiplos de 7")

}else if(num1 %7 == 0 && num2 %7 != 0){
   alert(num1 + " Es multiplo de 7")

}else if(num1 %7 != 0 && num2 %7 == 0){
   alert(num2 + " Es multiplo de 7")

}else if(num1 %7 != 0 && num2 %7 != 0){
   alert("No son multiplo de 7")

}else{
   alert("Te has equivocado");
}
   
}

   
 
//Se le debe pedir una palabra y comprobar si empieza o termina por a  

function Opcion2(){
   
    var palabra = prompt("Inserta una palabra")
   
   for (let i = 0; i < palabra.length; i++) {
    
    if(palabra[0] == 'a' && palabra[palabra.length - 1] != 'a'){
         alert("La palabra empieza por a");
   
        }else if(palabra[palabra.length - 1] == 'a' && palabra[0] != 'a'){
     alert("La palabra termina por a");
    
    }else if(palabra[0] == 'a' && palabra[palabra.length - 1] == 'a'){
        alert("La palabra empieza y termina por a");
 
    }else{
     alert("Te has equivocado");
     
 }
 break;
}





}