/**********************************************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client');

//Instancia da classe PrismaClient
var prisma = new PrismaClient();

//Inserir dados do aluno no Banco de Dados
const insertAluno = async function(dadosAluno){

    //ScriptSQL para inserir dados
    let sql = `insert into tbl_aluno (
                        nome,
                        rg,
                        cpf,
                        data_nascimento,
                        email  
                        ) values (
                        '${dadosAluno.nome}',    
                        '${dadosAluno.rg}',    
                        '${dadosAluno.cpf}',    
                        '${dadosAluno.data_nascimento}',    
                        '${dadosAluno.email}'    
                        )` ;

    console.log(sql);

    //Executa o scriptSQL no BD                        
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus)
        return true;
    else
        return false;

};

//Atualizar dados do aluno no Banco de Dados
const updateAluno = function(dadosAluno){

};

//Deletar dados do aluno no Banco de Dados
const deleteAluno = function(id){

};

//Retronar todos os aluno do Banco de Dados
const selectAllAlunos = async function(){

    //ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno';

    //$queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no metodo
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0)
        return rsAluno;
    else
        return false;
};

//Retornar o aluno filtrando pelo ID
const selectByIdAluno = function(id){

};

module.exports = {
    selectAllAlunos,
    insertAluno
}