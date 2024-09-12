import React from 'react'

const NewsCard = ({news}) => {

  if(!news) return;

    // console.log(news)
    const { description, title, url, urlToImage} = news

    const imageUrl = urlToImage || 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg';
    // const {name} = news?.source
  return (
    <div className=' flex ml-16'>
      <div className='rounded-xl px-2 py-2 bg-white shadow-lg hover:shadow-2xl'>
        <div>
          <a href={url} target='_blank'> 
          <img className='w-[18rem] rounded-md' src={urlToImage || imageUrl} alt="image" />
          </a>
        </div>
        <a href={url} target='_blank'>
        <div className='mt-2'>
          <p className='w-[18rem]'>{title}</p>
          <p className='w-[18rem] mt-2'>{description}</p>
          {/* <p className='w-[20rem] text-blue-900 cursor-pointer'>Read More</p> */}
        </div>
        </a>
      </div>
    </div>
  )
}

export default NewsCard