  //Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas:
    // ['ana Julia', 'Caio vinicius', 'BIA silva ']

    const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva '];

    const nomesPadronizados = nomes.map((nome) =>{
        return nome.toLocaleUpperCase();
    });

    console.log(nomesPadronizados);