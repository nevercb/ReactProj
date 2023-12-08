import React from 'react';
import PropTypes from 'prop-types'
import PriceList from '../components/PriceList.js' 
import ViewTab from '../components/ViewTab.js'
import TotalCost from '../components/TotalCost.js'
import {LIST_VIEW, CHART_VIEW, parseToYearAndMonth} from '../utility.js'
import MonthPicker from '../components/MonthPicker.js'
import CreateButton from '../components/CreateButton.js'

const items = [{
    "id": 1,
    "title": "travel to Suzhou",
    "cost": 200,
    "date": "2023-7-1",
    "cid": 1
  },{
    "id": 2,
    "title": "travel to Suzhou",
    "cost": 200,
    "date": "2023-7-1",
    "cid": 1
  },{
    "id": 3,
    "title": "财政收入",
    "cost": 200,
    "date": "2023-7-2",
    "cid": 2
  }]

const categories = {
    "1" : {
      "id": "1",
      "name": "travel",
      "type": "cost"
    },
    "2": {
      "id": "2",
      "name": "财政收入",
      "type": "income"
    }
}

const newItem = {
  "id": 4,
  "title": "财政收入",
  "cost": 200,
  "date": "2023-7-3",
  "cid": 2
    
}
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
  constructor(props){
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    }
  }
  onChangeView=(view)=>{
    this.setState({
      tabView: view
    })
  }
  onChangeDate=(year, month)=>{
    this.setState({
      currentDate: {year, month}
    })
  }
  onCreateItem=()=>{
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }
  onEditItem=(modifiedItem)=>{
    const modifiedItems = this.state.items.map(item => {
      if(item.id === modifiedItem.id)
        return {...item, title: "newTitle"} // title会覆盖
    })
    this.setState({
      items: modifiedItems
    })
  }
  onDeleteItem=(deletedItem)=>{
    const filteredItems = this.state.items.filter(item => {
      return item.id !== deletedItem.id
    })
    this.setState({
      items: filteredItems
    })
  }
  

  render() {
    const {items, currentDate, tabView} = this.state
    const itemsWithCategories = items.map(item => {
      item.category = categories[item.cid]
      return item
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${currentDate.month}`)
    })
    let [income, outcome] = MoneyCalc(itemsWithCategories)
    return (
      <div>
        <div className='row justify-content-between'>
            <div className='col-4'>
                <MonthPicker year={currentDate.year} month={currentDate.month} onChange={this.onChangeDate}/>
            </div>
            <div className='col-4 align-self-center'>
                <TotalCost income={income} outcome={outcome} />
            </div>
        </div>
        <ViewTab activeTab={tabView} onTabChange={this.onChangeView}/>
        <CreateButton onClick={this.onCreateItem}/>
        <PriceList items={itemsWithCategories} 
        onEditItem={this.onEditItem}
        onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}

export default Home;
