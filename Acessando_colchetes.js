const cliente = {
    nome:"Andre",
    idade: 32,
    cpf: "1122233344",
    email:"andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = [ "nome", "idade", "cpf", "email"];

chaves.forEach((chaves) =>{
console.log(`A chaves ${chaves} tem valor ${cliente[chaves]}`)
})
