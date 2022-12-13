const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "114444440"],
        };
    
    cliente.enderecos = [
        {
    
        rua: "R. Jose Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
        },
    ];

    function ligaParaCliente(telefoneComercial, telefoneResidencial){
        console.log(`Liagando para ${telefoneComercial}`);
        console.log(`Liagando para ${telefoneResidencial}`);
    }

    ligaParaCliente(...cliente.telefone);

    const encomenda = {
        destinatario: cliente.nome,
        ...cliente.enderecos[0],
    };

    console.log(encomenda);