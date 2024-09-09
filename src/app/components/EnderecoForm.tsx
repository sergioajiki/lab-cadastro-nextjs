"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Endereco } from "../interfaces/Endereco";
import React from "react";

const EnderecoForm = () => {
    const { addEndereco } = useAppContext();
    const [endereco, setEndereco] = useState<Endereco>({
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEndereco((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addEndereco(endereco);
        alert("Endereço cadastrado com sucesso");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="logradouro"
                placeholder="Logradouro"
                onChange={handleChange}
            />
            <input
                type="text"
                name="number"
                placeholder="Número"
                onChange={handleChange}
            />
            <input
                type="text"
                name="complemento"
                placeholder="Complemento"
                onChange={handleChange}
            />
            <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                onChange={handleChange}
            />
            <input
                type="text"
                name="cep"
                placeholder="CEP"
                onChange={handleChange}
            />
            <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                onChange={handleChange}
            />
            <input
                type="text"
                name="estado"
                placeholder="Estado"
                onChange={handleChange}
            />
            <button type="submit">
                Cadastrar Endereço
            </button>
        </form>
    );
};
export default EnderecoForm;