function auxilioNasCompras () {
    let qualProduto = "";
    let qualLista = "";
    let frutas = ["banana", "tomate", "maçã", "uva", "abacate"];
    let laticinios = ["leite vegetal", "leite de vaca", "leite em pó"];
    let congelados = [];
    let doces = ["chiclete", "bala de ursinho"];
    let listaDeCompras = [frutas, laticinios, congelados, doces];

    let adicionarMais = "sim";
    while(adicionarMais != "não"){
        adicionarMais = prompt("Deseja adicionar algum produto a sua lista de compras? Digite sim ou não");
        while (adicionarMais != "sim" && adicionarMais != "não") {
        alert(`Operação não reconhecida!`);
            adicionarMais = prompt("Deseja adicionar algum produto a sua lista de compras? Digite sim ou não");
        }
        
        if (adicionarMais === "não"){ 
            break;
        }
        
        qualProduto = prompt("Qual produto você deseja inserir?");
        qualLista = prompt("Em qual categoria esse produto se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(qualLista === 'frutas'){
            frutas.push(qualProduto);
        } else if (qualLista === 'laticínios'){
            laticinios.push(qualProduto);
        } else if (qualLista === 'doces'){
            doces.push(qualProduto);
        } else if (qualLista === 'congelados'){
            congelados.push(qualProduto);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    }
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}



