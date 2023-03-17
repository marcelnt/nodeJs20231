/*********************************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Marcel
 * Data: 10/03/2023
 * Versão: 1.0
 * 
 **********************************************************************************************/

/**
 * Express - dependencia do Node, que permite a integração entre o protocolo http com o código
 *       npm install express --save
 * 
 * Cors - Gerenciador de permissões para o protocolo HTTP
 *      npm install cors --save
 * 
 * Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição
 *      npm install body-parser --save
 * 
 */

//Import das dependencias para criar a API

    //responsável pelas requisições
    const express = require('express');
    //Responsável pelas permissões das requisições
    const cors = require('cors');
    //Responsável pela manipulação do body da requisição
    const bodyParser = require('body-parser');

    //Import do arquivo de funções para listar os estados e as cidades
    const estadosCidades = require('./modulo/estados_cidades.js');

    //Cria um objeto com as informações da classe express
    const app = express();

    //Define as permissões no header da API 
    app.use((request, response, next)=>{
        //Premite gerenciar a origem das requisições da API
            // * - significa que a API será publica
            // IP - se colocar o IP, a API somente responderá para aquela máquina
        response.header('Access-Control-Allow-Origin', '*');

        //Permite gerenciar quais verbos (metodos) poderão fazer requisições 
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        //Ativa no cors das requisições as permissões estabelecidas
        app.use(cors());

        next();
    });

    //endPoints

    //endPoint para Listas os Estados
    app.get('/v1/senai/estados', cors(), async function(request, response, next){

        //chama a função que retorna os estados
        let listaDeEstados = estadosCidades.getListaDeEstados();

        //Tratamento para validar se a função realizou o processamento
        if(listaDeEstados){
            //Retorna o Json e o Status code
            response.json(listaDeEstados);
            response.status(200);
        }else{
            response.status(500);
        }

    });

    //endPoint: Lista as caracteristicas do estado pela sigla
    app.get('/v1/senai/estado/sigla/:uf', cors(), async function(request, response, next){
        //:uf - é uma variavel que será utilizada para passagens de valores, 
        //na URL da requisição

        //recebe o valor da variável uf, que será encaminhada na 
        //URL da requisição
        let siglaEstado = request.params.uf;
        let statusCode;
        let dadosEstado = {};

        //Tratamento para validar os valores encaminhados no parametro
        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado))
        {
            statusCode = 400;
            dadosEstado.message  = "Não é possivel prcessar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
        }else{
            //chama a função que filtra o estado pela sigla
            let estado = estadosCidades.getDadosEstado(siglaEstado);

            //Valida se houve retorno válido da função
            if(estado){
                statusCode = 200; //Estado encontrado
                dadosEstado = estado;
            }else{
                statusCode = 404; //Estado não encontrado
            }
        }

        response.status(statusCode);
        response.json(dadosEstado);
    });

    //EndPoint: Lista de cidades filtrada pela sigla do estado
    app.get('/v1/senai/cidades', cors(), async function(request, response, next){
        
        //Recebe o valor da variavel que será enviada por QueryString
            //Ex: www.uol.com.br?uf=sp&cep=08556100&nome=jose
            /*
                Usamos a query para receber diversas variaveis para realizar filtros
                Usamos o params para receber ID (PK), geralemnte 
                        para fazer PUT, DELETE, GET
            
            */
        let siglaEstado = request.query.uf;
        // let cep = request.query.cep;
        let statusCode;
        let dadosCidade = {};

        //Tratamento para validar os valores encaminhados no parametro
        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado))
        {
            statusCode = 400;
            dadosCidade.message  = "Não é possivel prcessar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
        }else{
            //chama a função que filtra o estado pela sigla
            let cidades = estadosCidades.getCidades(siglaEstado);

            //Valida se houve retorno válido da função
            if(cidades){
                statusCode = 200; //Estado encontrado
                dadosCidade = cidades;
            }else{
                statusCode = 404; //Estado não encontrado
            }
        }

        response.status(statusCode);
        response.json(dadosCidade);

    });

    //EndPoint versão 2: Lista de cidades filtrada pela sigla do estado 
    //com mais detalhes
    app.get('/v2/senai/cidades', cors(), async function(request, response, next){

    });

    

    //Permite carregar os endpoint criados e aguardar as requisições 
    //pelo protocolo HTTP na porta 8080
    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080.')
    });