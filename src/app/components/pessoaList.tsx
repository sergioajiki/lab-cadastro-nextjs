"use client";

import React, { useEffect, useState } from "react";
import { Pessoa } from "../interfaces/Pessoa";
import { fetchPessoas } from "../service/apiService";

const PessoaList = () => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadPessoas = async () => {
            try {
                const data = await fetchPessoas(); // Usando a função de serviço para buscar dados
                setPessoas(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadPessoas();
    }, []);

    return (
        <div>
            <h2>Lista de pessoas</h2>
            {pessoas.length > 0 ? (
                <ul>
                    {pessoas.map((pessoa) => (
                    <li key={pessoa.email}>
                        {pessoa.nome} - {pessoa.idade} - {pessoa.email} - {new Date(pessoa.dataNascimento).toLocaleDateString()}
                    </li>
                
            ))}
                </ul>
            ) : (
                <p>Nenhuma pessoa encontrada.</p>
            )}
        </div>
    );
};
export default PessoaList;