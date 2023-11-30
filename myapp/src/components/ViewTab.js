import React from 'react';
import PropTypes from 'prop-types'
import {LIST_VIEW, CHART_VIEW} from  '../utility.js'
import { IoListCircleSharp } from "react-icons/io5";
import { FaBackspace, FaChartPie } from "react-icons/fa";

const generatorClass = (cur, view)=>{
    console.log(cur, view)
    return (cur === view) ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({activeTab, onTabChange}) => {
    return (
        <ul className="nav nav-pills nav-fill my-4">
          <li className="nav-item">
            <a className={generatorClass(activeTab, LIST_VIEW)} 
                aria-current="page" href="#"
                onClick={(event)=>{event.preventDefault(); onTabChange(LIST_VIEW)}}
                >
                <IoListCircleSharp fontSize="35px"/>
                <span>List</span>
                </a>
          </li>
          <li className="nav-item">
            <a className={generatorClass(activeTab, CHART_VIEW)} href="#"
                onClick={(event)=>{event.preventDefault(); onTabChange(CHART_VIEW)}}
            >
             <FaChartPie  fontSize="30px"/>
             <span>Chart</span>
             </a>
          </li>
        </ul>
    );
};

ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
}
export default ViewTab;