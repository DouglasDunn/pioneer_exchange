const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleQuerryChange = this.handleQuerryChange.bind(this);
        this.getSuggestion = this.getSuggestion.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            querry: '',
            results: [] //results from auto suggestion
        };
    }
    handleSearch(e) {
        e.preventDefault();
        const searchTerm = this.state.querry;
        axios({
            method: 'post',
            url: '/SEARCHURL',
            data: searchTerm
          })
          .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
          });
    }
    handleQuerryChange() {
        this.setState(() => {
            return {
                querry: event.target.value
            }
         });
        if (this.state.querry && this.state.querry.length > 1) {
            this.getSuggestion;
        } else if (!this.state.querry) {}

    }

    getSuggestion() {
        const url  = googleAutoSuggestURL + this.state.querry;
        if(this.state.querry !== '') {
            JSONP(url, function(error, data) {
            let searchResults, retrievedSearchTerms;
            if(error) return error;
            searchResults = data[1];
            retrievedSearchTerms = searchResults.map(function(result) {
                return result[0];
            });
            this.setState(() => {
                return {
                    results: retrievedSearchTerms
                    }
                });
            });
        }
    }
    render () {
        return (
            <div>
                <form>
                 <input
                  placeholder="I'm looking for..."
                  ref={input => this.search = input}
                  onChange={this.handleQuerryChange}
                    />
                 <p>{this.state.query}</p>
                </form>
                <button onClick={this.props.handleSearch}>Search</button>
            </div>
        );
    }
}

ReactDOM.render(<SearchBar />, document.getElementById('app'));