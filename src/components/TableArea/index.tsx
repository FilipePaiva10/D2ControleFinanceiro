import React from "react";
import * as T from './styled';

import { TableItem } from "../TableItem";

import { Item } from "../../types/Items";
import ReactTooltip from "react-tooltip";

type Props = {
    list: Item[];
}

export const TableArea = ({ list } : Props ) => {
    return (
        <T.table>
            <thead>
                <tr>
                    <T.theadColumn width={100}>Data</T.theadColumn>
                    <T.theadColumn width={100}>Categoria</T.theadColumn>
                    <T.theadColumn>Título</T.theadColumn>
                    <T.theadColumn width={150}>Valor</T.theadColumn>
                    <T.theadColumn width={50}>#</T.theadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, key) => (
                   <TableItem key={key}  item={item} />
                ))}
            </tbody>
            <ReactTooltip id="tip-top" place="top" effect="solid" />
        </T.table>
    );
}