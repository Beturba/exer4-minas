const valorProduto= parseInt(prompt("Digite aqui um número: "));
console.log(valorProduto);

const compra1 = valorProduto * 0.45; 
console.log(compra1);

const compra2 = valorProduto * 0.30;
console.log(compra2);

const lucro1 = compra1 + valorProduto;
console.log(lucro1);

const lucro2 = compra2 + valorProduto;
console.log(lucro2);

if( valorProduto < 20){
    console.log(`O produto deve ser vendido a ${lucro2}`);
}
else{
    console.log(`O produto deve ser vendido ${lucro1}`);
}