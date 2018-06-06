import React from 'react';

const ItemsList = (props) => (
    <div>
        <h1>Items</h1>
        <ul>
            {props.items.map(item =>
                <ul key={item.id}>{item.name}</ul>
            )}
        </ul>
    </div>
);

export default ItemsList;
