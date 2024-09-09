"use client";

import React, {createContext, ReactNode, useContext, useState} from "react";
import { Pessoa } from "../interfaces/Pessoa";
import { Endereco } from "../interfaces/Endereco";

interface AppContextProps {
    pessoas: Pessoa[];
    enderecos: Endereco[];
    addPessoa:(pessoa: Pessoa) => void;
    addEndereco:(endereco: Endereco) => void;    
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [enderecos, setEnderecos] = useState<Endereco[]>([]);

    const addPessoa = (pessoa: Pessoa) => setPessoas((prev) => [...prev, pessoa ]);
    const addEndereco = (endereco: Endereco) => setEnderecos((prev) => [...prev, endereco]);

    return(
        <AppContext.Provider value={{pessoas, enderecos, addPessoa, addEndereco}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error ("useAppcontext must be used within an AppProvider");
    }
    return context;
}