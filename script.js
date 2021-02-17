document.querySelector("#button").onclick = function() {
    var moeda = document.querySelector("#campo").value
    var euro = 6.50;
    var calculo = (moeda / euro)
    result.innerHTML = "<h1>"+ calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) +"</h1>";
    result.style = "text-align: center; font-family: arial;";
};