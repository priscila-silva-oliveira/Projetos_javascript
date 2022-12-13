//Crie uma lista de chamada com os seguintes alunos:
//'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'.
//Porém, a Ana e o Caio mudaram de escola e Rodrigo entrou nesta sala. Atualize a lista.

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//nomes.splice(1,2);

nomes.splice(1,2, 'Rodrigo');

console.log(nomes)