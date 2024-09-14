import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({theme, setTheme}) => {

   //  const [theme, setTheme] = useState("Light")

  return (
    <div className={`flex flex-row shadow-sm md:h-16 h-[120px] w-full fixed  ${theme === "Dark" ? "bg-neutral-800 text-white" : "bg-white text-black"}`}>
        <div>
           <Link to={"/"}> <img className='w-24 md:h-16 cursor-pointer -mt-1 ml-2 fixed' src="https://c8.alamy.com/comp/M2HDGA/world-news-flat-vector-icon-news-symbol-logo-illustration-M2HDGA.jpg" 
            alt="logo" />
            </Link>
        </div>
        <div>

            <ul className='flex flex-row flex-wrap cursor-pointer mt-4 font-semibold ml-28 md:flex-row'>
               <Link to={"/"}> 
                 <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Home</li>
              </Link>
              <Link to={"/results/business"}>  
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Business</li> 
               </Link>
               <Link to={"/results/culture"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Culture</li> 
               </Link>
               <Link to={"/results/economy"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Economy</li> 
               </Link>
               <Link to={"/results/gaza"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Gaza</li> 
               </Link>
               <Link to={"/results/kashmir"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Kashmir</li> 
               </Link>
               <Link to={"/results/science"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Science</li> 
               </Link>
               <Link to={"/results/sports"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Sports</li> 
               </Link>
               <Link to={"/results/stocks"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Stocks</li> 
               </Link>
               <Link to={"/results/technology"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Technology</li> 
               </Link>
               <Link to={"/results/travel"}> 
                  <li className='lg:mx-4 md:mx-4 mx-1 hover:underline'>Travel</li> 
               </Link>
               <Link to={"/results/trending"}> 
                  <li className='mx-4 hover:underline'>Trending</li> 
               </Link>
            </ul>
        </div>

        <div>
         <button className={`px-4 py-1 md:mt-5 mt-10 mr-4 rounded-lg font-semibold md:mr-4 lg:mt-4 lg:ml-2
         ${theme === "Light" ? "bg-gray-100 text-black hover:bg-gray-300" : "bg-black text-white hover:bg-neutral-700"}` }
         onClick={()=>{theme === "Light" ?  setTheme("Dark")  : setTheme("Light")}}>
            {theme}
         </button>
        </div>

    </div>
  )
}

export default Header