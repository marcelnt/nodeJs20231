var botaoEnviar = document.getElementById('enviar');
var nome = document.getElementById('nome');
var endereco = document.getElementById('endereco');

const validarCaixa = function(){
    if (nome.value == '' || endereco.value == ''){
        alert('Favor digitar um conteúdo');
        nome.style.backgroundColor = '#fae1de';
        endereco.style.backgroundColor = '#fae1de';
    }else
        resetStyle();
};

const bloqueiaNumeros = function(tecla){
    // console.log(tecla.keyCode);
    let code = tecla.keyCode;
    if(code > 33 && code < 58)
        event.preventDefault()
}

const resetStyle = function(){
    nome.style.backgroundColor = '#ffffff';
    endereco.style.backgroundColor = '#ffffff';
};


botaoEnviar.addEventListener('click', function(){ validarCaixa(); });

nome.addEventListener('change', function(){ validarCaixa();});
nome.addEventListener('keypress', function(){ bloqueiaNumeros(event);})

endereco.addEventListener('change', function(){ validarCaixa();});
endereco.addEventListener('keypress', function(){ bloqueiaNumeros(event);})

document.addEventListener('load',  function() { resetStyle();});