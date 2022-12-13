//Crie uma função que recebe como argumento o nome de um aluno.
//Verifique se o aluno está presente na lista e retorne a média final que se encvontra no mesmo índice.
//Caso o nome do aluno não esteja na lista, retorne a mensagem que o aluno não foi encontrado.

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNoneENota(aluno){
if (listaDeAlunosEMedias[0].includes(aluno)){
    console.log(`${aluno} está cadastrado!`);
    //const alunos = listaDeAlunosEMedias[0];
    //const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    }else {

        console.log("Aluno não cadastrado!");
    }
   
}

exibeNoneENota('João');
