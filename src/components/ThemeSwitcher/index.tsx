import React, {useContext} from 'react';

import { ThemeContext } from 'styled-components';

import * as ThemeSwitcher from './styled';

import Switcher from 'react-switch';

type props = {
    toogleTheme: () => void
}

export default ({toogleTheme}: props) => {

    const {colors, title, background} = useContext(ThemeContext);

    return (
        <ThemeSwitcher.Container>
            <Switcher
                onChange={toogleTheme}
                checked={title === "Dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                width={50}
                height={20}
                handleDiameter={25}
                offColor={colors.primary}
                onColor={colors.secundary}
                offHandleColor={background.secundary}
                onHandleColor={colors.primary}
                activeBoxShadow="0 0 3px #DDD"
                
            />
        </ThemeSwitcher.Container>
    )
}