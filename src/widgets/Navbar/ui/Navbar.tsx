import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<LangSwitcher className={cls.lang} />
			<div className={cls.links}>
				<AppLink
					to="/"
					theme={AppLinkTheme.SECONDARY}
					className={cls.mainLink}
				>
					{t('Main page')}
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
					{t('About us')}
				</AppLink>
			</div>
		</div>
	);
};
