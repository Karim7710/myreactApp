import {Card, Button} from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


function MovieCard({movie}) {
    return (
  <div>
<Card style={{ width: '18rem' }}>
<ReactStars
      count={5}
      size={24}
      value={movie.rate}
      edit = {false}
    />,
  <Card.Img variant="top" src={movie.posterUrl} className="moviesimg" />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Link to={`/trailer/${movie.id}`}>
    <Button 
    variant="danger" 
    className="moviebtn"
    >Watch Trailer</Button>
    </Link>
  </Card.Body>
</Card>
        </div>
    )
}
export default MovieCard