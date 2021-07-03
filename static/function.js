function btnInsert(num){

   var numero = document.getElementById('text').innerHTML;
   document.getElementById('text').innerHTML = numero + num;


}

function limpar(){

    document.getElementById("text").innerHTML="";
}


function resultado(){

    var  resultado = document.getElementById("text").value;
    document.getElementById("text").eval(resultado);
}