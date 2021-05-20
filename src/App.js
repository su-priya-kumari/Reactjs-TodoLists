import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoLists from './comp/todoLists';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [item,setItem] = useState([]);
  const inputItemChange = (event) => {
    setInputItem(event.target.value)
  }

  const btnClick = () => {
    setItem((olditems) => {
      return [...olditems, inputItem];
    })
    setInputItem("");
  }

  const deleteItem = (id) =>{
    setItem((olditems) => {
      return olditems.filter((arrayitem, index) => {
        return index !==id;
      })
    })
  }
  
  return (
    <div className="container">
        <div className="center">
           <br/>
           <h1>Todo List</h1>
           <br/>
           <input type="text" placeholder="enter todo task" value={inputItem} onChange={inputItemChange}/>
           <button type="button" onClick={btnClick}>+</button>
           <div className="itemList">
              <ol>
                {
                  item.map((value, index) => {
                    return(<TodoLists text={value} key={index} id={index} onSelect={deleteItem}/>)
                  })
                }
              </ol>
           </div>
        </div>
    </div>
  );
}

export default App;
