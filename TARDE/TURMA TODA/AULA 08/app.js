/**********************************************************************************************************************
 * Objetivo: API para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Data: 14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************************************************/

//Import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


//Cria o objeto app conforme a classe do express
const app = express();

//Permissões do cors
app.use((request, response, next) =>{
    //Define quem poderá acessar a API (* - Todos)
    response.header('Access-Control-Allow-Origin', '*');
    //Define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as pemissões ao cors
    app.use(cors());

    next();
});

//CRUD (Create, Read, Update e Delete)

/***************************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Data:14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 **************************************************************************************/

    /*
    Instalaçao do PRISMA no projeto (biblioteca para conexão com BD)
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client --save

        npx prisma migrate dev    #### Serve para realizar o sincronismo entre o prisma e o BD
    */

    //Define que os dados que irão chegar no body da requisição será no padrão JSON
    const bodyParserJSON = bodyParser.json();

    //Import do arquivo da controller que irá solicitar a model os dados do BD
    var controllerAluno = require ('./controller/controller_aluno.js');

    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){
        
        //Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getAlunos();

        //Valida se existe registros de aluno
        if (dadosAluno){
            response.json(dadosAluno);
            response.status(200);
        }else{
            response.json();
            response.status(404);
        }
    });


    //EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    });

    //EndPoint: Insere um novo aluno 
    app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response){

        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body;

        console.log(dadosBody);

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);
        
        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
    });

    //EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    });

    //EndPoint: Exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    });

    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080');
    })

