import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{ThemeIcon({ width: '100%', height: '100%' })}
		</Button>
	);
};
