import React, { useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '../../Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon } from '@/shared/ui/Icon';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
};
