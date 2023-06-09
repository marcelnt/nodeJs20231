/*******************************************************************************************************************
 * Objetivo: Arquivo responsável pelas variaveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************************************************************************/

/************************************* Constantes de ERROS ********************************************************/
const ERROR_REQUIRED_DATA = {status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'};
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Erro interno no servidor de Banco de Dados.'};


/************************************* Constantes de SUCESSO ********************************************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso.'};

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM
}