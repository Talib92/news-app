import React, { useEffect, useState } from 'react'
import Header from './Header';
import NewsCard from './NewsCard';
import Shimmer from "./Shimmer"
import LoadMore from './LoadMore';

const Home = ({theme, setTheme}) => {

  const [newsData, setNewsdata] = useState([]);
  const [count, setCount] = useState(21);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const getFormattedDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const fetchedNews = async () =>{
    const data = await fetch(`https://newsapi.org/v2/everything?q=india+us&from=${getFormattedDate(yesterday)}&to=${getFormattedDate(today)}&apiKey=dd6207cc1b334934a44762a84ba17525`);
    const jsonData = await data.json();
    // console.log(jsonData.articles)
    setNewsdata(jsonData.articles);
  }

  useEffect(() =>{
    fetchedNews();
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 21);
  };


  return newsData.length === 0 ? <Shimmer/> : (
    <>
    {/* <Header theme={theme} setTheme={setTheme}/> */}

    <div className={theme === "Light" ? "bg-white text-black" : "bg-neutral-950 text-white"}>

    <div className='md:pt-4 pt-16'>
        <h1 className={`text-3xl font-semibold ml-2 mb-4 text-center mt-16 ${theme === "Light" ? "text-black" : "text-white"}`}>News around the world 🌎</h1>
        {/* <NewsCard news = {newsData[0]}/> */}

        <div className='flex flex-wrap lg:gap-12 lg:ml-0 md:gap-2 w-full md:-ml-6 ml-4 gap-4'>

        {newsData.slice(0,count).map((news,index) =>(
          <NewsCard key={index} news = {news} theme={theme}/>
        ))}

        </div>

        <LoadMore loadMore={loadMore} count={count} totalLength={newsData.length} theme={theme} />

    </div>
    </div>
    </>
  )
}

export default Home