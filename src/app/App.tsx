import React from 'react';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/router";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
