import React from "react";
import { Item } from "../../types/Items";
import * as T from './styled';

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
                    <tr key={key}>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </T.table>
    );
}