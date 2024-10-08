import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


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
    
    <Container>
    <h1>personnage : {id} </h1>
    

    <p>{champion.blurb}</p>
    
    </Container>


    </>;
}
 
export default ChampionDetailsPage;