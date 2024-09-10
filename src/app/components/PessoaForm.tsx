"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Pessoa } from "../interfaces/Pessoa";
import { cadastrarPessoa } from "../service/apiService";
import { formatToDDMMYYYY } from "../utils/formatDate";
import { isValidEmail } from "../utils/validateEmail";
import { areFieldsValidPessoa } from "../utils/validadeFieldsPessoa";


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

        if (!areFieldsValidPessoa(pessoa)) {
            setMessage("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!isValidEmail(pessoa.email)) {
            setMessage("Email inválido. Por favor, insira um e-mail válido.");
            return;
        }
        try {
            console.log(pessoa);
            const pessoaComDataFormatada = {
                ...pessoa,
                data_nascimento: formatToDDMMYYYY(pessoa.data_nascimento)
            }
            console.log(pessoaComDataFormatada);
            
            await cadastrarPessoa(pessoaComDataFormatada);
            addPessoa(pessoaComDataFormatada)
            setMessage("Pessoa cadastrada com sucesso!");

            //Limpa o formulário
            setPessoa({
                nome: "",
                idade: 0,
                email: "",
                data_nascimento: "",
                endereco: {
                    id: null
                }
            });

        } catch (error: any) {
            setMessage(`Erro: ${error.message}`);
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
            {message && <p>{message}</p>}
        </form>
    );
};
export default PessoaForm;