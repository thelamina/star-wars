import create from 'zustand';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: {
		id: string;
		email: string;
	};

	loginUser: (email: string, password: string) => Promise<void>;
	logoutUser: () => void;
}

export const useStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	isLoading: false,
	user: {
		id: '',
		email: '',
	},
	logoutUser: () =>
		set((state) => {
			({
				...state,
				isAuthenticated: false,
				user: { id: '', email: '' },
			} as AuthState);
		}),

	loginUser: (email: string, password: string) => {
		return new Promise((resolve, reject) => {
			set((state) => {
				({
					...state,
					isLoading: true,
				} as AuthState);
			});
			return setTimeout(() => {
				resolve(
					set((state) => ({
						...state,
						isAuthenticated: true,
						isLoading: false,
						user: {
							id: Math.random().toString(),
							email: email,
						},
					}))
				);
			}, 5000);
		});
	},
}));
