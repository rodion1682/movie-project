import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Login')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
				aliquam cumque sequi a praesentium, ullam ratione placeat, nam fugit
				recusandae necessitatibus distinctio corporis iusto aspernatur
				architecto eum, laborum commodi alias`)}
			</Modal>
		</div>
	);
};
