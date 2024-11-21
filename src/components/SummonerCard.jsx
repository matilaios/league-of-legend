import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const SummonerCard = ({summoner}) => {

const navigate=useNavigate();

const navigateTo=(id)=>{
    navigate("/summoner/"+id, {state: {summoner : summoner}})
}








    return <>
    
    <Card  style={{ width: '15rem' }}onClick={()=> {navigateTo(summoner.name)}}>
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+ summoner.image.full} />
      <Card.Body>
        <Card.Title>{summoner.name}</Card.Title>
       
      </Card.Body>
    </Card>
    
    
    
    </>;
}
 
export default SummonerCard;


