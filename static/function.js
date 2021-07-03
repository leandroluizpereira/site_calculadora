function btnInsert(num){

   var numero = document.getElementById('text').innerHTML;
   document.getElementById('text').innerHTML = numero + num;


}

function limpar(){

    document.getElementById("text").innerHTML="";
}


function back(){
    var result =document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = result.substring(0, result.length -1);

}


function resultado(){

    var  resultado = document.getElementById("text").innerHTML
    if(resultado){
        document.getElementById('text').innerHTML = eval(resultado);
    }
}