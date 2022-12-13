const { edGalho, edFolha} = require ('./arrays');

let posicaoListaAtual1 = 0 ;
let posicaoListaAtua2 = 0 ;

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoListaAtual1 = 0;
    let posicaoListaAtual2 = 0;
    let atual = 0;
    
    while(posicaoListaAtual1 < lista1.length && posicaoListaAtual2 <lista2.length){
        let produtoAtualLista1 = lista1[posicaoListaAtual1];
        let produtoAtualLista2 = lista2[posicaoListaAtual2];

        if (produtoAtualLista1.preco <produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoListaAtual1 ++;

        }else{
            listaFinal[atual] = produtoAtualLista2;
            posicaoListaAtua2 ++;        

        atual ++;
    }

    while(posicaoListaAtual1< lista1.length){
        listaFinal[atual] = lista1[posicaoListaAtual1];
        posicaoListaAtual1++;
        atual++;
    }

    while(posicaoListaAtual2< lista2.length){
        listaFinal[atual] = lista2[posicaoListaAtual2];
        posicaoListaAtual2++;
        atual++;
    }

    }

       return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));