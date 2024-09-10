import { Pessoa } from "../interfaces/Pessoa";

// Função para verificar se todos os campos obrigatórios estão preenchidos
export const areFieldsValidPessoa = (pessoa: Pessoa): boolean => {
  const { nome, idade, email, data_nascimento } = pessoa;

  // Verifica se todos os campos estão preenchidos e válidos
  if (!nome || nome.trim() === "") {
    return false;
  }

  if (!idade || idade <= 0) {
    return false;
  }

  if (!email || email.trim() === "") {
    return false;
  }

  if (!data_nascimento || data_nascimento.trim() === "") {
    return false;
  }

  return true;
};
