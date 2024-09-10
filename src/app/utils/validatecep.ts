export const isValidCep = (cep: string): boolean => {
    // Expressão regular para verificar se o CEP contém exatamente 8 dígitos numéricos
    const cepRegex = /^[0-9]{8}$/;
  
    return cepRegex.test(cep);
  };