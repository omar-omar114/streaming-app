import React from 'react';
import { Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
     const location = useLocation();
     const anime = location.state;
  return (
    <div>
     <div class="detail-anime container">
          <div class="image-anime grid-container">
               <img src={anime.image} alt="anime"/>
          </div>
          <div class="desciption-anime grid-container">
               <div class="title-anime"><h3>{anime.title}</h3></div>
               <div class="text-description">
                    <p>{anime.description}</p>
               </div>
               <div class="text-date"><p>PREMIERE DATE April 11, 2021</p></div>
               <div class="btns-type">
                    <ul>
                         <li class="first">Animation</li>
                         <li class="second">Action</li>
                         <li class="third">Drama</li>
                    </ul>
               </div>
               <div class="actors"><h3>Actors</h3></div>
               <p>haoh kuan</p>
               <p>jiuskin kikorama</p>
               <p>yuuki shin</p>
               <div class="btn-watch">
                    <Button variant="warning">Watch Now <i className="fa-solid fa-eye"></i></Button></div>
          </div>
     </div>
    </div>
  )
}

export default Detail