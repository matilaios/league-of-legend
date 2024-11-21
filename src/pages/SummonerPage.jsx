import { useEffect, useState } from "react";
import SummonerService from "../services/SummonerService";
import SummonerCard from "../components/SummonerCard";
import { Button } from "react-bootstrap";








const SummonerPage = () => {
    const [summoner,setSummoner] = useState({});



const fetchSummoner = async()=>{
    try {
        const response = await SummonerService.getAllSummoner();
        const res = Object.entries(response.data.data);
        res.sort((a,b)=>{
            console.log(a[1].name,b[1].name);
            return a[1].name.localeCompare(b[1].name)
        })

        setSummoner(response.data.data)


    } catch (error) {
        

    
    }

}

useEffect(()=>{
 
    fetchSummoner()

},[])


    return <>
    
    <h1>SUMMONER</h1>
    
    <div className="d-flex justify-content-center flex-wrap col -3 gap-3">
    {Object.entries(summoner).map((summoner) => {
                console.log(summoner)

                return <SummonerCard summoner={summoner[1]} key={summoner[0]}></SummonerCard>



                
            }
            
        
        )}
     </div>
    </>;
    
}
 
export default SummonerPage;