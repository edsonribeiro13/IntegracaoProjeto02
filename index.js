let VendaDoCarmelito = []
let VendaDoJoao = []
let VendaDoJose = []
const option = document.getElementById('selectId')

async function buscaDadosJson() {
    VendaDoCarmelito = await fetch('./VendaDoCarmelito.json')
    .then(res => res.json())
    VendaDoJoao = await fetch('./VendaDoJoao.json')
    .then(res => res.json())
    VendaDoJose = await fetch('./VendaDoJose.json')
    .then(res => res.json())
    
    VendaDoCarmelito.forEach(item => {
        option.options.add(
            new Option(`${item.nome}`, option.options.id, false)
        )
    })
}

function mostraMelhorPreco() {
    const valorCarmelito = VendaDoCarmelito[option.selectedIndex]
    const valorJoao = VendaDoJoao[option.selectedIndex]
    const valorJose = VendaDoJose[option.selectedIndex]

    const minValor = Math.min(valorCarmelito.preco, valorJoao.preco, valorJose.preco)
    const vendaMenorValor = 
        minValor === valorCarmelito.preco
            ? 'Carmelito'
            : minValor === valorJoao.preco
                ? 'João'
                : 'José'

    document.getElementById('item').innerHTML = `Produto: ${valorCarmelito.nome}`
    document.getElementById('preco').innerHTML = `Valor: R$${minValor}`
    document.getElementById('local').innerHTML = `Local: venda do ${vendaMenorValor}`
}

buscaDadosJson()