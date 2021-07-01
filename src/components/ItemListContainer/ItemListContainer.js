import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ match }) {

    const categoryListId = match.params.categoryId;
    
    return(
        <div className="container-fluid contenedorList d-flex justify-content-center">
            <div className="row h-100 w-100 justify-content-center">
                <ItemList dataCategory={categoryListId}/>
            </div>
        </div>
    );
};

export default ItemListContainer;