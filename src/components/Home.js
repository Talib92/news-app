import React, { useEffect, useState } from 'react'
import Header from './Header';
import NewsCard from './NewsCard';
import Shimmer from "./Shimmer"

const Home = () => {

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
    <Header/>
    <div className='mt-2'>
        <h1 className='text-3xl font-semibold ml-2 mb-4 text-center'>News around the world 🌎</h1>
        {/* <NewsCard news = {newsData[0]}/> */}
        <div className='flex flex-wrap gap-10'>
        {newsData.map((news,index) =>(
          <NewsCard key={index} news = {news}/>
        ))}
        </div>
    </div>
    </>
  )
}

export default Home