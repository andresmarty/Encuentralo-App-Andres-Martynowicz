import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/item';

function ItemList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = 'https://mocki.io/v1/f7405b3d-dc6d-47a3-813a-0f0fc037e594'

    useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {

    return(
            <>
            {items.map((item) => {
                return(
                <div className="col-md-4 col-lg-3 d-flex container item">
                    <Item name={item.name} price={item.price} img={item.pictureURL} stock={item.stock}/>
                </div>
                )})}
            </>
        );
    }
};

export default ItemList;