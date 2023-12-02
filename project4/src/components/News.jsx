import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import NewsGrid from './NewsGrid'

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
    <div className='news'>
      <h1 id='stock-search-title'>News</h1>


{/* SEARCH BAR */}
      <Form className='news-form'>
        <FormControl type='input' id='stock-search-input' placeholder='search' />
        <Button>Enter</Button>
      </Form>


{/* NEWS CAROUSEL */}
      <Card id='top-news-card'>
      <Carousel>
        {newsData.map((news) => (
          <Carousel.Item key={news.id} interval={5000}>
            <Link to={news.url}>
            <img
              className='d-block w-100'
              src={news.image_url ? news.image_url : 'https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg'}
              alt={`Image for ${news.title}`}
            />   
            <Carousel.Caption id="carousel-caption">
              <h3>{news.title}</h3>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      </Card>



{/* NEWS CARDS GRID */}
    {/* {newsData.map((news) => (
        <div className='pinned-stocks' key={news.id}>
          <Link to={news.url}>
            <Card id='news-card'>
              {news.image_url ? (
                <Card.Img variant='top' className='news-image' src={news.image_url} alt={`Image for ${news.title}`} />
              ) : (
                <Card.Img
                  variant='top'
                  className='event-image'
                  src='https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg'
                  alt='Default Image'
                />
              )}
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))} */}


<NewsGrid/>

      </div> 
  );
}