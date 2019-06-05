import React from 'react';
import './App.css';

class Results extends React.Component{
    render(){
       let decom=  this.props.decom ? "Yes" : "No" ;
        return(
            <div id="result-wrapper">
            <header>    
              <p>City: {this.props.city} </p>  
              <p>State: {this.props.state} </p>
               <p>Country: {this.props.country}</p>
            </header>
            <p>Decomissioned: {decom}</p>   
            <p>Taxes Filed: {this.props.tax}</p>
            <p>Population: {this.props.population}</p>
            <p> Estimated Wages: {this.props.wages}</p>
            </div>
        )
    }
}

export default Results;