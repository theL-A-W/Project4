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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  

  return (
    <div className='newsGrid'>
{/* NEWS CARDS GRID */}
    {newsData.map((news) => (
        <div className='pinned-stocks' key={news.id}>
          <Link to={news.url}>
            <Card id='news-card'>
              {news.urlToImage ? (
                <Card.Img variant='top' className='news-image' src={news.urlToImage} alt={`Image for ${news.title}`} />
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
      ))}
      </div> 
  );
}