// Não sabemos o que é o ad, vou no código que chama essa função e faço um console.log(ad)
//Oq me garante que todas as vezes que eu chamar essa função, o ad sempre vai estar com as mesmas infos?
//É imprevisivel, pois pode ter um campo a mais ou um campo a menos

//Então vou criar uma interface para garantir que o ad sempre vai ter as mesmas infos
/* interface Ad {
  id: string;
  name: string;
  createdAt: Date;
}
                                          //ad precisa ter pelo menos esses campos aqui
function calculateHowMuchTimeTheAdWasPublished(ad: Ad) {
//calculo quantos dias foi postado
}



calculateHowMuchTimeTheAdWasPublished({
  id: '1',
  name: 'Ad 1',
  createdAt: new Date(),
}) */
/*Aqui ele pede as propriedades que eu defini na interface, 
se eu colocar um campo a mais/menos ele reclama*/

/*Typescript nnão permite a gente cometer os erros básicos do dia-a-dia da programação, 
enviar pra uma função, chamar uma função, receber uma informação que eu esperava estar no formato
mas não está */

//ISSO É MUITO COMUM (IMPREVISÍVEL DMS) EM PROJETOS GRANDES, POIS TEM MUITAS PESSOAS TRABALHANDO NELE