import * as C from './styled';

import { Item } from '../../types/Items';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import { FaHandHoldingUsd } from "@react-icons/all-files/fa/FaHandHoldingUsd";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaGasPump } from "@react-icons/all-files/fa/FaGasPump";

import ReactTooltip from "react-tooltip";



type Props = {
    item: Item
    handleEditItem: (item: Item) => void;
    handleDeleteItem: (str: string) => void;
}

export const TableItem = ({ item, handleEditItem ,handleDeleteItem }: Props) => {

    const SetIcon = (category: string) => {
        switch (category) {
            case 'alimentação':
                return <FaUtensils data-tip="Alimentação" data-for="tip-top" />
            case 'Aluguel':
                return <FaHome data-tip="Moradia" data-for="tip-top" />
            case 'Salário':
                return <FaHandHoldingUsd data-tip="Salário" data-for="tip-top" />
            case 'Combustível':
                return <FaGasPump data-tip="Combustível" data-for="tip-top" />
            default:
                break;
        }
    };

    const onEditItem = (item: Item) => {

    };

    const onDeleteItem = ({title} : Item) => {
        handleDeleteItem(title);
    };

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category
                    bgcolor={categories[item.category].color}
                >
                    {SetIcon(categories[item.category].title)}
                    {`    ${categories[item.category].title}`}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value
                    color={categories[item.category].expense ? '#dc3545' : '#28a745'}
                >
                    R$ {item.value}</C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.IconArea>
                    <C.IconItem
                        data-tip="Editar"
                        data-for="tip-top"
                    >
                        <FaEdit
                            onClick={() => onEditItem(item)}
                        />
                    </C.IconItem>
                    <C.IconItem
                        data-tip="Excluir"
                        data-for="tip-top"
                    >
                        <FaTrash
                            onClick={() => onDeleteItem(item)}
                        />
                    </C.IconItem>
                </C.IconArea>
            </C.TableColumn>
            <ReactTooltip id="tip-top" place="top" effect="solid" />
        </C.TableLine>
    );
}