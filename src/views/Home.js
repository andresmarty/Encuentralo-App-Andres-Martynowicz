import React, {useEffect, useState} from 'react'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ControlledCarousel from'../components/ControlledCarousel/ControlledCarousel'
import { db } from '../firebase';
import './Home.css'

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            let collection = db;
            const response = await collection.get();
            setItems(response.docs.map(it => ({id: it.id, ...it.data()})))
        })();
    }, []);


    return (
        <div className="home">
            <ControlledCarousel />
            <div className="row productList h-25 w-100 justify-content-center">
                <h3 className="text">Productos Disponibles</h3>
            </div>
            <ItemListContainer dataCategory={items}/>
        </div>
    )
}

export default Home
