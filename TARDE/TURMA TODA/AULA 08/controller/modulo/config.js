/****************************************************************************************************************
 * Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, Funções, variáveis para o projeto
 * Data: 28/04/2023 
 * Autor: Marcel
 * Versão: 1.0
*****************************************************************************************************************/

/*********************** MENSAGENS DE ERRO ********************************************************************* */
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'};
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'};


/*********************** MENSAGENS DE SUCESSO ********************************************************************* */
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}