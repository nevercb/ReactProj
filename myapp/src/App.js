import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from './components/PriceList.js' 
import ViewTab from './components/ViewTab.js'
import TotalCost from './components/TotalCost.js';
import {LIST_VIEW, CHART_VIEW} from './utility.js'

function App() {
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
  const income = 200;
  const outcome = 200;
  return (
    <div className="App">
      <TotalCost income={income} outcome={outcome} />
      <ViewTab activeTab={CHART_VIEW} onTabChange={(activeTab)=>console.log(activeTab)}/>
      <PriceList items={items} 
      onEditItem={(item)=> console.log(item.id)}
      onDeleteItem={(item)=> console.log(item.id)}
      />
    </div>
  );
}

export default App;
