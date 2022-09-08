addEventListener("DOMContentLoaded",()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números

    let num1= Number(prompt("ingrese el numero 1", 2));
    let num2= Number(prompt("ingrese el numero 2", 2)); 
    console.log(`la suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`la resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`la multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`la division es ${num1} / ${num2} = ${num1 / num2}`);
})