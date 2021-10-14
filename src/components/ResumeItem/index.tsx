import * as C from './styled';

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
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    );
}