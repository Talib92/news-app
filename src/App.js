import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Results from './components/Results';
import Header from './components/Header';
import {useSelector} from "react-redux"

function App() {

  // const [theme, setTheme] = useState("Light");
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
          element: <Results theme={theme} /> // outlet == results
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
