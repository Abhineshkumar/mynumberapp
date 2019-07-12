import React, { Component } from 'react';

class Number extends Component {
    render() {
        console.log(this.props.value)
        return (
            <div> 
               <li>
            { this.props.value }
            </li>
            </div>
        );
    }
}

export default Number;