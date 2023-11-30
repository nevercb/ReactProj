import React from 'react';
import PropTypes from 'prop-types'
import { SiInfracost } from "react-icons/si";
import { MdAddCard } from "react-icons/md";
const TotalCost = ({income, outcome}) => {
    return (
        <div className="row" style={{height: "50px", "line-height": "59px"}}>
              <div className="col" fontSize="20px">
                <MdAddCard />cost: {income}
              </div>
              <div className="col" fontSize="20px">
                <SiInfracost /> income: {outcome}          
              </div>
        </div>
    );
};

TotalCost.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired
}
export default TotalCost;