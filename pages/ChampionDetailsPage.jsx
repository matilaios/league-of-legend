import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ChampionDetailsPage = () => {

const {id}=useParams();
const [champion, setChampion]= useState({});
// const navigate = useNavigate();


const fetchAllDetailsChampion = async () => {
    try {const response = await ChampionService.getAllDetailsChampion(id);
        console.log(response)
        


    } catch (error) {
        console.log(error)
    }

}
useEffect(() => {
    fetchAllDetailsChampion(id);
   
}, [])

    return <>
    
    <h1>personnage : {id} </h1>
    
    </>;
}
 
export default ChampionDetailsPage;