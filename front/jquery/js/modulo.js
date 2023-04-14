$(document).ready(function (){
    var nome = $('#nome');
    var endereco = $('#endereco');
    
    $('#enviar').on('click', function(){
        console.log(nome.val());
        if (nome.val() == '' || endereco.val() == '' ){
            alert('Favor digitar um conteúdo');
            if (nome.val() == '')
                nome.css('background-color', '#fae1de');
            else if(endereco.val() == '')    
                endereco.css('background-color', '#fae1de');
        }else{
            resetStyle();
        }
    });

    $('#nome').on('keypress', function(tecla){
        let code = tecla.keyCode;
        if(code > 33 && code < 58)
            event.preventDefault()
    }) 

    const resetStyle = function(){
        nome.css('background-color', '#ffffff');
        endereco.css('background-color', '#ffffff');
    };
});