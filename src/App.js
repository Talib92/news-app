import './App.css';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Results from './components/Results';
import Header from './components/Header';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/results/:name",
      element:<Results/>
    }
  ])

  return (
    <>
    <RouterProvider router = {router}>
    <Header/>
    </RouterProvider>
    </> 
  );
}

export default App;
