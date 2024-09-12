import { create } from 'zustand'

export interface User {
	id: string
	user_oauth_id: string
	name: string
	email: string
}

interface AuthState {
	user: User | null
	loading: boolean
	setUser: (user: User | null) => void
	isAuthenticated: boolean
	clearUser: () => void
	setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	loading: true,
	isAuthenticated: false,
	setUser: (userData) => {
		set({ user: userData })
		set({ isAuthenticated: !!userData })
	},
	clearUser: () => {
		set({ user: null })
		set({ isAuthenticated: false })
	},
	setLoading: (loading) => set({ loading })
}))

