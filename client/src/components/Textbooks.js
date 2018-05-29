import React, { Component } from 'react';
import Textbook from './Textbook';
import axios from 'axios';

class Textbooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            allTextbooks:[],
            textbooks:[],
            search:''
        }

        console.log(this.state.textbooks);
    }

    componentDidMount(){
        axios
            .get('/api/textbook')
            .then(res => this.setState ( () => {
                textbooks: res.data
            }))
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
            textbooks: this.state.allTextbooks.filter((textbook) => new RegExp(event.target.value, "i").exec(textbook.title))
        });
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />
                {
                    this.state.textbooks.map((textbook) => 
                    <Textbook key={textbook} textbook={textbook} />
                    )}
            </div>
        )
    }
}

export default Textbooks;