import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			<ThemeSwitcher />
			<LangSwitcher className={cls.lang} />
			<div className={cls.links}>
				<AppLink
					to="/"
					theme={AppLinkTheme.PRIMARY}
					className={cls.mainLink}
				>
					{t('Main page')}
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
					{t('About us')}
				</AppLink>
			</div>
		</div>
	);
};
