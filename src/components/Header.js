import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({theme, setTheme}) => {

   //  const [theme, setTheme] = useState("Light")

  return (
    <div className={`flex shadow-sm h-16 w-full ${theme === "Dark" ? "bg-neutral-800 text-white" : "bg-white text-black"}`}>
        <div>
           <Link to={"/"}> <img className='w-24 h-16 cursor-pointer -mt-1 ml-2' src="https://c8.alamy.com/comp/M2HDGA/world-news-flat-vector-icon-news-symbol-logo-illustration-M2HDGA.jpg" 
            alt="logo" />
            </Link>
        </div>
        <div>

            <ul className='flex cursor-pointer mt-4 font-semibold ml-8'>
               <Link to={"/"}> 
                 <li className='mx-4 hover:underline'>Home</li>
              </Link>
              <Link to={"/results/business"}>  
                  <li className='mx-4 hover:underline'>Business</li> 
               </Link>
               <Link to={"/results/culture"}> 
                  <li className='mx-4 hover:underline'>Culture</li> 
               </Link>
               <Link to={"/results/economy"}> 
                  <li className='mx-4 hover:underline'>Economy</li> 
               </Link>
               <Link to={"/results/kashmir"}> 
                  <li className='mx-4 hover:underline'>Kashmir</li> 
               </Link>
               <Link to={"/results/science"}> 
                  <li className='mx-4 hover:underline'>Science</li> 
               </Link>
               <Link to={"/results/sports"}> 
                  <li className='mx-4 hover:underline'>Sports</li> 
               </Link>
               <Link to={"/results/stocks"}> 
                  <li className='mx-4 hover:underline'>Stocks</li> 
               </Link>
               <Link to={"/results/technology"}> 
                  <li className='mx-4 hover:underline'>Technology</li> 
               </Link>
               <Link to={"/results/travel"}> 
                  <li className='mx-4 hover:underline'>Travel</li> 
               </Link>
               <Link to={"/results/trending"}> 
                  <li className='mx-4 hover:underline'>Trending</li> 
               </Link>
               <Link to={"/results/war"}> 
                  <li className='mx-4 hover:underline'>War</li> 
               </Link>
            </ul>

        </div>
        <div>
         <button className={`px-4 py-1 mt-3 rounded-lg font-semibold ${theme === "Light" ? "bg-gray-200 text-black" : "bg-black text-white"}` }
         onClick={()=>{theme === "Light" ?  setTheme("Dark")  : setTheme("Light")}}>
            {theme}
         </button>
        </div>
    </div>
  )
}

export default Header