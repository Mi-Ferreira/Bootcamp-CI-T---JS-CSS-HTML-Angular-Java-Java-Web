var prazoAnos = document.getElementById("prazoAnos");
var prazoEmMeses = document.getElementById("prazoEmMeses");
var jurosAoAno = document.getElementById("jurosAoAno");
var jurosAoMes = document.getElementById("jurosAoMes");
var valor = document.getElementById("valor");
var jurosAcumulados = document.getElementById("jurosAcumulados");

function simular() {
  prazoEmMeses.valueAsNumber = prazoAnos.valueAsNumber * 12;

  jurosAoMes.valueAsNumber = (jurosAoAno.valueAsNumber + 1) ** (1 / 12) - 1;

  jurosAcumulados.valueAsNumber = 0;
  for (var i = 1; i <= prazoEmMeses.valueAsNumber; i++) {
    jurosAcumulados.valueAsNumber +=
      (valor.valueAsNumber -
        (i - 1) * (valor.valueAsNumber / prazoEmMeses.valueAsNumber)) *
      jurosAoMes.valueAsNumber;
  }

  tabela();
}

function tabela() {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("body").appendChild(table);

  let linhaDoCabecalho = document.createElement("tr");
  let coluna1 = document.createElement("th");
  coluna1.innerHTML = "Prestação";
  let coluna2 = document.createElement("th");
  coluna2.innerHTML = "Amortização";
  let coluna3 = document.createElement("th");
  coluna3.innerHTML = "Juros";
  let coluna4 = document.createElement("th");
  coluna4.innerHTML = "Total";

  linhaDoCabecalho.appendChild(coluna1);
  linhaDoCabecalho.appendChild(coluna2);
  linhaDoCabecalho.appendChild(coluna3);
  linhaDoCabecalho.appendChild(coluna4);
  thead.appendChild(linhaDoCabecalho);

  for (var i = 1; i <= 5; i++) {
    let linha = document.createElement("tr");
    let colunaUm = document.createElement("td");
    colunaUm.innerHTML = i;
    let colunaDois = document.createElement("td");
    colunaDois.innerHTML = (
      valor.valueAsNumber / prazoEmMeses.valueAsNumber
    ).toFixed(2);
    let colunaTres = document.createElement("td");
    colunaTres.innerHTML = (
      (valor.valueAsNumber -
        (i - 1) * (valor.valueAsNumber / prazoEmMeses.valueAsNumber)) *
      jurosAoMes.valueAsNumber
    ).toFixed(2);
    let colunaQuatro = document.createElement("td");
    colunaQuatro.innerHTML = (
      valor.valueAsNumber / prazoEmMeses.valueAsNumber +
      (valor.valueAsNumber -
        (i - 1) * (valor.valueAsNumber / prazoEmMeses.valueAsNumber)) *
        jurosAoMes.valueAsNumber
    ).toFixed(2);

    linha.appendChild(colunaUm);
    linha.appendChild(colunaDois);
    linha.appendChild(colunaTres);
    linha.appendChild(colunaQuatro);
    tbody.appendChild(linha);
  }
}
