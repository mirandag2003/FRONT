const somar = document.getElementById("alterar")

function mudarCor(){
    const caixa = document.getElementById("mydiv")
    if(caixa.style.backgroundColor == 'red'){
        caixa.style.backgroundColor = 'blue'
    }else{
        caixa.style.backgroundColor = 'red'
    }

}

alterar.addEventListener(`click`,mudarCor)

