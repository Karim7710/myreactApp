import "./App.css";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import {useState }from "react" ;
import {movies} from "./data/MovieData";
import AddMovie from "./components/AddMovie";

import {Route,Routes} from "react-router-dom"
import WatchTrailer from "./components/WatchTrailer";



function App() {
  const [moviesList, setmoviesList] = useState(movies)
  const [titleSearch, settitleSearch] = useState("");
  const [show, setIsShow] = useState(false)
  const [rating, setRating] = useState(1)
  return (
  
  
    <div>
      
      <NavBar
        settitleSearch={settitleSearch}
        showModal={setIsShow}
        setRating ={setRating}/>
        <Routes>
          <Route path='/' element={
          <>
                  <AddMovie show={show} setIsShow={setIsShow} saveMovie={setmoviesList} />
                 <MoviesList moviesList={moviesList} titleSearch={titleSearch} rating ={rating}/>
          </>}
          />
          <Route path='/trailer/:id' element={<WatchTrailer moviesList={moviesList} />} />
        </Routes>
        
        
    </div>
  );
}

export default App;