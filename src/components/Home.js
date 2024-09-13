import React, { useEffect, useState } from 'react'
import Header from './Header';
import NewsCard from './NewsCard';
import Shimmer from "./Shimmer"

const Home = ({theme, setTheme}) => {

  const [newsData, setNewsdata] = useState([]);

  const fetchedNews = async () =>{
    const data = await fetch("https://newsapi.org/v2/everything?q=india+us&from=2024-09-11&apiKey=dd6207cc1b334934a44762a84ba17525");
    const jsonData = await data.json();
    // console.log(jsonData.articles)
    setNewsdata(jsonData.articles);
  }

  useEffect(() =>{
    fetchedNews();
  },[]);

  return newsData.length === 0 ? <Shimmer/> : (
    <>
    <Header theme={theme} setTheme={setTheme}/>
    <div className={theme === "Light" ? "bg-white text-black" : "bg-neutral-950 text-white"}>
    <div className='pt-4'>
        <h1 className={`text-3xl font-semibold ml-2 mb-4 text-center mt-16 ${theme === "Light" ? "text-black" : "text-white"}`}>News around the world 🌎</h1>
        {/* <NewsCard news = {newsData[0]}/> */}
        <div className='flex flex-wrap gap-10'>
        {newsData.map((news,index) =>(
          <NewsCard key={index} news = {news} theme={theme}/>
        ))}
        </div>
    </div>
    </div>
    </>
  )
}

export default Home