import axios from "axios";

function getAllItem(){
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.21.1/data/fr_FR/item.json")
}




export default{
getAllItem,

}

