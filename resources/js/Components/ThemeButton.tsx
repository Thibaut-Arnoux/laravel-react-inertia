import { Moon } from '@/Components/Icons/Moon';
import { Sun } from '@/Components/Icons/Sun';
import { ThemeEnum } from '@/enums/theme';
import { useThemeActions } from '@/hooks/useThemeStore';
import { themeStore } from '@/stores/themeStore';
import { Theme } from '@/types/theme';
import { HtmlHTMLAttributes, useEffect, useState } from 'react';

export const ThemeButton = ({
    className = '',
    ...props
}: HtmlHTMLAttributes<HTMLInputElement>) => {
    const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);
    const { toggleTheme } = useThemeActions();

    useEffect(() => {
        // load theme only once to avoid bug `swap` animation
        setTheme(themeStore.getState().theme);
    }, []);

    return (
        <label
            className={
                'btn btn-circle btn-ghost swap swap-rotate btn-sm ' + className
            }
        >
            {/* this hidden checkbox controls the state */}
            <input
                {...props}
                onClick={() => toggleTheme()}
                className="hidden"
                type="checkbox"
            />

            {theme === ThemeEnum.LIGHT ? <DarkSwitch /> : <LightSwitch />}
        </label>
    );
};

const DarkSwitch = () => {
    return (
        <>
            <Moon className="swap-off" />

            <Sun className="swap-on" />
        </>
    );
};

const LightSwitch = () => {
    return (
        <>
            <Sun className="swap-off" />

            <Moon className="swap-on" />
        </>
    );
};
