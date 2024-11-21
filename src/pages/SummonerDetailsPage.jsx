import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";



const SummonerDetailsPage = () => {
    
    const location = useLocation();
    const currentSummoner = location.state.summoner;

    console.log(location);
    
    
    
    
    return <Container  className="d-flex flex-column align-items-center">
    
    <h1>{currentSummoner.name}</h1>

    <img src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+ currentSummoner.image.full} alt="" />
    <p>{currentSummoner.description}</p>

    </Container>;
}
 
export default SummonerDetailsPage;