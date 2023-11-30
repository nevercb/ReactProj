import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from './components/PriceList.js' 

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
    "id": 1,
    "title": "travel to Suzhou",
    "cost": 200,
    "date": "2023-7-1",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "cost"
    }
  }]
  return (
    <div className="App">
      <PriceList items={items} onEditItem={(item)=> console.log(item.id)}
      onDeleteItem={(item)=> console.log(item.id)}
      />
    </div>
  );
}

export default App;
