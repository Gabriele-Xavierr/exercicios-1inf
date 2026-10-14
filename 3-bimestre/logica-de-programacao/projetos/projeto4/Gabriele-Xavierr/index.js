
const cliente = "Patrícia Gomes"
const opcaoMenu = 2
const quantidade = 4
const formaPagamento = "cartao"
const statusPedido = "aprovado"


let prato
switch (opcaoMenu) {
    case 1:
        prato = "Açaí 300ml"
        break
    case 2:
        prato = "Açaí 500ml"
        break
    case 3:
        prato = "Vitamina"
        break
    case 4:
        prato = "Tapioca"
        break
    default:
        prato = "Opção inválida"
        break
}


let precoUnitario;
switch (opcaoMenu) {
    case 1:
        precoUnitario = 14
        break
    case 2:
        precoUnitario = 20
        break
    case 3:
        precoUnitario = 12
        break
    case 4:
        precoUnitario = 10
        break
    default:
        precoUnitario = 0
        break
}


const subtotal = precoUnitario * quantidade


const freteStatus = subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 80 ? 0 : 12

let pagamentoMensagem
switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
        break
}

let descontoPercentual
switch (formaPagamento) {
    case "pix":
    case "dinheiro":
        descontoPercentual = 15
        break
    case "cartao":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
        break
}

const desconto = (subtotal * descontoPercentual) / 100;
const total = subtotal - desconto + frete


let statusMensagem;
switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
        break
}
const resumo = `--- RESUMO DO PEDIDO ---
Cliente: ${cliente}
Item: ${prato} (Qtd: ${quantidade})
Subtotal: R$ ${subtotal}
Frete: ${freteStatus} (R$ ${frete})
Forma de Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto} (${descontoPercentual}%)
Total a Pagar: R$ ${total}
Situação: ${statusMensagem}`


module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
};