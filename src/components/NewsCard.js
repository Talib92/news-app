import React from 'react'

const NewsCard = ({news, theme}) => {

  if(!news) return;
    const { description, title, url, urlToImage} = news

    const imageUrl = urlToImage || 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg';

  return (

    <a href={url} target='_blank' rel="noopener noreferrer"> 
    
    <div className={`flex ml-16 rounded-xl shadow-lg h-auto 
      ${theme === "Light" ? "bg-gray-50 text-black hover:bg-gray-100" : "bg-neutral-800 text-white hover:bg-neutral-900"}`}>
      <div className={`px-2 py-2 shadow-lg hover:shadow-2xl`}>
        
        <div>
          <img className='w-[18rem] rounded-md h-48' src={ imageUrl} alt="image" />
        </div>

        <div className='mt-2'>
          <p className="w-[18rem]">{title}</p>
          <p className="w-[18rem] mt-2">{description}</p>
        </div>

      </div>
    </div>
    </a>
  )
}

export default NewsCard