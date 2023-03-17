/*********************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autor: Marcel
 * Versão: 1.0
 ********************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
//Forma 01 de criar uma função (tradicional)
// function calculadora(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();
//     let resultado;
//     let status = true;

//     // if (operacao == 'SOMAR')
//     //     resultado = valor1 + valor2;
//     // else if (operacao == 'SUBTRAIR')
//     //     resultado = valor1 - valor2;
//     // else if (operacao == 'MULTIPLICAR')
//     //     resultado = valor1 * valor2;
//     // else if (operacao == 'DIVIDIR') {

//     //     //Validação para tratar a divisão por 0
//     //     if (valor2 == 0){
//     //         console.log('ERRO: Não é possível realizar a divisão por 0.');
//     //         status = false;
//     //     }else
//     //         resultado = valor1 / valor2;
//     // } else {
//     //     console.log('ERRO: A sua escolha de operação matemática foi inválida!');
//     //     status = false;
//     // }

//     switch (operacao)
//     {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;
//         case 'DIVIDIR':
//             //Validação para tratar a divisão por 0
//             if (valor2 == 0){
//                 console.log('ERRO: Não é possível realizar a divisão por 0.');
//                 status = false;
//             }else
//                 resultado = valor1 / valor2;
            
//             break;
//         default:
//             console.log('ERRO: A sua escolha de operação matemática foi inválida!');
//             status = false;
//     }

//     //Validação para tratar quando a variavel resultado não for processada por algum problema    
//     if (resultado == undefined && status == false)
//         return false;
//     else
//         return resultado;
// }

//Forma 02 de criar uma função (é uma das mais utilizadas)
const calculadora = function (numero1, numero2, tipoCalculo){
    
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR')
    //     resultado = valor1 + valor2;
    // else if (operacao == 'SUBTRAIR')
    //     resultado = valor1 - valor2;
    // else if (operacao == 'MULTIPLICAR')
    //     resultado = valor1 * valor2;
    // else if (operacao == 'DIVIDIR') {

    //     //Validação para tratar a divisão por 0
    //     if (valor2 == 0){
    //         console.log('ERRO: Não é possível realizar a divisão por 0.');
    //         status = false;
    //     }else
    //         resultado = valor1 / valor2;
    // } else {
    //     console.log('ERRO: A sua escolha de operação matemática foi inválida!');
    //     status = false;
    // }

    switch (operacao)
    {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2);
            break;
        case 'DIVIDIR':
            //Validação para tratar a divisão por 0
            if (valor2 == 0){
                console.log('ERRO: Não é possível realizar a divisão por 0.');
                status = false;
            }else
                resultado = DIVIDIR(valor1, valor2);
            
            break;
        default:
            console.log('ERRO: A sua escolha de operação matemática foi inválida!');
            status = false;
    }

    //Validação para tratar quando a variavel resultado não for processada por algum problema    
    if (resultado == undefined && status == false)
        return false;
    else
        return resultado;
}


//Forma 03 de criar uma função (modelo chamado de arrow Function)
const SOMAR         = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR      = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR   = (valor1, valor2) => valor1 * valor2;
const DIVIDIR       = (valor1, valor2) => valor1 / valor2;

//Permite adicionar um function no escopo global (public)
//As functions que não estiverem aqui no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
    
}