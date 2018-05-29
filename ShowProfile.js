class ShowProfile extends React.Component {
    constructor(props) {
      super(props);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.updateProfile = this.updateProfile.bind(this);
      this.getProfile = this.getProfile.bind(this);
      this.state = {
        name:'',
        email:'',
        password:'',
        id:''
      };
      
    }
    componentDidMount(){
      document.getElementById('addHyperLink').className = "";
      document.getElementById('homeHyperlink').className = "";
      document.getElementById('profileHyperlink').className = "active";
      this.getProfile();
    }
    updateProfile(){
        var self = this;
        axios.post('/updateProfile', {
            name: this.state.name,
            password: this.state.password
            })
        .then(function (response) {
        if(response){
            hashHistory.push('/')  
            }
        })
        .catch(function (error) {
            console.log('error is ',error);
        });
    }
    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    getProfile(){
        var self = this;
        axios.post('/getProfile', {
        })
        .then(function (response) {
        if(response){
            self.setState({name:response.data.name});
            self.setState({email:response.data.email});
            self.setState({password:response.data.password});  
            }
        })
        .catch(function (error) {
            console.log('error is ',error);
        });
    }
    
    render() {
      return (
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
               
                <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
              </form>
          </div>
        </div>
      )
    }
}