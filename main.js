<<<<<<< HEAD
addEventListener("DOMContentLoaded",()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números

    let num1= Number(prompt("ingrese el numero 1", 2));
    let num2= Number(prompt("ingrese el numero 2", 2)); 
    console.log(`la suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`la resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`la multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`la division es ${num1} / ${num2} = ${num1 / num2}`);
})
=======
<<<<<<< HEAD
addEventListener("DOMContentLoaded", (e)=>{
    //30. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
    // invertida

    // frase
    let f= prompt("Coloque la frase: ")

    console.log(`${f}`)

    let finvertido =f.split("").reverse().join("")
    console.log(`${finvertido}`)
})
=======
addEventListener("DOMContentLoaded",()=>{
    // //22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.

    // Costo de cada producto
    let p1=Number(prompt("Valor primer producto: ",69))
    let p2=Number(prompt("Valor segundo producto: ",45))
    let p3=Number(prompt("Valor tercer producto: ",69))
    let p4=Number(prompt("Valor cuarto producto: ",69))
    let p5=Number(prompt("Valor quinto producto: ",69))
    
<<<<<<< HEAD
    // operación
    let r=Number((x2-x1)**2+(y2-y1)**2)
    console.log(`La distancia de los puntos es de: ${r}`)
})
>>>>>>> 3b61eaa (Ejercicio 21)
<<<<<<< HEAD
>>>>>>> 8205e08 (Ejercicio 1)
=======
=======
    // operación del descuento y precio total
    let d1= p1-(p1*5/100)
    let d2= p1-(p2*5/100)
    let d3= p1-(p3*5/100)
    let d4= p1-(p4*5/100)
    let d5= p1-(p5*5/100)
      


    console.log(`El valor del producto es: ${d1}`)
    console.log(`El valor del producto es: ${d2}`)
    console.log(`El valor del producto es: ${d3}`)
    console.log(`El valor del producto es: ${d4}`)
    console.log(`El valor del producto es: ${d5}`)
})
>>>>>>> 1c926fb (Ejercicio 22)
>>>>>>> 65478d0 (Ejercicio 2)
