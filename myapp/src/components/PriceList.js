import React from 'react';

const PriceList = ({items, onEditItem, onDeleteItem}) => {
    return (
        <ul className="list-group-flush list-group">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex
                    justify-content-between align-items-center"
                    key={item.id}
                    > 
                        <span className="col-1 badge text-bg-success">{item.category.name}</span>
                        <span className="col-5 fw-semibold">{item.title}</span>
                        <span className="col-2 fw-bolder" >
                            {(item.category.type === "cost" ? "-":"+")}
                            ¥{item.cost}</span>
                        <span className="col-2">{item.date}</span>
                        <button className="col-1 btn btn-outline-success">edit</button>
                        <button className="col-1 btn btn-outline-danger">delete</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default PriceList;