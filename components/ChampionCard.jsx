import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const  ChampionCard = ({championCard}) => {
// console.log(championCard)
    const navigate=useNavigate();

    const navigateTo=(id)=>{
        navigate("/ChampionDetailsPage/"+id);

    }




    return <>
    
     <Card style={{ width: '18rem' }}onClick={()=> {navigateTo(championCard.id)}}>
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/"+championCard.image.full} />
      <Card.Body>
        <Card.Title>{championCard.name}</Card.Title>
        <Card.Text>
          {championCard.title}
        </Card.Text>
        <Card.Text>
          {championCard.blurb}
        </Card.Text>
        <Button variant="primary">Voir détails</Button>
      </Card.Body>
    </Card>
    
    </>;
}
 
export default ChampionCard;