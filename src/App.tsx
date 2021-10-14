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
import ThemeSwitcher from "./components/ThemeSwitcher";
import ReactTooltip from "react-tooltip";
import ActionArea from "./components/ActionArea";
import ModalAddItem from "./components/ModalAddItem";



const App = () => {

  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = usePersistedState('light', light);

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [search, setSearch] = useState('');

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const toggleTheme = () => {
    if (theme.title !== 'Dark') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const handleAddItem = (item: Item) => {

    let newlist: Item[] = [...list];

    newlist.push({
      date: new Date(),
      category: item.category,
      title: item.title,
      value: parseFloat(item.value.toFixed(2))
    });

    setList(newlist);

    handleShowModal();
  }

  const handleFilterByCategory = (category: string) => {    
    console.log("Categoria enviada: " + category);
    if (category != "all") {

      setFilteredList(filterListByMonth(list, currentMonth));

      let newList = filteredList.filter((item: Item) => {
        if (item.category == category)
          return item;
      });

      setFilteredList(newList);

    } else {
      setFilteredList(filterListByMonth(list, currentMonth));
    }

  }

  const handleFilterByTitle = () => {

    if (search != '') {
      let newList = filteredList.filter((item: Item) => {
        if (item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0)
          return item;
      });

      setFilteredList(newList);
    } else {
      setFilteredList(filterListByMonth(list, currentMonth));
    }
  }

  const handleEditItem = (item: Item) => {

  }

  const handleDeleteItem = (title: string) => {

    let newlist: Item[] = list.filter((item: Item) => {
      if (item.title != title)
        return item;
    });

    setList(newlist);
  }

  useEffect(() => {

    handleFilterByTitle();

  }, [search]);

  useEffect(() => {

    setFilteredList(filterListByMonth(list, currentMonth));
    setSearch('');

  }, [list, currentMonth]);

  useEffect(() => {

    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
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
          <ThemeSwitcher
            data-tip="Mudar tema"
            data-for="tip-top"
            toogleTheme={toggleTheme} />
        </app.Header>
        <app.Body>
          <InfoArea
            currentMonth={currentMonth}
            onChangeMonth={handleChangeMonth}
            income={income}
            expense={expense}
          />
          <ActionArea
            onShowModal={handleShowModal}
            onSetCategory={handleFilterByCategory}
            onSearchText={setSearch}
          />
          <TableArea
            list={filteredList}
            onEditItem={handleEditItem}
            onDeleteItem={handleDeleteItem}
          />
        </app.Body>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
      </app.Container>
      {showModal &&
        <ModalAddItem
          onShowModal={handleShowModal}
          onAddItem={handleAddItem}
        />
      }
      <GlobalStyles />
    </ThemeProvider>
  )
}


export default App;

