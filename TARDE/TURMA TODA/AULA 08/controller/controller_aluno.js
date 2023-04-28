/**********************************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************************************************/

//Import do arquivo de configuração das variaveis, constantes e funções globais
var message = require('./modulo/config.js');

//Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js');

//Inserir um novo aluno
const inserirAluno = async function(dadosAluno){
    let resultDadosAluno;

    //Validação para tratar campos obrigatórios e quantide de caracteres
    if( dadosAluno.nome == ''               || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15 || 
        dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18 || 
        dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10 || 
        dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200  
     ){
         return message.ERROR_REQUIRED_FIELDS; //Status code 400
     }else{
         //Envia os dados para a model inserir no BD
         resultDadosAluno = await alunoDAO.insertAluno(dadosAluno);

         console.log(resultDadosAluno);

         //Valida se o BD inseriu corretamente os dados
         if(resultDadosAluno)
            return message.SUCCESS_CREATED_ITEM; //Status code 201
        else
            return message.ERROR_INTERNAL_SERVER; //Status code 500
     }
}

//Atualizar um aluno existente
const atualizarAluno = function(dadosAluno){

}

//Excluir um aluno existente
const deletarAluno = function(id){

}

//Retorna a lista de todos os alunos
const getAlunos = async function(){
    
    let dadosAlunosJSON = {};

    //chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno){
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length;
        dadosAlunosJSON.alunos = dadosAluno;
        return dadosAlunosJSON;
    }else
        return false;

}

//Retorna o aluno filtrando pelo ID
const getBuscarAlunoID = function(id){

}

module.exports = {
    getAlunos,
    inserirAluno
}

