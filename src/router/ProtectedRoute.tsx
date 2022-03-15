import { Navigate } from 'react-router-dom';
import { useStore } from '../store';

export type ProtectedRouteProps = {
	outlet: JSX.Element;
};

export const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
	const { isAuthenticated } = useStore();
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: 'login' }} />;
	}
};
