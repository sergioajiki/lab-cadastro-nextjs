import { Pessoa } from "../interfaces/Pessoa";

//Busca a lista de pessoas da API

export const fetchPessoas = async (): Promise<Pessoa[]> => {
    const response = await fetch("http://localhost:8080/pessoa");
    if(!response.ok) {
        throw new Error("Erro ao buscar dados da API");
    }
    return response.json()
}

export const cadastrarPessoa = async(pessoa: Pessoa): Promise<void> => {
    const response = await fetch("http://localhost:8080/pessoa/cadastrarPessoa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pessoa),
    });
    if (!response.ok) {
        throw new Error("Erro ao cadastrar pessoa");
    }
}