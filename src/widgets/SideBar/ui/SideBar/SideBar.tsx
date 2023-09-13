import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button type="button" onClick={onToggle}>
				{t('Toggle')}
			</button>
		</div>
	);
};
