import React, { Component } from 'react';
import Number from './Number';
import './numItem.css';

class NumContainer extends Component {

        state={
            firstname:""
            
           
    }
    handleChangeForm=(e)=>{
        
        this.setState({
            firstname:e.target.value
           
        })
        //this.handleChangeForm.value="";
               //console.log(this.state.value);
               e.preventDefault();
            }
    render() {
       
        var arr1=[];
        let number= this.state.firstname;
        
        if(number<1001){
        for(var j=1;j<=number; j++){
            if(j%3===0 && j%15!==0){
               
                arr1.push(("FIZZ"))
            }
             if(j%5===0 && j%15!==0){
                arr1.push("BUZZ")
            }
            if(j%3===0 && j%5===0){
                arr1.push("FIZZ BUZZ")
            }
           if(j%3!==0 && j%5!==0 && j%15!==0) {
                arr1.push(j);
            }
            
        }
       
       }
        var elements=[];
        for(var i=0;i<arr1.length;i++){
            
            elements.push(<Number value={ arr1[i] } />);
        }
        
        return (
            <div className="listmain"> 
                <div className="header">
                    <div className="hone"><h1>BUZZ APP</h1></div>
                <h3>Enter any value between 1 to 1000</h3>
                
            <input type="text" placeholder="Enter here number" name="firstname" onChange={this.handleChangeForm}/>
            {/* <button className="button" onClick={this._TogglePrev}>Prev</button>
         <button className="button" onClick={this._ToggleNext}>Next</button> */}
            {elements}
            
            </div>
            </div>
        );
    }
}

export default NumContainer;