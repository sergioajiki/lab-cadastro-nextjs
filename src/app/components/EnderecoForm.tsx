"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Endereco } from "../interfaces/Endereco";
import { cadastrarEndereco } from "../service/apiService";
//import React from "react";
import { areFieldsValidEndereco } from "../utils/validateFielsEndereco";
import { isValidCep } from "../utils/validatecep";

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
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEndereco((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!areFieldsValidEndereco(endereco)) {
            setMessage("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!isValidCep(endereco.cep)) {
            setMessage("Cep inválido");
            return;
        } 
        try {
            console.log(endereco);
            await cadastrarEndereco(endereco);
            addEndereco(endereco);
            setMessage("Endereço cadastrado com sucesso!")

            setEndereco({
                logradouro: "",
                numero: "",
                complemento: "",
                bairro: "",
                cep: "",
                cidade: "",
                estado: "",
            });

        } catch (error: any) {
            setMessage(`Erro: ${error.message}`);
        }
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
                name="numero"
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
                maxLength={8}
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
                maxLength={2}
                onChange={handleChange}
            />
            <br></br>
            <button type="submit">
                Cadastrar Endereço
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};
export default EnderecoForm;