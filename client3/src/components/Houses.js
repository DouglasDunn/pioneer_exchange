import React, { Component } from 'react';

import House from './House';

import axios from 'axios';

class Houses extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            allHouses:[],
            houses:[],
            search:''
        };
    }

    componentWillMount(){
        axios
            .get('/api/houses')
            .then(res => this.setState( () => {
                houses: res.data
            }))

        this.setState(() => {
            allHouses: this.state.houses
        });
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
            textbooks: this.state.allHouses.filter((house) => new RegExp(event.target.value, "i").exec(house.name))
        });
    }

    render(){
        return(
            <div>
            <h2>Search for a House by name: </h2>
            <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />
            {
                this.state.houses.map((house) => {
                    <House 
                    key={house} 
                    title={house.title}
                    details={house.details} 
                    />
                })
            }    
            

            </div>
        )
    }
}

export default Houses;