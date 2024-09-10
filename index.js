
let mensagem = "olá mundo"
mensagem = "nada de olá mundo"
// posso mudar a variavel pois estou usando a LET

const teste = "olá mundinho."
// se eu tentar mudar vai dá erro pois a const não muda, ela fica assim constantemente. 

console.log(mensagem);
console.log(teste);

{
    const mensagem = "olá mundo dentro de chaves";
    console.log(mensagem);
    // tudo que fica dentro de chaves é como se fosse um novo escopo, então mesmo repetindo o nome da variavel em CONST (não muda), ele vai rodar e não dá erro.
}

