/****************************************************************************************
 * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada
 * Data: 09/02/2023
 * Autor: Marcel
 * Versão: 1.0
 ****************************************************************************************/

//Retorna o processamento de uma tabuada qualquer até um contador qualquer
const calcularTabuada = function (multiplicando, maxMultiplicador){
    let tabuada = Number(String(multiplicando).replace(',', '.')); 
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0; //start
    let resultado;
    
    
    if (tabuada == 0 || maxContador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(maxContador))
        status = false;
    else{
        //2x0=0
        // while(cont <= maxContador){
        //     resultado = tabuada * cont;
        //     console.log(tabuada + 'x' + cont + '=' + resultado);
        //     //cont = cont + 1;
        //     //cont++ ;
        //     cont +=1;
        // }
        for(let cont = 0; cont <= maxContador; cont++){
            resultado = tabuada * cont;
            console.log(tabuada + 'x' + cont + '=' + resultado);
        }
        
    }

    return status;
};

console.log(calcularTabuada(3, 7));

module.exports = {
    calcularTabuada
}