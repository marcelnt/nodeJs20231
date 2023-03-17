/************************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Marcel
 * Data: 10/03/2023
 * Versão: 1.0
 ************************************************************************************/

/**
 *  Express - dependencia para realizar requisições de API pelo protocolo HTTP
 *      npm install express --save
 * 
 *  Cors - dependencia para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 *  Body-Parser - dependencia que gerencia o corpo das requisições
 *      npm install body-parser --save
 */

//Import das dependencias do projeto

    //Dependencia para criar as requisisções da API
    const express = require('express');
    //Dependencia para gerenciar as permissões da API
    const cors = require('cors');
    //Dependencia para gerenciar o corpo das requisições da API
    const bodyParser = require('body-parser');
    //Import do arquivo no modulo (funções)
    const estadosCidades = require('./modulo/estados_cidades.js');

    //Cria um objeto com as caracteristica do express
    const app = express();

    app.use((request, response, next) =>{
            //API publica - fica disponivel para utilização de qualquer aplicação
            //API privada - somente o IP informado poderá consumir dados da API
        //Define se a API será publica ou privada
        response.header('Access-Control-Allow-Origin', '*');

        //Permite definir quais metodos poderão ser utilizados nas requisições da API
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        //Envia para o cors() as regras de permissões
        app.use(cors());

        next();
    });

    //EndPoints
        //async - estabelece um status de aguarde, assim que eu processar te devolvo os dados
           //Obs: se não usar o async a requisição é perdida, pois o front acha a API 
           //esta fora do ar

    //EndPoint para listar todos os estados
    app.get('/v1/senai/estados', cors(), async function(request, response, next){
       

        //Chama a função que vai listar todos os estados
        let estados = estadosCidades.getListaDeEstados();

        //Tratamento para validar o secesso da requisição
        if (estados)
        {        
            response.status(200);
            response.json(estados);
        }
        else
        {
            response.status(500);
        }
    });

    //EndPoint: Lista os dados do estado filtrando pela sigla do estado
    app.get('/v1/senai/estado/sigla/:uf', cors(), async function(request, response, next){
        
        let statusCode;
        let dadosEstado = {};

        //Recebe a sigla do estado que será enviada pela URL da requisição
        let siglaEstado = request.params.uf;

        //Tratamento para validação de entrada de dados incorreta
        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length !=2 || !isNaN(siglaEstado))
        {
            statusCode = 400;
            dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.';
        }else{
            //Chama a função para retornar os dados do estado
            let estado = estadosCidades.getDadosEstado(siglaEstado);

            if(estado){
                statusCode = 200;
                dadosEstado = estado;
            }else{
                statusCode = 404;
            }
        }
        //Retorna o codigo e o JSON
        response.status(statusCode);
        response.json(dadosEstado);
    });

    app.get('/v1/senai/cidades', cors(), async function(request, response, next){

        /*
            Existem 2 opções para receber variáveis para filtro:
                - params - que permite receber a variável na estrutura da URL
                    criada no endPoint (geralemente utilizado para ID (PK))
                
                - query - Também conhecido como queryString per permite receber 
                    uma ou muitas variáveis para realizar filtros avançado
        */

        //Recebe uma variavel encaminhada via QueryString
        let siglaEstado = request.query.uf;
        //let cepEstado = request.query.cep;
        //let populacaoEstado = request.query.populacao;

        let statusCode;
        let dadosCidades = {};

        //Tratamento para validação de entrada de dados incorreta
        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length !=2 || !isNaN(siglaEstado))
        {
            statusCode = 400;
            dadosCidades.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.';
        }else{
            //Chama a função para retornar os dados do estado
            let cidades = estadosCidades.getCidades(siglaEstado);

            if(cidades){
                statusCode = 200;
                dadosCidades = cidades;
            }else{
                statusCode = 404;
            }
        }
        //Retorna o codigo e o JSON
        response.status(statusCode);
        response.json(dadosCidades);
    });

    app.get('/v2/senai/cidades/estado/sigla/:uf/:qtde', cors(), async function(request, response, next){
    });

    //Roda o serviço da API para ficar aguardando requisições
    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080.');
    });





