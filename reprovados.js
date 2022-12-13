// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:
// 'Ana', 'Marcos', 'Maria','Mauro'
 //7,4.5,8,7.5

 const alunos = ['Ana','Marcos','Maria','Mauro'];

 const medias= [,4.5,8,7.5];

 const reprovados = alunos.filter((aluno, indice) => {
    return medias [indice] < 7;
 });

 console.log(reprovados);

// Com a média de todos os alunos de 3 salas, calcule 
//
//
//
//
//
