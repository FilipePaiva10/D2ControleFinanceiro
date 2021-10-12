import React, { useState, useEffect } from "react";
import * as app from "./app.styles";

import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import { items } from "./data/items";
import { Item } from "./types/Items";



const App = () => {

  const [theme, setTheme] = usePersistedState('light', light);

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    
    setFilteredList( filterListByMonth(list, currentMonth) );

  }, [list, currentMonth]);

  return (
    <ThemeProvider theme={theme}>
      <app.Container>
        <app.Header>
          <app.HeaderText>Controle Financeiro</app.HeaderText>
        </app.Header>
        <app.Body>
          ...
        </app.Body>
      </app.Container>
      <GlobalStyles/>
    </ThemeProvider>
  )
}


export default App;

