import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";


const ChampionDetailsPage = () => {

const {id}=useParams();
const [champion, setChampion]= useState({});
// const navigate = useNavigate();


const fetchAllDetailsChampion = async () => {
    try {const response = await ChampionService.getAllDetailsChampion(id);
       setChampion(Object.entries(response.data.data)[0][1])
        


    } catch (error) {
        console.log(error)
    }

}
useEffect(() => {
    fetchAllDetailsChampion();
   
}, [])

    return <>
    <div>
    <div className="img-perso">

    <h1>{id} </h1>
    
    <img style={{ width: '30rem' }}  src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"  + champion.name + "_0.jpg"} 
     alt={"imgchamps" + champion} />

    <p style={{width:'30%'} }>{champion.lore}</p>

    {champion.spells && champion.spells.map((spell, index)=>{

        return <div key={index}> 
        <p> {spell.name}</p> 
        <p> {spell.description}</p>
        </div>
})}


        

</div>

</div>
    
    


    </>;
}
 
export default ChampionDetailsPage;