import React, { Component } from 'react';
import Textbook from './Textbook';
import axios from 'axios';

class Textbooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            allTextbooks:[
                {
                    title: "Book1",
                    author: "Person1",
                    price: "$4"
                },
                {
                    title: "Paper",
                    author: "Person9",
                    price: "$4"
                },
                {
                    title: "How to Make Your Head Shiny",
                    author: "Hank The Tank",
                    price: "An A in SE1"
                },
                {
                    title: "Science",
                    author: "Person4",
                    price: "$4"
                },
                {
                    title: "Math",
                    author: "Person6",
                    price: "$4"
                },
                {
                    title: "The Proper Way To Grow A Wizard Facial Hair",
                    author: "Hankledor",
                    price: "Wizard Wond"
                }

            ],
            textbooks: [{
                        title: "Book1",
                        author: "Person1",
                        price: "$4"
                    },
                    {
                        title: "Paper",
                        author: "Person9",
                        price: "$4"
                    },
                    {
                        title: "How to Make Your Head Shiny",
                        author: "Hank The Tank",
                        price: "An A in SE1"
                    },
                    {
                        title: "Science",
                        author: "Person4",
                        price: "$4"
                    },
                    {
                        title: "Math",
                        author: "Person6",
                        price: "$4"
                    },
                    {
                        title: "The Proper Way To Grow A Wizard Facial Hair",
                        author: "Hankledor",
                        price: "Wizard Wond"
                    }
            ],
            search:''
        }

        console.log(this.state.textbooks);
    }

    componentWillMount(){
        axios
            .get('/api/textbook')
            .then(res => this.setState ( () => {
                textbooks: res.data
            }))

            this.setState(() => {
                allTextbooks: this.state.textbooks
            });
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
            <h2>Search for a Textbook by title: </h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />
                {
                    this.state.textbooks.map((textbook) => 
                    <Textbook 
                    key={textbook} 
                    title={textbook.title} 
                    author={textbook.author}
                    price={textbook.price} 
                    />
                    )}
            </div>
        )
    }
}

export default Textbooks;