
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { CardHeader, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

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
      <Form className='news-form'>
        <FormControl type='input' id='stock-search-input' placeholder='search' />
        <Button>Enter</Button>
      </Form>
      <Card id='top-news-card'>
      <Carousel>
        {newsData.map((news) => (
          <Carousel.Item key={news.id} interval={5000}>
            <img
              className='d-block w-100'
              src={news.image_url ? news.image_url : 'https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg'}
              alt={`Image for ${news.title}`}
            />
            <Carousel.Caption>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </Card>
      </div> 
  );
}

 





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
      ))}*/}
