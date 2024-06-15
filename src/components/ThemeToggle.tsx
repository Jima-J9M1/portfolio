import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();


    const handleThemeChange = () => {
        console.log(">>>>> before  new theme >>>>>>", theme)
        const newTheme = theme === 'dark'? 'light' : 'dark';
        console.log(">>>>> new theme >>>>>>", newTheme)
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };
      
      // In your useEffect or similar logic, initialize the theme based on localStorage
      useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
         console.log(">>>>>>> console log >>>>>>>", localTheme)
          setTheme(localTheme);
        }
      }, []);

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-full focus:outline-none focus:ring"
    >
      {theme === 'dark' ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-500" />}
    </button>
  );
};

export default ThemeToggle;