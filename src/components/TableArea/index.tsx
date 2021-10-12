import React from "react";
import * as T from './styled';

import { TableItem } from "../TableItem";

import { Item } from "../../types/Items";

type Props = {
    list: Item[];
}

export const TableArea = ({ list } : Props ) => {
    return (
        <T.table>
            <thead>
                <tr>
                    <T.theadColumn width={100}>Data</T.theadColumn>
                    <T.theadColumn width={130}>Categoria</T.theadColumn>
                    <T.theadColumn>Título</T.theadColumn>
                    <T.theadColumn width={150}>Valor</T.theadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, key) => (
                   <TableItem key={key}  item={item} />
                ))}
            </tbody>
        </T.table>
    );
}