import { useEffect, useState } from "react";
import ItemService from "../services/ItemService.js";
import ItemCard from "../components/ItemCard.jsx";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";



const ItemPage = () => {

    
    const [item, setItem] = useState([]);
    const [searchValue, setSearchValue]= useState(null);
    const [filteredItems, setFilteredItems] = useState([])

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);  
        // e pour event par exemple

    }

    const fetchItem = async () =>{
        try {
            const response = await ItemService.getAllItem();
            // console.log(Object.entries(response.data.data));

            const res = Object.entries(response.data.data);
            res.sort((a,b)=>{
                console.log(a[1].name,b[1].name);
                return a[1].name.localeCompare(b[1].name);
            })
            // response.data.data.sort((a,b) => a.name.localeCompare(b.firstname))
            setItem(res);
            setFilteredItems(res);
            
        } catch (error) {
            
        }


    }


    useEffect(()=>{

        fetchItem();
    }, [])


useEffect(()=>{

    setFilteredItems(item.filter((item)=>{
        return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
        // return item[1].name.toLowerCase().startWith(searchValue.toLowerCase());
    }))

} ,[searchValue])




    return <Container>
    
    <h1 className="d-flex justify-content-center" gap-10>ITEMS</h1>

    <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton Item</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Bottes" value={searchValue} onChange={handleChange} />
            </Form.Group>
        </Form>







    <div className="d-flex justify-content-center flex-wrap col -3 gap-3">

    {filteredItems.map((item)=>{

        return<ItemCard key={item[0]} item={item[1]}/>
    })


    }
    </div>
    </Container>;
}
 
export default ItemPage ;