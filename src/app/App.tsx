import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'}>Main page</Link>
			<Link to={'/about'}>About page</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
