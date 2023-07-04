import Navbars from './Navbar/Navbars';
import Cardlist from './Cardlist/Cardlist';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail/Detail';


function App() {

  const animes =[{
      image : 'anime1.jpg',
      title: 'Dragon ball',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime2.jpg',
      title: 'Hunter x Hunter',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime3.jpg',
      title: 'Slam Dunk',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime4.jpg',
      title: 'Naruto',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime5.jpg',
      title: 'Demon slayer',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime6.jpg',
      title: 'Pokemon',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime7.jpg',
      title: 'Hajime no Ippo',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime8.jpg',
      title: 'Dr.Stone',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    }
  ];
  
  

  

    
    return(

        <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Cardlist animes={animes}/>}/>
          <Route path='/Detail' element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
        
  
 
      
    );
 
    
    
  
}

export default App;
