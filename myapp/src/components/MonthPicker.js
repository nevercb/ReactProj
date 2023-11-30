import React from 'react';
import PropTypes from 'prop-types'
import {range} from '../utility.js'
class MonthPicker extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggleDropDown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        const {year, month} = this.props
        const {isOpen} = this.state
        const yearRange = range(9, -4 + year)
        const monthRange = range(12, 1) 
        return (
            <div className="dropdown">
                <h4>Select Month</h4>
                <button 
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropDown}
                >
                  {year}年 {month}月
                </button>
                {
                    isOpen && 
                    <div className="dropdown-menu"        style={{display: 'block'}}>
                       <div className="row">
                            <div className="col">
                                {
                                    yearRange.map((yearNumber, index) => 
                                        <a key={index} className="dropdown-item">
                                            {yearNumber} 年
                                        </a>
                                    )
                                }
                            </div>

                            <div className="col"> {
                                        monthRange.map((monthNumber, index) =>  
                                                <a key={index} className="dropdown-item">
                                                    {monthNumber} 月
                                                </a>   
                                        )
                                    }
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthPicker;