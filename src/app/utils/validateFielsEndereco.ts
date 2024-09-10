import { Endereco } from "../interfaces/Endereco";

// Função para verificar se todos os campos obrigatórios estão preenchidos
export const areFieldsValidEndereco = (endereco: Endereco): boolean => {
  const { logradouro, numero, bairro, cep, cidade, estado } = endereco;

  // Verifica se todos os campos estão preenchidos e válidos
  if (!logradouro || logradouro.trim() === "") {
    return false;
  }

  if (!numero || numero.trim() === "") {
    return false;
  }

  if (!bairro || bairro.trim() === "") {
    return false;
  }

  if (!cep || cep.trim() === "") {
    return false;
  }

  if (!cidade || cidade.trim() === "") {
    return false;
  }

  if (!estado || estado.trim() === "") {
    return false;
  }

  return true;
};
