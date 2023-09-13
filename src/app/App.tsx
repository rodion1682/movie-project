import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/router';
import { SideBar } from 'widgets/SideBar/ui';
import { NavBar } from 'widgets/NavBar';

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<NavBar />

				<div className="content-page">
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
