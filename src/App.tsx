import React, { useState, useEffect } from "react";
import * as app from "./app.styles";

import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

import { TableArea } from "./components/TableArea";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import { items } from "./data/items";
import { Item } from "./types/Items";
import { InfoArea } from "./components/InfoArea";
import { categories } from "./data/categories";



const App = () => {

  const [theme, setTheme] = usePersistedState('light', light);

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }


  useEffect(() => {

    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  useEffect(() => {

    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
       if(categories[filteredList[i].category].expense){
         expenseCount += filteredList[i].value;
       }else{
         incomeCount += filteredList[i].value;
       }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  return (
    <ThemeProvider theme={theme}>
      <app.Container>
        <app.Header>
          <app.HeaderText>Controle Financeiro</app.HeaderText>
        </app.Header>
        <app.Body>
          <InfoArea
            currentMonth={currentMonth}
            onChangeMonth={handleChangeMonth}
            income={income}
            expense={expense}
          />
          <TableArea
            list={filteredList}
          />
        </app.Body>
      </app.Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}


export default App;

