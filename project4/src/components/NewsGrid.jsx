import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function NewsGrid() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const searchNews = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a0526a70df03453aa4aef02a9c4602b8'
      );
      setNewsData(response.data.articles);
      console.log(response.data.articles);
    };
    searchNews();
  }, []);

  return (
    <div className="newsGrid w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mb-12">
      {/* NEWS CARDS GRID */}
      {newsData.map((news, index) => (
        <div className="news-cards" key={index}>
          <Link to={news.url} className="w-full">
            <div
              id="news-card"
              className="overflow-hidden shadow-md border border-transparent rounded-md h-[40vh] w-full m-2 bg-white"
            >
              {news.urlToImage ? (
                <img
                  className="rounded-t-md h-[60%] w-full object-cover"
                  src={news.urlToImage}
                  alt={`Image for ${news.title}`}
                />
              ) : (
                <img
                  className="rounded-t-md h-[60%] w-full object-cover"
                  src="https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg"
                  alt="Default Image"
                />
              )}
              <div className="p-4 h-[40%] flex flex-col">
                <h3 className="font-semibold text-lg truncate">{news.title}</h3>
                <p className="text-gray-700 flex-grow">{news.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
