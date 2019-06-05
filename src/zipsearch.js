import React from 'react';
import './App.css';
import axios from 'axios';
import Results from './results.js'


class ZipSearch extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            zipcode: ' ',
            results: []
        }

        this.getZip= this.getZip.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    getZip(event){
        this.setState({zipcode: event.target.value});
    }

    getResults(event){
        event.preventDefault();

        let url = 'http://ctp-zip-api.herokuapp.com/zip/' + this.state.zipcode;

         axios.get(url)
            .then(response =>{
                this.setState({results: response.data});
            })
            .catch(error=>{
                console.log(error);
            }) 

            console.log(this.state.results);
    }


    render(){
        const result = this.state.results.map(index=>{
               return( <Results
                  city = {index.City}
                  state= {index.State}
                  country ={index.Country}
                 /* lattitude ={index.Lat}
                  longitude = {index.Long}
                  xaxis= {index.Xaxis}
                  yaxis = {index.Yaxis}
                  zaxis ={index.Zaxis}*/
                  decom = {index.Decomission}
                  tax = {index.TaxReturnsFiled}
                  population = {index.EstimatedPopulation}
                  wages = {index.TotalWages}
                  key = {index.Record}
                />
               )
        });

        return(
            <div>
                <header id="page-header">
                    <h1>Zip Code Search</h1>
                </header>
                <div className="search-box">
                    <form>
                    <label>Search:</label>
                    <input  name="zipcode" type ="number" onChange={this.getZip} />
                    <button onClick={this.getResults}>SUBMIT</button>
                    </form>
                </div>
                <div className="search-results">
          	       <h1>Results:</h1> {result.length > 0 ? result : <div>No Results</div>  }
          	</div>
            </div>
        )
    }
}

export default ZipSearch;