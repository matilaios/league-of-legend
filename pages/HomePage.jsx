import { useEffect, useState } from "react";
import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";


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


        return <>

            <h1>Page d'accueil</h1>
            
            <div className="d-flex justify-content-center flex-wrap gap-4 my-5 col-10">
            {Object.entries(champions).map((champion) => {
                console.log(champion)

                return<>
                <ChampionCard championCard={champion[1]} key={champion[1].id}></ChampionCard>



                </>
            }
            
        
        )}
              </div>  

                </>
    }

    export default HomePage;