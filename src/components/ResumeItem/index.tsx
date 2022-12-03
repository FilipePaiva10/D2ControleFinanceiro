import * as C from './styled';
import { formatCurrency } from '../../helpers/formatCurrency';


type Props = {
    title: string;
    value: number;
    color?: string;
    tipTitle: string
}

export const ResumeItem = ({ title, value, color, tipTitle } : Props) => {
    return (
        <C.Container data-tip={tipTitle} data-for="tip-top">
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{formatCurrency(value)}</C.Info>
        </C.Container>
    );
}