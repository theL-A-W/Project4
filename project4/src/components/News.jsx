import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import { Carousel } from 'react-responsive-carousel'; // Using a different carousel for better Tailwind integration
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export default function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const searchNews = async () => {
      const response = await axios.get(
        'https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=XgsMxGqxt7iAGnTJ4DhDnBd6OvJpFjonrvY0JZhc'
      );
      setNewsData(response.data.data);
      console.log(response.data.data);
    };
    searchNews();
  }, []);

  return (
    <div className='news p-4'>
      <h1 className='text-2xl font-bold mb-4' id='stock-search-title'>News</h1>

      {/* SEARCH BAR */}
      <div className='flex mb-4'>
        <input 
          type='text' 
          id='stock-search-input' 
          placeholder='Search'
          className='border border-gray-300 rounded-l-lg p-2 flex-grow'
        />
        <button className='bg-blue-500 text-white rounded-r-lg px-4'>Enter</button>
      </div>

      {/* NEWS CAROUSEL */}
      <div className='mb-6'>
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
          {newsData.map((news) => (
            <div key={news.id}>
              <Link to={news.url}>
                <img
                  className='w-full h-64 object-cover'
                  src={news.image_url ? news.image_url : 'https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg'}
                  alt={`Image for ${news.title}`}
                />
                <p className='absolute bottom-0 left-0 bg-black text-white p-2 opacity-75'>{news.title}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      {/* NEWS CARDS GRID */}
      <NewsGrid newsData={newsData} />
    </div>
  );
}
