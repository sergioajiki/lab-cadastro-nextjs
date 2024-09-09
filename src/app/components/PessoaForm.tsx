"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Pessoa } from "../interfaces/Pessoa";

const PessoaForm = () => {
    const { addPessoa } = useAppContext();
    const [pessoa, setPessoa] = useState<Pessoa>({
        nome: "",
        idade: 0,
        email: "",
        dataNascimento: new Date(),
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPessoa((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addPessoa(pessoa);
        alert("Pessoa cadastrada com sucesso");
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
                name="dataNascimento"
                placeholder="Data de Nascimento"
                onChange={handleChange}
            />
            <br></br>
            <button type="submit">Cadastrar Pessoa</button>
        </form>
    );
};
export default PessoaForm;