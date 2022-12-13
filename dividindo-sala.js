//Divida os alunos da sala abaixo em duas listas com a mesma quatidade de alunos.

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
'Andre', 'Carlos', 'Paulo', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Dayse',
'Camilo']

//const sala1 = alunos.slice(0,10);
//const sala2 = alunos.slice(10);

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2);


console.log(sala1)
console.log(sala2)