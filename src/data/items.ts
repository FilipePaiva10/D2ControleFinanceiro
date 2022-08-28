import { Item } from "../types/Items";

export const items : Item[] = [
    { date: new Date(2022, 7, 12), category: 'food', title: 'McDonalds', value: 34.15 },
    { date: new Date(2022, 7, 12), category: 'food', title: 'Burger King', value: 24.10 },
    { date: new Date(2022, 7, 12), category: 'rent', title: 'Aluguel APT', value: 2500 },
    { date: new Date(2021, 10,1), category: 'salary', title: 'Salário EMP', value: 5500 },
    { date: new Date(2022, 7 , 1), category: 'salary', title: 'Salário ABC', value: 5500 },
    { date: new Date(2022, 7 , 1), category: 'fuel', title: 'Combustível carro', value: 200, description: 'Abastecido com gasolina comum' },
];