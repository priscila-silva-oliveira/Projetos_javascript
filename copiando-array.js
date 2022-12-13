       //Considere o seguinte array de notas:
    //const notas = [7,7,8,9];
    //
    // Crie um novo array com a nota 10 a mais, sem alterar o array orginal.

    const notas = [7,7,8,9];

    const novasNotas = [...notas];

    novasNotas.push(10);

    console.log(`As novas notas são ${novasNotas}`);
    console.log(`As novas originaissão ${notas}`);

