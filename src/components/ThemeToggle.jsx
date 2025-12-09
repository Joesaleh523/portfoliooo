import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({dark,setDark}){
  return <button onClick={()=>setDark(!dark)} className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition">
    {dark?<Sun size={18}/>:<Moon size={18}/>}
  </button>
}
