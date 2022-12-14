import { signIn, signOut, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

export default function Home() {
	const { data: session } = useSession()
	const { theme, setTheme } = useTheme()
	return (
		<div>
			<h1>Pomodoro++</h1>
			<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
				Toggle dark mode
			</button>

			{session && (
				<div>
					<h2>Session: {session.user.name}</h2>
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			)}

			{!session && (
				<div>
					<h2>Not signed in</h2>
					<button onClick={() => signIn()}>Sign in</button>
				</div>
			)}
		</div>
	)
}
