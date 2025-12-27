import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 p-3 rounded-full 
      bg-gray-200 dark:bg-gray-800 
      text-gray-900 dark:text-white shadow"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
