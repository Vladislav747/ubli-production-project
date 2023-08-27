import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitialized, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
