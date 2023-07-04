import { Button,Card } from 'react-bootstrap';
import './Cards.css'
import { Link } from 'react-router-dom';



function Cards({anime}) {
  return (
    
      <div>
        
        <Card className='card' style={{ width: '16rem' }}>
          <Card.Img style={{ height: '200px'}} variant="top" src={anime.image} />
            <Card.Body>
              <Card.Title>{anime.title}</Card.Title>
                <Card.Text>
                  {anime.description}
                </Card.Text>
                <Link to='/Detail' state={anime}><Button variant="warning">Watch Now <i className="fa-solid fa-eye"></i></Button></Link>
            </Card.Body>
        </Card>
        
                
          
          
      </div>
    
      
       
   
    
  );
}

Cards.defaultProps = {

  anime : {
    image : 'anime2.jpg',
    title: 'Dragon ball',
    description : 'some quick example text to build on the card title and make up the bulkof the card component',
  }
}


export default Cards;