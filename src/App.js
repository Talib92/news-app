import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import {useSelector} from "react-redux"
import { lazy, Suspense } from 'react';
import Shimmer from './components/Shimmer';

const Results = lazy(()=> import("./components/Results"))

function App() {
  
  const theme = useSelector((state)=> state.theme.theme)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header theme={theme} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home theme={theme}/> // outlet == home
        },
        {
          path: "/results/:name",
          element: <Suspense fallback = {<Shimmer/>}> <Results theme={theme} /> </Suspense> // outlet == results
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
