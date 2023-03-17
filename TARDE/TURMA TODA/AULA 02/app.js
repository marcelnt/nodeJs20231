/*******************************************************************************************
 * Objetivo: Calcular a media de 4 notas escolares
 * Autor: Marcel
 * Data: 27/01/2023
 * Versão: 1.0
 ******************************************************************************************/

//import da biblioteca readline
var readline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

/**
 * Criação de Variáveis
    * var - cria um espaço em memória de escopo global para o projeto, ou seja,
        * essa variável poderá ser utilizada em qualquer parte do arquivo (várias funções)
        *    
    * let - cria um espaço em memória de escopo local para o projeto, ou seja,
        * essa variável somente poderá ser utilizada em dentro da função que foi criada.
        * 
    * const - cria um espaço em memória de escopo local ou global para o projeto, ou seja,
        * essa constante poderá ser utilizado em qualquer parte do projeto e nunca sofrerá
        * alteração  
 * 
 * 
 */

//Função de CallBack para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;
    
    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1: \n', function(nota1){
        let valor1 = nota1;

        //Função de CallBack para entrar a nota2
        entradaDados.question('Digite a nota2: \n', function(nota2){
            let valor2 = nota2;

            //Função de CallBack para entrar a nota3
            entradaDados.question('Digite a nota3 \n', function(nota3){
                let valor3 = nota3;

                //Função de CallBack para entrar a nota4
                entradaDados.question('Digita a nota4 \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /*
                        Conversão de Tipos de dados

                            parseInt() ou Number.parseInt()     - Converte uma string em inteiro
                            parseFloat() ou Number.parseFloat() - Converte uma string em real

                            Number() - - converte uma string para número, conforme a entrada do valor
                                o JS define se será inteiro ou real


                        Operadores de comparação
                            == (verifica a igualdade entre conteudos)
                            != (verifica a diferença entre conteudos)
                            === (verifica a igualdade entre conteudos e tipo de dados)
                            !== (verifica a diferença entre conteudos e igualdade de tipo de dados)
                            ==! (verifica a igualdade entre conteudos e diferença de tipo de dados)
                                Ex:
                                    0 === 0   V
                                    0 === '0' F
                                    '0' === 0 F
                                    0 === 0.0 F

                                    0 == 0    V
                                    0 == '0'  V
                                    '0' == 0  V
                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            >= (maior ou igual)

                        Operadores Lógicos

                        E           &&      AND
                        OU          ||      OR
                        NEGAÇÃO     !       NOT

                    */  
                    //Validação para entrada vazia   
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '')
                    {
                        console.log('ERRO: Você deixou de entrar com algum valor.')
                    //Validação para entrada de texto (inválida)    
                    }else if ((isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) && isNaN(valor4))
                    {
                        console.log('ERRO: Você não digitou um numero válido.');
                    //Validação para entrada de dados somente entre 0 e 10
                    }else if(valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10)
                    {
                        console.log('ERRO: Os valores informados precisam ser entre 0 e 10.')
                    }
                    else
                    {
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4))/4;
                        
                        if (media < 7)
                        {
                            console.log('Status Aluno: Reprovado!');
                        }else
                        {
                            console.log('Status Aluno: Aprovado!');
                        }
                        console.log('Média do aluno: ' + media.toFixed(1));
                        entradaDados.close();
                    }
                    
                    
                });
            });
        });
    });
});





