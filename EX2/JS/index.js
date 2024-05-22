const contador = document.getElementById('contador')
let cont = 0

function incrementar(){
    cont++
    contador.innerHTML = `O contador esta em ${cont} cliques`
}

function zerar(){
    cont = 0 
    contador.remove()
}