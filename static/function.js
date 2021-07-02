function btnMais(){
    alert("clicou +");

    document.getElementById("text").innerHTML="+";

}


function resultado(){
    
 
    alert("resultado  ");
    var  resultado = document.getElementById("text").value;
    document.getElementById("text").eval(resultado);
}