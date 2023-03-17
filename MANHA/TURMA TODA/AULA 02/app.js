 /*******************************************************************
  * Objetivo: Realizar a media escolar de 4 notas dos alunos
  * Data: 27/01/2023
  * Autor: Marcel
  * Versão: 1.0
  *******************************************************************/

 console.log('Sistema de Calculo de Médias Escolares');

//import da biblioteca para entrada de dados
 var readline = require('readline');

//Criamos um objeto para manipular a entrada de dados via teclado
 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

/** CONCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS
 * 
 * var - Toda variavel criada como var, tem por objetivo ser um escopo global,
 *      ou seja, ela poderá ser utilizada em diversos pontos da programação
 * 
 * let - Toda variavel criada como let, tem por objetivo ser um escopo local,
 *      ou seja, será utilizada somente nequela função 
 * 
 * const - Tem por objetivo criar um espaço em memória para armazenar dados
 *      que não sofrem mudança
 * 
 *******************************************************/

 //Função de CallBack para retornar o nome do aluno
 entradaDados.question('Digite o nome do aluno: \n', function (nome){
    //Variavel local para receber o nome do aluno, que 
    //vai ser retornado pela função
    let nomeAluno = nome;

    //Função de CallBack para entrada da Nota1
    entradaDados.question('Digite a nota1: \n', function (nota1) {
        //Nota1
        let primeiraNota = nota1;

        //Nota2
        entradaDados.question('Digite a nota2 \n', function (nota2){
            let segundaNota = nota2;

            //Nota3
            entradaDados.question('Digite a nota3 \n', function(nota3){
                let terceiraNota = nota3;
                
                //Nota4
                entradaDados.question('Digite a nota4 \n', function(nota4){
                    let quartaNota = nota4;
                    let media = 0;

                    /**
                     * Conversão de dados String para Numero
                        * Number.parseInt() ou parseInt() - Converte para Inteiro
                        * Number.parseFloat() ou parseFloat() - Converte para Real
                        * Number() - converte para int ou float, conforma a entrada do dado
                        * 
                        * 
                        * 
                     *Operadores de comparação
                        * ==  (Verificar a igualdade de conteudo)
                        * !=  (Verificar a diferença de conteudo)
                        * <   (Verificar o menor valor)
                        * >   (Verificar o maior valor)
                        * <=  (Verificar o menor ou igual valor)
                        * >=  (Verificar o maior ou igual valor)
                        * === (Veriricar a igualdade de conteudo e validar a tipagem de dados)
                        * Ex: 0 == 0    V
                        *     0 == '0'  V
                        *     0 === '0' F
                        *     0 ==! 0.0 F
                        * 
                     * Operadores Lógicos 
                     *  OU       || (pipe)   OR 
                     *  E        &&          AND
                     *  Negação  !           NOT  
                     * 
                     * Ordem de execução dos operadores lógicos
                     *  0º ()
                     *  1º Negação
                     *  2º E
                     *  3º OU 
                     * 
                     */

                    //Validação para tratar entrdas vazias 
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '')
                    {
                        console.log('ERRO: É necessário digitar algum valor nas entrada.');
                    //Validação para entrada de dados não numericos    
                    }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota))
                    {
                        console.log('ERRO: É necessário que todos os dados digitados sejam números.');
                    //Validação de entrada de valores entre 0 e 10    
                    }else if(primeiraNota < 0 || primeiraNota > 10 || segundaNota < 0 || segundaNota > 10 || terceiraNota < 0 || terceiraNota > 10 || quartaNota < 0 || quartaNota > 10)
                    {
                        console.log('ERRO: O sistema aceita somente números entre 0 até 10.');
                    }else{
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                        
                        if (media >= 7 )
                        {
                            console.log('Status do Aluno: Aprovado!');
                        }else
                        {
                            console.log('Status do Aluno: Reprovado!');
                        }

                        console.log('Média final: ' + media.toFixed(1));
                    }

                });
            });
        });
    });
 });



 