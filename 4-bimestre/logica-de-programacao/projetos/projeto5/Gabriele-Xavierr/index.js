const prompt = require("prompt-sync")()


const nomeTurno = prompt("Digite o nome do turno: ")
const meta = Number(prompt("Digite a meta de produção: "))
const producaoInicial = Number(prompt("Digite a produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite a quantidade de itens por caixa: "))


let producaoFinal = producaoInicial
while (producaoFinal < meta) {
    producaoFinal++
}

let caixasNecessarias = 0
let itensRestantes = producaoFinal
do {
    caixasNecessarias++
    itensRestantes -= pecasPorCaixa
} while (itensRestantes > 0)

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"


const resumo = `
========================================
           RESUMO DO TURNO
========================================
Turno: ${nomeTurno}
Produção Final: ${producaoFinal} unidades
Caixas Necessárias: ${caixasNecessarias} caixas
Situação: ${situacaoMeta}
========================================`

console.log(resumo)


module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
};