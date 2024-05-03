let jogador = "Wellington Alves de Oliveira";
let numeroVitorias = 80;
let numeroDerrotas = 20;
let nivelRankeados = [1,2,3,4,5,6,7];
let nivel = "";

function getFirstName(nome){
    return nome.split(" ")[0]
}

function saldoRank(qtdeVitorias,qtdeDerrotas){
    return qtdeVitorias - qtdeDerrotas
}

let saldoVitorias = saldoRank(numeroVitorias,numeroDerrotas);
let nickName = getFirstName(jogador);

for(i=0; i < nivelRankeados.length; i++){
  switch(nivelRankeados[i]){
    case 1: if(saldoVitorias  <= 10){ nivel = "Ferro"} //Se vitórias for menor do que 10 = Ferro
    case 2: if((saldoVitorias >= 11) && (saldoVitorias <= 20)){ nivel = "Bronze"} //Se vitórias for entre 11 e 20 = Bronze
    case 3: if((saldoVitorias >= 21) && (saldoVitorias <= 50)){ nivel = "Prata"} //Se vitórias for entre 21 e 50 = Prata
    case 4: if((saldoVitorias >= 51) && (saldoVitorias <= 80)){ nivel = "Ouro"} //Se vitórias for entre 51 e 80 = Ouro
    case 5: if((saldoVitorias >= 81) && (saldoVitorias <= 90)){ nivel = "Diamante"} //Se vitórias for entre 81 e 90 = Diamante
    case 6: if((saldoVitorias >= 91) && (saldoVitorias <= 100)){ nivel = "Lendário"} //Se vitórias for entre 91 e 100= Lendário
    case 7: if(saldoVitorias  >= 101){ nivel = "Imortal"} //Se vitórias for maior ou igual a 101 = Imortal
  }
}


let msg = `O Herói **{ ${nickName} }** tem saldo de **{ ${saldoVitorias} }** está no nível de **{ ${nivel} }**`;

console.log(msg);