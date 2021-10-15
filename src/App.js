import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { within } from '@testing-library/dom';
import { useEffect, useState } from 'react';

function App() {


  // console.log(products[0]);

  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
         
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount] = useState(0);
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}} >
        <h2>Count : {count} </h2>
        <button  onClick={() => setCount(count -1)}>Decrease</button>
        <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);


  return (
    <div>
      <h3>Total {users.length}</h3>   
      {
          users.map(element=> {
            return (
              <div style={{border: '2px solid tomato', width: '350px', margin: '10px'}}>
                <p>{element.name}</p>
                <p>{element.email}</p>
                <p>{element.phone}</p>
                <p>{element.website}</p>
              </div>
            )
          })
        }
    </div>
  )
}





export default App;











































































//old code

// <Product pd={products[0]}></Product>
//          <Product pd={products[1]}></Product>
//          <Product pd={products[2]}></Product>
//          <ul>
//            {
//              cousins.map(cousin => <li>{cousin}</li>)
//            }
//            {
//              products.map(product => <p>{product.title}</p>)
//            }
//            {
//              products.map(product => <Product pd={product}></Product>)
//            }
//          </ul>


// function Product(props) {
//   const {title,price} = props.pd ;
//   console.log(props);
  
//   return(
//     <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
//       <h2>{title}</h2>
//       <p>{price}</p>
//     </div>
//   )
// }


// const cousins =["sadman","Salman","akil","shoaib"];
//   const products= [
//     {title: 'product one', price: '$10'},
//     {title: 'product two', price: '$20'},
//     {title: 'product three', price: '$40'}
//   ];
