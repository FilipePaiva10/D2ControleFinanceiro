export const formatCurrency = (value: number) => {

    const fomartterCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL', minimumFractionDigits: 2
    });
    return fomartterCurrency.format(value)    
}