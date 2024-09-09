// Função para formatar a data de yyyy-MM-dd para dd-MM-yyyy
export const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };