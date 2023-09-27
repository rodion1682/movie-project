import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
				{t('Toggle')}
			</button>
		</div>
	);
};
