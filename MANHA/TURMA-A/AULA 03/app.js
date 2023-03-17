/***************************************************************************************
 * Objetivo: Realizar calculos matemáticos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * Data: 03/02/2023
 * Autor: Marcel
 * Versão: 1.0
 ***************************************************************************************/

var matematica = require('./modulo/calculadora.js');

//Import da biblioteca para entrada de dados
var readline = require('readline');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});

// Entrada de dados Valor1
entradaDados.question('Valor1: \n', function(numero1){
    //replace - permite trocar um conteudo da string por outro
    let valor1 = numero1.replace(',','.');

    // Entrada de dados Valor2
    entradaDados.question('Valor2: \n', function(numero2){

        let valor2 = numero2.replace(',','.');

        // Entrada de dados Tipo de calculo
        entradaDados.question('Escolha uma operação: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: \n', function(tipoCalculo){
            
            //toUpperCase - Converte uma string para MAIUSCULO
            //toLowerrCase - converte uma string para minusculo

            let operacao = tipoCalculo.toUpperCase();
            
            let resultado;

            // Validação de entrada de dados vazio
            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possível calcular sem preencher todos os dados.');
                entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)

            // Validação para verificar se os dados digitados são numeros
            // Podemos utilizar (isNaN ou typeof)
            // Se usar o typeof, precisa garantir que o tipo de dados não é generico (string)
            //}else if ( typeof(valor1) != 'number' || typeof(valor2) != 'number'){
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.');
                entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)
            }else{

                //Recebe da função o calculo das operações (função que nós criamos)
                resultado = matematica.calcular (valor1, valor2, operacao);

                //Verifica se o retorno da função é válido se for exibe o valor
                //senão encerra o programa
                // if (resultado == false && typeof(resultado) == 'boolean')
                if (resultado === false)
                    entradaDados.close();
                else
                    console.log(resultado);
            }
        })
    });
});