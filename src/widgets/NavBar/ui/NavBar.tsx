import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
	<div className={classNames(cls.NavBar, {}, [className])}>
		<ThemeSwitcher />
		<LangSwitcher className={cls.lang} />
		<div className={cls.links}>
			<AppLink to="/" theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>
				Main page
			</AppLink>
			<AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
				About page
			</AppLink>
		</div>
	</div>
);
