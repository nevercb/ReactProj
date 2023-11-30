import React from 'react';
import PropTypes from 'prop-types'
import {range} from '../utility.js'
class MonthPicker extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year
        }
    }
    toggleDropDown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    changeYear = (event, numyear)=>{
        event.preventDefault()
        this.setState({
            selectedYear: numyear
        })
    }
    ifYearOrMonthSame = (src, cur) => {
        return src === cur ? "dropdown-item active" : "dropdown-item"
    }    
    selectAndCloseBtn(e, month){
        e.preventDefault()
        this.props.onChange(this.state.selectedYear, month)
        this.setState({
            isOpen: false
        })
    }
    render(){
        const {year, month, onChange} = this.props
        const {isOpen} = this.state
        const {selectedYear} = this.state
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
                                        <a key={index} className= {this.ifYearOrMonthSame(yearNumber, selectedYear)}
                                            onClick={(event) => {this.changeYear(event, yearNumber)}}
                                        >
                                            {yearNumber} 年
                                        </a>
                                    )
                                }
                            </div>

                            <div className="col"> {
                                        monthRange.map((monthNumber, index) =>  
                                                <a key={index} 
                                                    className={this.ifYearOrMonthSame(monthNumber, month)}
                                                    onClick={(e) => this.selectAndCloseBtn(e, monthNumber)}    
                                                >
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