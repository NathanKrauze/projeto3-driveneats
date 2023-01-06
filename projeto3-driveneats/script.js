function selecionar(clicado, categoria){
    if (categoria === 1) {
        const retiraSelecao = document.querySelector('.pratos .selecionado')
        if(retiraSelecao !== null){
            retiraSelecao.classList.remove('selecionado')
        }
    }
    else if (categoria === 2) {
        const retiraSelecao = document.querySelector('.bebidas .selecionado')
        if(retiraSelecao !== null){
            retiraSelecao.classList.remove('selecionado')
        }
    }
    else {
        const retiraSelecao = document.querySelector('.sobremesas .selecionado')
        if(retiraSelecao !== null){
            retiraSelecao.classList.remove('selecionado')
        }
    }
    clicado.classList.add('selecionado')
}