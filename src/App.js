import './App.css';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Results from './components/Results';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("Light")

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home theme={theme} setTheme={setTheme}/>
    },
    {
      path:"/results/:name",
      element:<Results theme={theme} setTheme={setTheme}/>
    }
  ])

  return (
    <>
    {/* <Header theme={theme} setTheme={setTheme}/> */}
    <RouterProvider router = {router}>
    {/* <Header/> */}
    <Header theme={theme} setTheme={setTheme}/>
    </RouterProvider>
    </> 
  );
}

export default App;
