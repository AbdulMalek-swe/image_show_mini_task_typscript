import { FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
const lightMode = 'light';
const darkMode = 'dark';

const UseDark = () => {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || lightMode; 
      });
      useEffect(() => {
        const body = document.body;
        body.classList.add(theme);
        return () => {
          body.classList.remove(theme);
        };
      }, [theme]);  
      const toggleTheme = () => {
        const newTheme = theme === darkMode ? lightMode : darkMode;
        setTheme(newTheme);  
        localStorage.setItem('theme', newTheme);  
      };
    return (
        <div onClick={toggleTheme}>
             <FormControlLabel labelPlacement="start" sx={{ color: 'black' }} label= {theme==='dark'?'Light Mode':'Dark Mode'}  control={<Switch checked={theme==='dark'?true:false} />} />
        </div>
    );
};

export default UseDark;