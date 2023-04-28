/**************************************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 ***************************************************************************/
//Import da biblioteca do prisma  client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client');

//Instancia da classe do PrismaClient
var prisma = new PrismaClient();


//Inserir um novo Registro no Banco de Dados
const insertAluno = async function(dadosAluno){

    //Script SQL para inserir os dados no BD
    let sql = `insert into tbl_aluno (  nome, 
                                        cpf, 
                                        rg, 
                                        data_nascimento, 
                                        email
                                      )
                                        values
                                      (  '${dadosAluno.nome}',
                                         '${dadosAluno.cpf}',   
                                         '${dadosAluno.rg}',   
                                         '${dadosAluno.data_nascimento}',   
                                         '${dadosAluno.email}'
                                      )`;

    console.log(sql);
    //Executa o script SQL no BD e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql);
    console.log(result);                                        

    if(result)
      return true;
    else
      return false;
}

//Atualizar um Registro existente no Banco de Dados
const updateAluno = function(dadosAluno){

}

//Excluir um Registro do Banco de Dados
const deleteAluno = function(id){

}

//Retorna todos Registros do Banco de Dados
const selectAllAluno = async function(){

    //Variavel com o scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno';

    //Executa no BD o scriptSQL
        //$queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
        //$queryRaw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw('select * from tbl_aluno'))
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0)
        return rsAluno;
    else
        return false;
};

//retorna um Registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function(id){

}

module.exports = {
    selectAllAluno,
    insertAluno
}

