import React from 'react';
import PropTypes from 'prop-types'
import PriceList from '../components/PriceList.js' 
import ViewTab from '../components/ViewTab.js'
import TotalCost from '../components/TotalCost.js'
import {LIST_VIEW, CHART_VIEW} from '../utility.js'
import MonthPicker from '../components/MonthPicker.js'
import CreateButton from '../components/CreateButton.js'

const items = [{
    "id": 1,
    "title": "travel to Suzhou",
    "cost": 200,
    "date": "2023-7-1",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "cost"
    } 
  },{
    "id": 2,
    "title": "travel to Suzhou",
    "cost": 200,
    "date": "2023-7-1",
    "category": {
      "id": 2,
      "name": "travel",
      "type": "cost"
    }
  }]
const MoneyCalc = (items) => {
    let income = 0, outcome = 0;
    items.forEach(element => {
        if(element.category.type === "income")
            income += element.cost
        else 
            outcome += element.cost
    });
    return [income, outcome]
}
class Home extends React.Component{
  render() {
    let [income, outcome] = MoneyCalc(items)
    return (
      <div>
        <div className='row justify-content-between'>
            <div className='col-4'>
                <MonthPicker year={2023} month={6} onChange={(year, month) => console.log(year, month)}/>
            </div>
            <div className='col-4 align-self-center'>
                <TotalCost income={income} outcome={outcome} />
            </div>
        </div>
        <ViewTab activeTab={CHART_VIEW} onTabChange={(activeTab)=>console.log(activeTab)}/>
        <CreateButton />
        <PriceList items={items} 
        onEditItem={(item)=> console.log(item.id)}
        onDeleteItem={(item)=> console.log(item.id)}
        />
      </div>
    );
  }
}

export default Home;
