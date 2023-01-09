let nOpcaoSelecionada = 0;

let preços;

function selecionar(clicado, categoria){
    if (categoria === 1) {
        const retiraSelecao = document.querySelector('.pratos .selecionado')
        if(retiraSelecao !== null){
            document.querySelector('.pratos .selecionado ion-icon').classList.remove('iconSelecionado')
            retiraSelecao.classList.remove('selecionado')
            nOpcaoSelecionada -= 1;
        }
    }
    else if (categoria === 2) {
        const retiraSelecao = document.querySelector('.bebidas .selecionado')
        if(retiraSelecao !== null){
            document.querySelector('.bebidas .selecionado ion-icon').classList.remove('iconSelecionado')
            retiraSelecao.classList.remove('selecionado')
            nOpcaoSelecionada -= 1
        }
    }
    else {
        const retiraSelecao = document.querySelector('.sobremesas .selecionado')
        if(retiraSelecao !== null){
            document.querySelector('.sobremesas .selecionado ion-icon').classList.remove('iconSelecionado')
            retiraSelecao.classList.remove('selecionado')
            nOpcaoSelecionada -= 1
        }
    }
    clicado.classList.add('selecionado')
    if (categoria === 1){
        document.querySelector('.pratos .selecionado ion-icon').classList.add('iconSelecionado')
    }
    else if (categoria === 2){
        document.querySelector('.bebidas .selecionado ion-icon').classList.add('iconSelecionado')
    }
    else{
        document.querySelector('.sobremesas .selecionado ion-icon').classList.add('iconSelecionado')
    }
    nOpcaoSelecionada++
    verifica_N_Opcoes ()
}

function verifica_N_Opcoes () {
    if (nOpcaoSelecionada === 3) {
        const botaofinal = document.querySelector('button');
        botaofinal.classList.add('acionavel');
        botaofinal.innerHTML = "Finalizar pedido";
        botaofinal.removeAttribute('disabled');
    }
}

let precoFinal = 0

function finalizar(botaohtml) {
    const pratoClicado = document.querySelector('.pratos .selecionado strong')
    let precoP = pratoClicado.innerHTML;
    precoP = String(precoP);
    precoP = precoP.replaceAll(",",".");
    precoP = Number(precoP);

    const bebidaClicada = document.querySelector('.bebidas .selecionado strong')
    let precoB = bebidaClicada.innerHTML;
    precoB = String(precoB);
    precoB = precoB.replaceAll(",",".");
    precoB = Number(precoB);
    
    const sobremesaClicada = document.querySelector('.sobremesas .selecionado strong')
    let precoS = sobremesaClicada.innerHTML;
    precoS = String(precoS);
    precoS = precoS.replaceAll(",",".");
    precoS = Number(precoS);

    precoFinal = precoP + precoB + precoS
    precoFinal = precoFinal.toFixed(2)

    let msg = `Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ ${precoFinal}`

    const enviarmsg = `https://wa.me/5527999999999?text=${encodeURIComponent(msg)}`
    window.open(enviarmsg)
}
