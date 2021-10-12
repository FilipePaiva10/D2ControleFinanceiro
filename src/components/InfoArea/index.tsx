import { formatCurrentMonth } from '../../helpers/dateFilter';
import * as C from './styled';


type Props = {
    currentMonth: string;
    onChangeMonth: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onChangeMonth } : Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1); 
        onChangeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1); 
        onChangeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow
                  onClick={handlePrevMonth}
                >k</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow
                    onClick={handleNextMonth}
                >s</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    )
}