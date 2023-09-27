import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = () => (
	<Routes>
		{Object.values(routeConfig).map(({ path, element }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className="page-wrapper">{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
);
