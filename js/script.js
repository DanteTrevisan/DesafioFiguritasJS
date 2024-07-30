let pesos = parseFloat(prompt("Cuantos pesos para comprar figuritas tenes?"));

if (pesos <= 20){
    alert("Te puedo ofrecer 2 caramelos");
}else if( pesos >= 21 && pesos <= 49){
    alert("Estas cerca pero no puedo fiarte, vuelve mañana");
}
else{
    alert("Aqui tienes tus figuritas del mundial")
}
