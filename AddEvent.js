class AddEvent extends React.Component {
    constructor(props) {
      super(props);
      this.addEvent = this.addEvent.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDiscriptionChange = this.handleDIscriptionChange.bind(this);
      this.state = {
        name:'',
        date:'',
        discription:''
      };
    }
    componentDidMount(){
      document.getElementById('addHyperLink').className = "active";
      document.getElementById('homeHyperlink').className = "";
    }
    addEvent(){
      axios.post('/addEvent', {
        name: this.state.name,
        date: this.state.date,
        discription: this.state.discription
      })
      .then(function (response) {
        console.log('reponse from add event',response);
        hashHistory.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    handleNameChange(e){
      this.setState({title:e.target.value})
    }
    handleDateChange(e){
        this.setState({date:e.target.value})
    }
    handleDiscriptionChange(e){
      this.setState({subject:e.target.value})
    }
    render() {
      return (
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input type="text" onChange={this.handleNameChange} className="form-control" id="name" name="name" placeholder="Name" required />
                </div>

                <div className="form-group">
                    <textarea onchange={this.handleDateChange} type="textarea" id="date" placehold="Date and Time" maxlength="20" rows="1"></textarea>
                </div>
               
                <div className="form-group">
                  <textarea className="form-control" onChange={this.handleDiscriptionChange} type="textarea" id="discription" placeholder="Discription" maxlength="500" rows="7"></textarea>
                </div>
                  
                <button type="button" onClick={this.addEvent} id="submit" name="submit" className="btn btn-primary pull-right">Add Event</button>
              </form>
          </div>
        </div>
      )
    }
}