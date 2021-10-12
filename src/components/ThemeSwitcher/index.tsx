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
                width={40}
                height={14}
                handleDiameter={22}
                offColor={colors.primary}
                onColor={colors.secundary}
                offHandleColor={background.primary}
                onHandleColor={colors.primary}
                activeBoxShadow="0 0 3px #DDD"
                
            />
        </ThemeSwitcher.Container>
    )
}