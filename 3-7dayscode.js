function qualProgramdor(){

    let escolhaArea = prompt("Qual area você deseja seguir? Digite '1' paraFront-End ou '2' para Back End");
    let escolhaUsuario = "";

    if (escolhaArea === "1"){
        let escolhaUsuario = "Front-End";
        alert(`Para ${escolhaUsuario}, recomendamos aprender React ou Vue!`);
        
    } else if (escolhaArea === "2"){
        let escolhaUsuario = "Back-End";
        alert(`Para ${escolhaUsuario}, recomendamos aprender C# ou Java!`);
    } else { alert ("Você deve digitar o número '1' paraFront-End ou '2' para Back End");

    }

    const fullStack = prompt("Você gostaria de continuar se especializando nessa área (digite 1), ou se tornar um Fullstack (digite 2)?");
    if (fullStack == 1){
        alert(`Perfeito, continue sua jornada com ${escolhaUsuario} para ser o melhor programador`);
    }
    else if (fullStack == 2){
        alert("Ótimo, está na hora de aprender novas linguagens e se tornar um Fullstack!");
    }
    else {
        alert("Você deve responder com 1 ou 2");
    }

    let mais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' ou 'não'.");
    while (mais === "sim"){
        let novaTecnologia = prompt("Qual?");
        alert(`Vai ser ótimo aprender ${novaTecnologia} para sua carreira!`)
        mais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' ou 'não'.");
    }
         
}
 

