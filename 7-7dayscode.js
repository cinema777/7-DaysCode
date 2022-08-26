function calculadora (){
    let resultado = 0;

    function soma (x,y){
        resultado = parseInt(x) + parseInt(y)
    }

    function subtracao (x,y){   
        resultado = x - y
    }

    function multiplicacao (x,y){
        resultado = x * y
    }

    function divisao (x,y){
        resultado = x / y
    }

    let sair = true;
    
    while (sair == true){
        let qualFuncao = prompt("Qual operação vocês gostaria de usar? Digite 'Soma', 'Subtração', 'Divisão', 'Multiplicação' ou 'Sair'");
        switch (qualFuncao){
            case "Soma":
            operando1 = prompt("Digite o primeiro operando:");
            operando2 = prompt("Digite o segundo operando:");
            soma(operando1, operando2);
            alert(resultado)
            break;

            case "Subtração":
            operando1 = prompt("Digite o primeiro operando:");
            operando2 = prompt("Digite o segundo operando:");
            subtracao(operando1, operando2);
            alert(resultado)
            break;

            case "Divisão":
            operando1 = prompt("Digite o primeiro operando:");
            operando2 = prompt("Digite o segundo operando:");
            divisao(operando1, operando2);
            alert(resultado)
            break;

            case "Multiplicação":
            operando1 = prompt("Digite o primeiro operando:");
            operando2 = prompt("Digite o segundo operando:");
            multiplicacao(operando1, operando2);
            alert(resultado)
            break;

            case "Sair":
            sair = false
            break;
            
            default:
            alert("Opção inválida!");
            break;
        }
  
    }
}

