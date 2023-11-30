import React from 'react';
import { MdCardTravel } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types'
const PriceList = ({items, onEditItem, onDeleteItem}) => {
    return (
        <ul className="list-group-flush list-group">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex
                    justify-content-between align-items-center"
                    key={item.id}
                    > 
                        <span className="col-1 badge text-bg-success">
                        <MdCardTravel fontSize={"20px"}/>
                        </span>
                        
                        <span className="col-5 fw-semibold">{item.title}</span>
                        <span className="col-2 fw-bolder" >
                            {(item.category.type === "cost" ? "-":"+")}
                            ¥{item.cost}</span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1" onClick={()=>{onEditItem(item)}}>
                            <FaEdit fontSize={"20px"}/>
                        </a>
                        <a className="col-1" onClick={()=>{onDeleteItem(item)}}>
                            <MdDeleteForever fontSize={"20px"} color="red"/>
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired
}

// PriceList.defaultProps={
//     onDeleteItem: () => {}
// }

export default PriceList;