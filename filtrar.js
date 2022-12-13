const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
return clientes.filter((clientes) => {
    return(
        clientes.endereco.apartamento && 
        !clientes.endereco.hasOwnProperty("complemento")
    );
});

}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);