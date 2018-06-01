import React, { Component } from 'react';
import Ticket from './Ticket';
import axios from 'axios';

class Tickets extends Component{
    constructor(props){
        super(props);

        this.state = {
            allTickets:[],
            tickets:[],
            search:''
        }

        console.log(this.state.tickets);
    }

    componentWillMount(){
        axios
            .get('/api/tickets')
            .then(res => this.setState ( () => {
                tickets: res.data
            }))

            this.setState(() => {
                allTickets: this.state.tickets
            });
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
            tickets: this.state.allTickets.filter((ticket) => new RegExp(event.target.value, "i").exec(ticket.title))
        });
    }

    render(){
        return(
            <div>
            <h2>Search for a Ticket by title: </h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                    />
                {
                    this.state.tickets.map((ticket) => 
                    <Ticket 
                    key={ticket} 
                    title={ticket.title} 
                    price={ticket.price}
                     />
                    )}
            </div>
        )
    }
}

export default Tickets;