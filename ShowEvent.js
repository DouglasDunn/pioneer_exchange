class ShowEvent extends React.Component {
    constructor(props) {
      super(props);
      this.deleteEvent = this.deleteEvent.bind(this);
      this.getEvent = this.getEvent.bind(this);
      this.state = {
        events:[]
      };
    }

    deleteEvent(id) {
        if(confirm('Are you sure ?')){
        var self = this;
        axios.post('/deleteEvent', {
          id: id
        })
        .then(function (response) {
          self.getEvent();
        })
        .catch(function (error) {
          console.log('Error is ',error);
        });
       }
    }
    
    getEvent(id) {
      var self = this;
      axios.post('/getEvent', {
        })
      .then(function (response) {
        console.log('res is ',response);
        self.setState({events:response.data})
        })
      .catch(function (error) {
        console.log('error is ',error);
        });
    }

    componentDidMount(){
      var self = this;
 
      axios.post('/getEvent', {
       
      })
      .then(function (response) {
        self.setState({events:response.data})
        
      })
      .catch(function (error) {
        console.log('error is ',error);
      });

      document.getElementById('homeHyperlink').className = "active";
      document.getElementById('addHyperLink').className = "";
    }
    
    render() {
      return (
          <div className="list-group"> 

            {
              this.state.events.map(function(event,index) {
                 return <a href="#" key={index} className="list-group-item active">
                          <h4 className="list-group-item-heading">{event.name}</h4>
                          <p classname="list-group-item-text">{event.date}</p>
                          <p className="list-group-item-text">{event.description}</p>
                          <p className="list-group-item-text">{event.addData}</p>
                          <button onClick={this.deleteEvent.bind(this,post._id)}>Delete Event</button>
                        </a>
              })
            }
            
          </div>
      )
    }
}

export default ShowEvent;
