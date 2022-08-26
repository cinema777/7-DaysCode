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
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
            adicionarMais = prompt("Deseja adicionar algum produto a sua lista de compras? Digite sim ou não");
        } else {
            adicionarMais = prompt("Deseja adicionar algum produto a sua lista de compras? Digite sim, não ou remover");
        }

        while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {
        alert(`Operação não reconhecida!`);
            adicionarMais = prompt("Deseja adicionar algum produto a sua lista de compras? Digite sim, não ou remover");
        }
        
        if (adicionarMais === "não"){ 
            break;
        }
        
        if (adicionarMais === "sim") {
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
        } else if (adicionarMais === "remover") {
            remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		    if(frutas.indexOf(remover) != -1){
			    frutas.splice(frutas.indexOf(remover), 1);
			    alert(`O item ${remover} foi removido com sucesso!`);
		    } else if(laticinios.indexOf(remover) != -1){
			    laticinios.splice(laticinios.indexOf(remover), 1);
			    alert(`O item ${remover} foi removido com sucesso!`)
		    } else if (doces.indexOf(remover) != -1){
			    doces.splice(doces.indexOf(remover), 1);
			    alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o produto dentro da lista!`)
            }

        }
    }
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
