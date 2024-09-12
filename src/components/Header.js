import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='flex shadow-sm  h-16'>
        <div>
           <Link to={"/"}> <img className='w-24 h-16 cursor-pointer -mt-2 ml-2' src="https://c8.alamy.com/comp/M2HDGA/world-news-flat-vector-icon-news-symbol-logo-illustration-M2HDGA.jpg" 
            alt="logo" />
            </Link>
        </div>
        <div>

            <ul className='flex cursor-pointer mt-4 font-semibold ml-8'>
               <Link to={"/"}> 
                 <li className='mx-4 hover:underline'>Home</li>
              </Link>
               <Link to={"/results/sports"}> 
                  <li className='mx-4 hover:underline'>Sports</li> 
               </Link>
               <Link to={"/results/business"}>  
                  <li className='mx-4 hover:underline'>Business</li> 
               </Link>
               <Link to={"/results/science"}> 
                  <li className='mx-4 hover:underline'>Science</li> 
               </Link>
               <Link to={"/results/technology"}> 
                  <li className='mx-4 hover:underline'>Technology</li> 
               </Link>
               <Link to={"/results/stocks"}> 
                  <li className='mx-4 hover:underline'>Stocks</li> 
               </Link>
               <Link to={"/results/war"}> 
                  <li className='mx-4 hover:underline'>War</li> 
               </Link>
            </ul>
        </div>

        <div>
         <button className='bg-green-500 px-4 py-1 mt-4 ml-8 rounded-lg font-semibold'>Light</button>
        </div>
    </div>
  )
}

export default Header