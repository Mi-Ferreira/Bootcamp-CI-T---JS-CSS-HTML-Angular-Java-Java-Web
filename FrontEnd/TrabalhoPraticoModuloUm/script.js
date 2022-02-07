var prazoAnos = document.getElementById("prazoAnos");
var prazoEmMeses = document.getElementById("prazoEmMeses");

function simular() {
  var resultadoPrazoEmMeses = prazoAnos.valueAsNumber * 12;
  prazoEmMeses.valueAsNumber = isNaN(resultadoPrazoEmMeses)
    ? ""
    : resultadoPrazoEmMeses;
}
