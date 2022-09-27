const painel = document.querySelector('.panel');
const igual = document.querySelector('.equal');


/*inserir valor selecionado na tela*/
function insert( valor ){
    painel.innerHTML += valor;
}

/*deleta todos os números da tela*/
function botaoAc(){
    painel.innerHTML = ' ';
}

/*backspace*/
function deletar(){
    if(painel.textContent){
        let conteudo = document.getElementById('painel').innerHTML;
        painel.innerHTML = conteudo.substring(0, conteudo.length -1);
    } else {
        
    }
}

/*gerar resultado*/
function result(){
    if(painel.textContent != 'Erro'){
        document.getElementById('painel').innerHTML = eval(painel.innerHTML);
    }
}