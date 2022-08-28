import { useEffect, useState } from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../types/Items';
import * as C from './styled';

type Props = {
    onShowModal: () => void;
    onAddItem: ({ title, category, value }: Item) => void;
    currentItem: Item
}

type categorieOption = {
    category: string;
    title?: string;
}

const ModalAddItem = ({ onShowModal, onAddItem }: Props) => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);

    const [categoriesOption, setCategoriesOption] = useState<categorieOption[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        let newCategories = [];

        for (let i in categories) {
            newCategories.push({
                category: i,
                title: categories[i].title
            });
        }

        setCategoriesOption(newCategories);
    }

    const closeModal = (e: any) => {
        if (e.target.classList.contains("modal")) {
            onShowModal();
        }
        else {

        }
    }

    const handleAddItem = () => {
        if (validateForm()) {

            const item: Item = {
                title: title,
                category: category,
                value: value,
                date: new Date()
            }

            onAddItem(item);
            onShowModal();
        }
    }

    const validateForm = () => {

        let ok = true;

        if (title === '') {
            ok = false;
            alert("Preencha o título");
        }

        if (category === '') {
            ok = false;
            alert("Selecione a categoria");
        }

        if (value === 0) {
            ok = false;
            alert("informe o valor");
        }

        return ok;
    }

    return (
        <C.Container className="modal" onClick={closeModal}>
            <C.Content>
                <C.Body>
                    <C.TitleArea>
                        <C.Title>Título</C.Title>
                        <C.InputTitle
                            title={title}
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            placeholder="digite o seu gasto ou receita"
                        />
                    </C.TitleArea>
                    <C.CategoryArea>
                        <C.CategoryTitle>Categoria</C.CategoryTitle>
                        <C.CategorySelect
                            category={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <C.CategoryOption value="">Selecione Uma categoria</C.CategoryOption>
                            {categoriesOption.map((item, key) => (
                                <C.CategoryOption
                                    key={key}
                                    value={item.category}
                                >{item.title}</C.CategoryOption>
                            ))}
                        </C.CategorySelect>
                    </C.CategoryArea>
                    <C.ValueArea>
                        <C.ValueText>Valor</C.ValueText>
                        <C.InputValue
                            price={value}
                            type="number"
                            placeholder="Ex: 23.50"
                            onChange={e => setValue(parseFloat(e.target.value))}
                            value={value}
                        />
                    </C.ValueArea>
                </C.Body>
                <C.Footer>
                    <C.BtnAdd
                        onClick={handleAddItem}
                    >Editar</C.BtnAdd>
                </C.Footer>
            </C.Content>
        </C.Container>
    )
}


export default ModalAddItem;