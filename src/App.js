import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Results from './components/Results';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("Light");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header theme={theme} setTheme={setTheme} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home theme={theme} setTheme={setTheme} /> // outlet == home
        },
        {
          path: "/results/:name",
          element: <Results theme={theme} setTheme={setTheme} /> // outlet == results
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
