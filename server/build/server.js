import express from 'express';
const app = express();
// www.minhaapi.com/ads
//Está em modo de desenvolvimento então localhost:3000/ads (n precisa de um domínio)
//logo abaixo vai ser qual a função que vai executar quando acessar a rota
/*request busca informações vindo da requisição*/
/*response envia uma resposta pro cliente*/
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Ad 1' },
        { id: 2, name: 'Ad 2' },
        { id: 3, name: 'Ad 3' },
    ]);
});
//pode mandar texto send('Acessou Ads!')
//mas nosso backend vai retornar geralmente no formato json
//N é legal testar as rotas no navegador, pois o navegador não entende json
//Ouvindo novas requisições e não pare até o user parar
app.listen(3333);
