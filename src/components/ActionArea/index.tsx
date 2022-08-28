import { useEffect, useState } from 'react';
import * as C from './styled';

import { categories } from '../../data/categories';

import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";

type Props = {
    onShowModal: () => void;
    onSearchText: (search : string) => void;
    onSetCategory: (category: string) => void;
}

type categorieOption = {
    category: string;
    title?: string;
}

const ActionArea = ({onShowModal, onSearchText,  onSetCategory} : Props) => {

    const [categoriesOption, setCategoriesOption] = useState<categorieOption[]>([]);

    const getCategories = () => {
        let newCategories = [];

        for (let i in categories) {
            newCategories.push({
                category: i,
                title: categories[i].title
            });
        }

        console.log(newCategories);

        setCategoriesOption(newCategories);
    }

    const handleSetCategory = (category: any) => {
        if(category != undefined){
            onSetCategory(category);
        }
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
            <C.FilterItem
                onChange={ (e) => handleSetCategory(e.target.value)}
            >
                <C.OptionItem value="all">Todos</C.OptionItem>
                {categoriesOption.map((item, key) => (
                    <C.OptionItem
                        key={key}
                        value={item.category}
                    >{item.title}</C.OptionItem>
                ))}
            </C.FilterItem>
            <C.SearchItem 
             type="text" 
             onChange={e => onSearchText(e.target.value)}
             placeholder="Buscar Receita/Despesa" />
        </C.Container>
    )
}


export default ActionArea;