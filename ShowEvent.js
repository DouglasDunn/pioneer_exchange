class ShowEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events:[]
      };
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
                        </a>
              })
            }
            
          </div>
      )
    }
}

export default ShowEvent;
