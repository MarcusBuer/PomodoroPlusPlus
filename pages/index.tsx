import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1>Pomodoro++</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}