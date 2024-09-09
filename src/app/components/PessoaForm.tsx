"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Pessoa } from "../interfaces/Pessoa";
import { cadastrarPessoa } from "../service/apiService";


const PessoaForm = () => {
    const { addPessoa } = useAppContext();
    const [pessoa, setPessoa] = useState<Pessoa>({
        nome: "",
        idade: 0,
        email: "",
        data_nascimento: "",
        endereco: {
            id: null
        }
    });
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPessoa((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await cadastrarPessoa(pessoa);
            setMessage("Pessoa cadastrada com sucesso!");

        } catch (error: any) {
            setMessage('Erro: ${error.message}')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={handleChange}
            />
            <input
                type="number"
                name="idade"
                placeholder="Idade"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                type="date"
                name="data_nascimento"
                placeholder="Data de Nascimento"
                onChange={handleChange}
            />
            <br></br>
            <button type="submit">Cadastrar Pessoa</button>
        </form>
    );
};
export default PessoaForm;