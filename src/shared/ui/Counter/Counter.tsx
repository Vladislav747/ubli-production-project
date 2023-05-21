import React, { useState } from 'react';
import classes from 'src/shared/ui/Counter/Counter.module.scss';
import { useTranslation } from 'react-i18next';

const Counter = () => {
    const { t } = useTranslation();

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button type="button" onClick={increment}>
                {t('Увеличить')}
            </button>
        </div>
    );
};

export default Counter;
