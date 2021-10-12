import * as C from './styled';

import { Item } from '../../types/Items';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category
                    bgcolor={categories[item.category].color}
                >
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value
                    color={categories[item.category].expense ? 'red' : 'green'}
                >
                    R$ {item.value}</C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}