/************************************************************************************************
 * Objetivo: Projeto para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 03/02/2023
 * Autor: Marcel
 * Versão: 1.0
 ************************************************************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js');

//Import da biblioteca de entrada de dados
var readline = require ('readline');

//Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

//Valor 1
entradaDados.question('Valor: \n', function(numero1){
    //replace - metodo da classe string que localiza um caracter e substitui por outro
    let valor1 = numero1.replace(',', '.');

    /* alguns exemplos de metodos importantes da classe String
        replace, substring, length, upercase, lowercase, indexof, trim */
    
    // Valor2
    entradaDados.question('Valor2: \n', function(numero2){
        let valor2 = numero2.replace(',', '.');

        //Tipo de operação matemática
        entradaDados.question('Escolha uma operação matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalculo){
            let operacao = tipoCalculo.toUpperCase(); 

            let resultado;

            //Validação de entrada de dados vazio
            if (valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possível calcular se algum dados estiver em branco.');
            
            //}else if (typeof(valor1) != 'number')
                //typeof() - identifica o tipo de dados de um elemento
                //O isNaN - identifica o tipo de conteúdo independente do tipo de dados

            //Validação para entrada de dados numericos
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números.')
            }else{
                // toUpperCase - converte uma string em MAIUSCULO               
                // toLowerCase - converte uma string em minusculo    

                resultado = matematica.calculadora(valor1, valor2, operacao);
                //if (resultado == false && typeof(resultado) == 'boolean')
                if (resultado === false)
                    entradaDados.close();
                else
                    console.log(resultado);
            }
        });
    });
});