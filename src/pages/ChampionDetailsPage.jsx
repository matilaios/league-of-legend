import ChampionService from "../services/ChampionService.js";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const ChampionDetailsPage = () => {

const {id}=useParams();
const [champion, setChampion]= useState({});
// const navigate = useNavigate();


const fetchAllDetailsChampion = async () => {
    try {const response = await ChampionService.getAllDetailsChampion(id);
       setChampion(response.data.data[id])
        


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


<h2>LORE :</h2>

    <p style={{width:'30%'} }>{champion.lore}</p>

    {champion.spells && champion.spells.map((spell, index)=>{

        return <div key={index}> 
        <h3><p> {spell.name}</p> </h3>
        <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/"+spell.image.full} alt="" />
        
        <p> {spell.description}</p>

       
        </div>
})}
 <h2>Conseil pour les alliés</h2>

        {champion.allytips && champion.allytips.map((tip)=> {
            return <li key={tip}>{tip}</li>


        })}

<h2>Conseil pour les ennemis</h2>

{champion.enemytips && champion.enemytips.map((tip)=> {
            return <li key={tip}>{tip}</li>


        })}

<h2>Infos</h2>

<ul>

    <li>Attaque : {champion.info && champion.info.attack}</li>
    <li>Défense : {champion.info && champion.info.defense}</li>
    <li>Difficultés : {champion.info && champion.info.difficulty}</li>
    <li>Magie : {champion.info && champion.info.magic}</li>
    </ul>

    <h2>Passif</h2>

   
{champion.passive &&  <>
<h3>{champion.passive.name}</h3>
 <img style={{ width: '20rem' }} src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/"+champion.passive.image.full} alt="" />
   
   <p>{champion.passive.description}</p>
   </>}
</div>

</div>
    
    
{champion.stats && Object.entries(champion.stats).map((key) =>{

    return <span>{key[0]} ={">"} {key[1]}</span>


})}



    </>;

}
 
export default ChampionDetailsPage;