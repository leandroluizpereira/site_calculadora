function btnMais(){
    alert("clicou +");

    document.getElementById("text").innerHTML="+";

}


function resultado(){
    var  resultado = document.getElementById("text");
    document.getElementById("text").eval(resultado);
}