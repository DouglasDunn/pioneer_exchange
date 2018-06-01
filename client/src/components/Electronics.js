import React, { Component } from 'react';

import axios from 'axios';
import Electronic from './Electronic';

class Electronics extends Component{
    constructor(props){
        super(props);

        this.state = {
            allElectronics:[],
            electronics:[],
            search:''
        }
    }

    componentWillMount(){
        axios
            .get('/api/electronics')
            .then(res => this.setState( () => {
                electronics: res.data
            }));

            this.setState( () =>{
                allElectronics: this.state.electronics
            });
    }

     handleSearch = (event) => {
         this.setState({
             search: event.target.value,
             textbooks: this.state.allElectronics.filter((electronic) => new RegExp(event.target.value, "i").exec(electronic.title))
         });
     }
    render(){
        return(
            <div>
                <h2>Search for an Electronic Device: </h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />

                {
                    this.state.electronics.map((electronic) => {
                        <Electronic 
                        key={electronic} 
                        title={electronic.title} 
                        brand={electronic.brand}
                        price={electronic.price} 
                        />
                    })
                }
            </div>
        )
    }
}

export default Electronics;