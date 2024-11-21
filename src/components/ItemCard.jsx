import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const  ItemCard = ({item}) => {
// console.log(championCard)
    const navigate=useNavigate();

    const navigateTo = (name) =>{
    navigate("/item/"+name, {state:{item:item}})
}
   

        
    return <>
    
    <Card  style={{ width: '15rem' }}onClick={()=> {navigateTo(item.name)}}>
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+item.image.full} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        {/* <Button variant="primary">Voir détails</Button> */}
      </Card.Body>
    </Card>
    
    
    
    
    </>

    }


    export default ItemCard;
