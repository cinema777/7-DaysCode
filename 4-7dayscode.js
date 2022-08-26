function jogoDoAdivinho(){
    
    let play = prompt("Vamos jogar o Jogo do Adivinho? Digite 'sim' para dar o play!");
    

    while (play == "sim"){  
        let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
        let ganhou = "não";
        for (i = 1; i < 4; i++){
            alert (`Estou pensando em um número inteiro de 1 a 10. Restam ` + (4 - [i]) + ` tentativas para acertar o número que estou pensando`);
            let chute = prompt (`Essa é sua tentativa de número ` + ([i]) +  `! Qual número estou pensando?`);
            if (chute == numeroAleatorio){
                play = prompt (`Acertou na sua ` + ([i]) + ` tentativa, parabéns!! Digite sim para continuar jogando!`);
                ganhou = "sim";
                break;
            } else {
                alert ("Erro-ou!");  
            }              
        }
        if (ganhou == "sim"){

        } else {        
        play = prompt (`Você perdeuuuu! HAHA! Eu estava pensando no número ${(numeroAleatorio)} Gostaria de tentar mais uma? Digite sim para jogar mais uma rodada!`); 
        }
    }

    if (play != "sim"){
        alert ("Que pena, volte mais tarde e estarei pronto para jogar!");
    }
}
    
