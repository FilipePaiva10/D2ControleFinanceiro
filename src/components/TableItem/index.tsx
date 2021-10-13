import * as C from './styled';

import { Item } from '../../types/Items';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import { FaHandHoldingUsd } from "@react-icons/all-files/fa/FaHandHoldingUsd";
import { FaHome } from "@react-icons/all-files/fa/FaHome";



type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    const SetIcon = (category: string) => {
        switch (category) {
            case 'alimentação':
                return <FaUtensils/>
                break;
            case 'Aluguel':
                return <FaHome/>
            case 'Salário':
                return <FaHandHoldingUsd/>
            default:
                break;
        }
    }

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category
                    data-tip="TESTE"
                    data-for="tip-top"
                    bgcolor={categories[item.category].color}
                >
                    {SetIcon(categories[item.category].title)}
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
                    <FaEdit/>
                    <FaTrash />
                </C.IconArea>
            </C.TableColumn>
        </C.TableLine>
    );
}