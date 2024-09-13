import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import NewsCard from './NewsCard';
import Shimmer from './Shimmer';
import LoadMore from './LoadMore';

const Results = ({theme, setTheme}) => {

  const {name} = useParams(); 
  const [fetchData, setFetchedData] = useState([]);
  const [count, setCount] = useState(21);
  

  const fetchNews = async () =>{
    const data = await fetch(`https://newsapi.org/v2/everything?q=${name}&from=2024-09-12&apiKey=dd6207cc1b334934a44762a84ba17525`);
    const jsonData = await data.json();
    //  console.log(jsonData.articles)
    setFetchedData(jsonData.articles);
  }

  useEffect(() =>{
    fetchNews();
  },[name]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 21);
  };

  return fetchData.length === 0 ? <Shimmer/> : (

    <div>
      <Header theme={theme} setTheme={setTheme}/>

      <div className={`${theme === "Light" ? "bg-white text-black" : "bg-neutral-900 text-white"} pt-20`}>
      <h1 className='text-3xl font-semibold ml-2 mb-4 text-center'>News about {name}.</h1>
      {/* <NewsCard news={fetchData[0]}/> */}

      <div className='flex flex-wrap gap-10 w-full'>

        {fetchData.slice(0,count).map((news,index) =>(
          <NewsCard key={index} news = {news} theme={theme}/>
        ))}

      </div>
      <LoadMore loadMore={loadMore} count={count} totalLength={fetchData.length} theme={theme} />
    </div>
    </div>
  )
}

export default Results