import { useEffect, useState } from "react";
import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";
import { Container } from "react-bootstrap";


const HomePage = () => {

    const [champions, setChampions] = useState([])


    const fetchChampion = async () => {
        try {
            const response = await ChampionService.getAllChampion();
            // console.log(response)
            setChampions(response.data.data)


        } catch (error) {
            console.log(error)
        }
    }
        useEffect(() => {
            fetchChampion();
        }, [])


        return <Container className="d-flex flex-column align-items-center">

<div className="body-homepage">

            <h1>Champions</h1>
            
            <div className="d-flex justify-content-center flex-wrap gap-4 my-5">
            {Object.entries(champions).map((champion) => {
                // console.log(champion)

                return <ChampionCard championCard={champion[1]} key={champion[1].id}></ChampionCard>



                
            }
            
        
        )}
              </div>  
              </div>
</Container>;
                
    }

    export default HomePage;