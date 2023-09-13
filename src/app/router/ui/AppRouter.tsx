import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={<div className="page-wrapper">{element}</div>}
				/>
			))}
		</Routes>
	</Suspense>
);
