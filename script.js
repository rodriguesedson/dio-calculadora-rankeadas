// Calculadora de partidas rankeadas

function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  switch(true) {
    case saldoVitorias < 10:
      nivel = "Ferro";
      break;
    case saldoVitorias < 20:
      nivel = "Bronze";
      break;
    case saldoVitorias < 50:
      nivel = "Prata";
      break;
    case saldoVitorias < 80:
      nivel = "Ouro";
      break;
    case saldoVitorias < 90:
      nivel = "Diamante";
      break;
    case saldoVitorias < 100:
      nivel = "Lendário";
      break;
    case saldoVitorias >= 101:
      nivel = "Imortal";
      break;
  }

  return `"O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}"`;
}

const heroi_1 = calcularRankeadas(60, 3);

console.log(heroi_1);
