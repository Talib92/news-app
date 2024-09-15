import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {setArticles} from "../utils/articlesSlice";

const useResultsNews = () =>{

  const {name} = useParams(); 
  const dispatch = useDispatch();

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
  
    const getFormattedDate = (date) => {
      return date.toISOString().split('T')[0];
    };
    
  
    const fetchNews = async () =>{
      const data = await fetch(`https://newsapi.org/v2/everything?q=${name}&from=${getFormattedDate(yesterday)}&to=${getFormattedDate(today)}&apiKey=dd6207cc1b334934a44762a84ba17525`);
      const jsonData = await data.json();
      //  console.log(jsonData.articles)
      dispatch(setArticles(jsonData.articles || []))
    }
  
    useEffect(() =>{
      fetchNews();
    },[name]);
};

export default useResultsNews;