import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props;

	const [isCloasing, setIsCloasing] = useState(false);
	const timeRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsCloasing(true);
			timeRef.current = setTimeout(() => {
				onClose();
				setIsCloasing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			clearTimeout(timeRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isCloasing]: isCloasing,
		[cls[theme]]: true,
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
