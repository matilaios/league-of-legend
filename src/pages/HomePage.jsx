import { useEffect, useState } from "react";
import ChampionService from "../services/ChampionService.js";
import ChampionCard from "../components/ChampionCard";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

const HomePage = () => {
  const [champions, setChampions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredChampions, setFilteredChampions] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const fetchChampion = async () => {
    try {
      const response = await ChampionService.getAllChampion();
      const res = Object.entries(response.data.data);
      setChampions(res);
      setFilteredChampions(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChampion();
  }, []);

  useEffect(() => {
    setFilteredChampions(
      champions.filter((champion) =>{
       return champion[1].name.toLowerCase().includes(searchValue.toLowerCase())}
      )
    );
  }, [searchValue, champions]);

  return (
    <Container className="d-flex flex-column align-items-center">
      <div>

        <h1>Champions</h1>

        <Form className="col-12">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recherche ton champion</Form.Label>
            <Form.Control type="text" placeholder="Exemple : Aatrox"value={searchValue} onChange={handleChange}/>
          </Form.Group>
        </Form>

        <div className="d-flex justify-content-center flex-wrap gap-4 my-5">
          {filteredChampions.map((champion) => (
            <ChampionCard championCard={champion[1]} key={champion[1].id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
