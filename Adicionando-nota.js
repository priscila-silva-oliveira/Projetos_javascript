// Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:
// 10,6 e 8.
// Para corrifir, adicione a nota 7 e faço o calculo correto da media.

const notas = [10, 6, 8];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)