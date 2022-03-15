import { Routes, Route } from 'react-router-dom';
import { routes } from './routeList';

import React from 'react';
import { ProtectedRoute } from './ProtectedRoute';

export const Router = () => {
	return (
		<Routes>
			{routes.map((route) => {
				const Element = route.component;

				return (
					<Route
						key={route.path}
						path={route.path}
						element={
							route.protected ? (
								<ProtectedRoute outlet={<Element />} />
							) : (
								<Element />
							)
						}
					>
						{route?.children?.map((childRoute) => {
							const ChildElement = childRoute.component;
							return (
								<Route
									key={childRoute.path}
									path={childRoute.path}
									element={<ChildElement />}
								/>
							);
						})}
					</Route>
				);
			})}
		</Routes>
	);
};

export { routes };
