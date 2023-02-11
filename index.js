var contador_vitoria = 0;
var contador_empate = 0;
var contador_derrota = 0;

//função para adicionar as pontuações nos INPUTS
function adicionar_vitoria(valor){
   document.getElementById("vitoria").value = valor
}
function adicionar_empate(valor){
   document.getElementById("empate").value = valor
}
function adicionar_derrota(valor){
   document.getElementById("derrota").value = valor
}

//FUNÇÃO PARA SORTEAR O VALOR DO COMPUTADOR
function gerarValor(min, max){
  return (Math.random() * (max -min) + min).toFixed()
}


//FUNÇÃO QUE IRA INICIAR O JOGO AO CLICAR NO BOTAO JOGAR
function jogar(){
  const computador = gerarValor(0, 2)
  var jogador = document.querySelector("#jogo")
  const sorteio_pc = ['Pedra', 'Papel', 'Tesoura']

  switch(jogador.value){
    case '0': alert(`Voce escolheu: Pedra \nComputador escolheu: ${sorteio_pc[computador]}`)
    break

    case '1': alert(`Voce escolheu: Papel \nComputador escolheu: ${sorteio_pc[computador]}`)
    break;

    case '2': alert(`Voce escolheu: Tesoura \nComputador escolheu: ${sorteio_pc[computador]}`)
    break
    
    default: alert("Por favor, escolha uma das opcções")


  }

  //Condição para decidir onde vai ser adicionado o valor
  if((computador == 0 && jogador.value == '2') || (computador == 1 && jogador.value == '0') || (computador == 2 && jogador.value == '1')){
      //COMPUTADOR VENCE
      adicionar_derrota(contador_derrota+=1)
      alert("QUE PENA, O COMPUTADOR VENCEU!")
  }else if(computador == jogador.value){
          //empate
      adicionar_empate(contador_empate+=1)
      alert("POXA, EMPATOU!!")
  }else{
      //JOGADOR VENCE
      adicionar_vitoria(contador_vitoria+=1)
      alert("PARABÉNS VOCÊ GANHOU!")
  }
}

