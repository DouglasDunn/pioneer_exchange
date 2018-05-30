class AddEvent extends React.Component {
    constructor(props) {
      super(props);
      this.addEvent = this.addEvent.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleAddDataChange = this.handleAddDataChange.bind(this);
      this.state = {
        name:'',
        date:'',
        description:'',
        addData:''
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
        description: this.state.description,
        addData: this.state.addData
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
      this.setState({name:e.target.value})
    }
    handleDateChange(e){
        this.setState({date:e.target.value})
    }
    handleDescriptionChange(e){
      this.setState({description:e.target.value})
    }
    handleAddDataChange(e){
        this.setState({addData:e.target.value})
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
                  <textarea onChange={this.handleDescriptionChange} type="textarea" id="description" placeholder="Description" maxlength="100" rows="5"></textarea>
                </div>
          
                <div classname="form-group">
                    <textarea onchange={this.handleAddDataChange} type="textarea" id="addData" placeholder="Additional Information" maxlength="500" rows="10"></textarea>
                </div>
                  
                <button type="button" onClick={this.addEvent} id="submit" name="submit" className="btn btn-primary pull-right">Add Event</button>
              </form>
          </div>
        </div>
      )
    }
}
