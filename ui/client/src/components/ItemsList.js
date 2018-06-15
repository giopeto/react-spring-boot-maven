import React from 'react';

const ItemsList = (props) => (
    <div>
        <h1>Items</h1>
        <ul className="list-group">
            {props.items.map(item =>
                <li className="list-group-item" key={item.id}>{item.name}</li>
            )}
        </ul>
    </div>
);

export default ItemsList;