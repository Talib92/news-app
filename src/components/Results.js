import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import NewsCard from './NewsCard';

const Results = () => {

  const {name} = useParams(); 

  
  const [fetchData, setFetchedData] = useState([]);

  const fetchNews = async () =>{
    const data = await fetch(`https://newsapi.org/v2/everything?q=${name}&from=2024-09-11&apiKey=dd6207cc1b334934a44762a84ba17525`);
    const jsonData = await data.json();
    // console.log(jsonData.articles)
    setFetchedData(jsonData.articles);
  }

  useEffect(() =>{
    fetchNews();
  },[fetchData]);

  return (
    <div>
      <Header/>
      <h1 className='text-3xl font-semibold ml-2 mb-4 text-center'>News about {name}.</h1>
      {/* <NewsCard news={fetchData[0]}/> */}
      <div className='flex flex-wrap gap-10'>
        {fetchData.map((news,index) =>(
          <NewsCard key={index} news = {news}/>
        ))}
        </div>
    </div>
  )
}

export default Results