import React from "react";
import * as app from "./app.styles";

import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";



const App = () => {

  const [theme, setTheme] = usePersistedState('light', light);

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

