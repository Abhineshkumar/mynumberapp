import React from 'react';
import ReactDOM from 'react-dom';
//import InputNumber from './inputNumber';
//import MyNum from './myNum';
import NumContainer from './NumContainer';


const App =()=>{
    return(
        <div>
         <NumContainer/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
