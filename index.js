let turno = true
let vitorias = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
]
let jogadasX = []
let jogadasO = []
let preenchido = []

let vitoria = false

document.addEventListener("click", (event) => {
  if(event.target.matches(".bloco")){
    let id = event.target.id
    !vitoria ? jogar(parseInt(id)) : null
  }
})

function jogar(id){ 
  if (!preenchido.includes(id)){
    let celula = document.getElementById(id)
    celula.style.cursor = "no-drop" 
    celula.innerHTML = turno ? "X" : "O"
    preenchido.push(id)
    turno ? jogadasX.push(id) : jogadasO.push(id)
    verificarVitoria(turno)
    turno = !turno
  }
}

function verificarVitoria(turno){
  jogador = turno ? jogadasX : jogadasO
  let acertos = 0

  vitorias.forEach((sequencia) =>{
    sequencia.forEach((numero) =>{
      acertos += jogador.includes(numero) ? 1 : 0  
    })
    if(acertos == 3){vitoria=true}
    acertos = 0
  })

  if(vitoria){
    let alteranativa = turno ? "X" : "O"
    anunciar(alteranativa)
  }

  if(preenchido.length == 9 && vitoria == false){
    anunciar("velha")
    vitoria = true
  }
}
function anunciar(campeao){
  let anuncio = document.getElementById("anuncio")
  let texto = document.getElementById("texto")
  let btnReiniciar = document.getElementById("confirmar")
  texto.innerHTML = `Vitoria jogador: ${campeao}`
  anuncio.style.display = "block"
  btnReiniciar.addEventListener("click", () => {
    location.reload()
  })
}