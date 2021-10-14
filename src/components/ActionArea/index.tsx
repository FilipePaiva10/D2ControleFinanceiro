import { useEffect, useState } from 'react';
import * as C from './styled';

import { items } from '../../data/items';
import { categories } from '../../data/categories';

import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";

type Props = {
    onShowModal: () => void;
}

type categorieOption = {
    category: string;
    title?: string;
}

const ActionArea = ({onShowModal} : Props) => {

    const [categoriesOption, setCategoriesOption] = useState<categorieOption[]>([]);

    const getCategories = () => {
        let newCategories = [];

        for (let i in items) {
            newCategories.push({
                category: items[i].category,
                title: categories[items[i].category].title
            });
        }

        setCategoriesOption(newCategories);
    }

    const handleAddItem = () => {
        onShowModal();
    }

    useEffect(() => {
        getCategories();

    }, []);

    return (
        <C.Container>
            <C.AddItem
               data-tip="Adicionar Receita/Despesa"
               data-for="tip-top"
             > 
                <FaPlusCircle
                    onClick={handleAddItem}
                />
            </C.AddItem>
            <C.FilterItem>
                <C.OptionItem>Todos</C.OptionItem>
                {categoriesOption.map((item, key) => (
                    <C.OptionItem
                        key={key}
                    >{item.title}</C.OptionItem>
                ))}
            </C.FilterItem>
            <C.SearchItem type="text" placeholder="Buscar Receita/Despesa" />
        </C.Container>
    )
}


export default ActionArea;