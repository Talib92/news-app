import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import Shimmer from "./Shimmer"
import LoadMore from './LoadMore';
import {useSelector} from "react-redux"
import useScrollToTop from '../utils/useScrollToTop';
import useHomeNews from '../utils/useHomeNews';

const Home = () => {

  const articles = useSelector((state) => state.article.articles);
  const theme = useSelector((state)=> state.theme.theme);

  const [count, setCount] = useState(21);

  useHomeNews();

  useScrollToTop();

  const loadMore = () => {
    setCount((prevCount) => prevCount + 21);
  };

  return articles.length === 0 ? <Shimmer/> : (
    <>
    <div className={theme === "Light" ? "bg-white text-black" : "bg-neutral-950 text-white"}>

    <div className='md:pt-4 pt-16'>
        <h1 className={`text-3xl font-semibold ml-2 mb-4 text-center mt-16 ${theme === "Light" ? "text-black" : "text-white"}`}>News around the world 🌎</h1>

        <div className='flex flex-wrap lg:gap-12 lg:ml-0 md:gap-2 w-full md:-ml-6 ml-4 gap-4'>

        {articles.slice(0,count).map((news,index) =>(
          <NewsCard key={index} news = {news} theme={theme}/>
        ))}

        </div>

        <LoadMore loadMore={loadMore} count={count} totalLength={articles.length} theme={theme} />

    </div>
    </div>
    </>
  )
}

export default Home