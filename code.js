jogadas = ['pedra.svg', 'papel.svg', 'tesoura.svg']
let pontos = 0
    // pedra > tesoura 
    // tesoura > papel 
    // papel > pedra 
let container_modal = document.querySelector('.container_modal')

let decisao = document.querySelector('.decisao')
let valor = document.querySelector('.valor')
let vai = document.querySelector('.vai')
    //players
let jogador = document.querySelector('.jogador')
let casa = document.querySelector('.casa')
let player_local = document.querySelector('.player_local')
let casa_local = document.querySelector('.casa_local')
    //escolha
let jogada = document.createElement('img')
let jogada_casa = document.createElement('img')
player_local.classList.add('formatar')
casa_local.classList.add('formatar')



selecionar = (i) => {

    container_modal.classList.add('show')
    vai.classList.add('off')

    function aleatorio(min = 0, max = 3) {
        num = Math.random() * (max + min)
        return Math.floor(num)
    }

    let escolha = aleatorio(0, 3)
    console.log(jogadas[escolha])
    console.log(i)

    //jogador ganha  
    if (i == 'papel.svg' & jogadas[escolha] == 'pedra.svg') {
        console.log('Você venceu')
        pontos += 1
        valor.innerHTML = pontos
        decisao.innerHTML = 'VOCÊ VENCEU'
        jogada.src = "papel.svg"
        player_local.classList.add('papel')
        player_local.insertAdjacentElement("beforeend", jogada)
        jogada_casa.src = 'pedra.svg'
        casa_local.classList.add('pedra')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)


    } else if (i == 'tesoura.svg' & jogadas[escolha] == 'papel.svg') {
        console.log('você venceu')
        pontos += 1
        valor.innerHTML = pontos
        decisao.innerHTML = 'VOCÊ VENCEU'
        jogada.src = `tesoura.svg`
        player_local.classList.add('tesoura')
        player_local.insertAdjacentElement("beforeend", jogada)
        jogada_casa.src = 'papel.svg'
        casa_local.classList.add('papel')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)

    } else if (i == 'pedra.svg' & jogadas[escolha] == 'tesoura.svg') {
        console.log('você venceu')
        pontos += 1
        valor.innerHTML = pontos
        decisao.innerHTML = 'VOCÊ VENCEU'
        jogada.src = "pedra.svg"
        player_local.classList.add('pedra')
        player_local.insertAdjacentElement("beforeend", jogada)
        jogada_casa.src = 'tesoura.svg'
        casa_local.classList.add('tesoura')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)
    }

    //script ganha
    if (jogadas[escolha] == 'papel.svg' & i == 'pedra.svg') {
        console.log('você perdeu')
        decisao.innerHTML = 'VOCê PERDEU'
        jogada_casa.src = 'papel.svg'
        casa_local.classList.add('papel')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)
        jogada.src = "pedra.svg"
        player_local.classList.add('pedra')
        player_local.insertAdjacentElement("beforeend", jogada)

    } else if (jogadas[escolha] == 'tesoura.svg' & i == 'papel.svg') {
        console.log('você perdeu')
        decisao.innerHTML = 'VOCê PERDEU'
        jogada_casa.src = 'tesoura.svg'
        casa_local.classList.add('tesoura')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)
        jogada.src = "papel.svg"
        player_local.classList.add('papel')
        player_local.insertAdjacentElement("beforeend", jogada)

    } else if (jogadas[escolha] == 'pedra.svg' & i == 'tesoura.svg') {
        console.log('você perdeu')
        decisao.innerHTML = 'VOCê PERDEU'
        jogada_casa.src = 'pedra.svg'
        casa_local.classList.add('pedra')
        casa_local.insertAdjacentElement('beforeend', jogada_casa)
        jogada.src = `tesoura.svg`
        player_local.classList.add('tesoura')
        player_local.insertAdjacentElement("beforeend", jogada)

    }

    // empate
    if (i === jogadas[escolha]) {
        console.log('empate')
        decisao.innerHTML = 'EMPATE'
        jogada.src = `${jogadas[escolha]}`
        jogada_casa.src = `${jogadas[escolha]}`
        jogada_casa.classList.add('empate')
        player_local.insertAdjacentElement("beforeend", jogada)
        casa_local.insertAdjacentElement("beforeend", jogada_casa)

    }
    jogar = () => {
        container_modal.classList.remove('show')
        decisao.innerHTML = ''
        jogada.src = ""
        jogada_casa.src = ''
        player_local.classList.remove('tesoura')
        player_local.classList.remove('papel')
        player_local.classList.remove('pedra')
        casa_local.classList.remove('tesoura')
        casa_local.classList.remove('papel')
        casa_local.classList.remove('pedra')
        vai.classList.remove('off')
    }
}