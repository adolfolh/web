import React, { Component } from "react"
import { Link } from "gatsby";
import Box from "../components/box"

class Search extends Component {
    state = {
    searchResults: null,
    loading: false,
    value: ''
    }

    search = async val => {
        this.setState({ loading: true });
        const res = this.props.data;
        const searchResults = searchJson(val, 'All', res.nodes);

        this.setState({ searchResults, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };

    get renderSearchResults() {
        let searchResults = "";
        if (this.state.searchResults) {

            if(this.props.searchType === 'Blog'){
                searchResults = 
                <Box>
                    <div className="z-40 w-full force-full absolute">{this.state.searchResults.map(result => (
                        <Link to={`/posts/${result.slug}`}>
                            <div className="border-bottom md:px-10 px-4 py-4 bg-offwhite3 hover:bg-azure hover:text-white transition ease-in-out delay-150">
                                <p>{result.title}</p>
                            </div>
                        </Link>
                    ))}</div>
                </Box>
            }

            if(this.props.searchType === 'Portfolio'){
                searchResults = 
                <Box>
                    <div clasName="z-40 w-full force-full absolute">{this.state.searchResults.map(result => (
                        <a href={result.hyperlink}>
                            <div className="border-bottom md:px-10 px-4 py-4 bg-offwhite3 hover:bg-azure hover:text-white transition ease-in-out delay-150">
                                <p>{result.title}</p>
                            </div>
                        </a>
                    ))}</div>
                </Box>
            }
        }

        return searchResults;
    }

    render() {
    return (
        <div className="w-full z-40 border-top">
            <Box>
                <input
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search..."
                    className="md:px-10 w-full py-4 px-4 border-bottom"
                />
            </Box>
            {this.renderSearchResults}
        </div>
    );
    }
}
export default Search

function searchJson(term, prop, res_data) {
    term = term.toLowerCase();

    if(term === "" || term === " ") {
        return;
    }
    if (typeof res_data === 'undefined') {
        return;
    }
    if (res_data.length < 1 ) {
        return;
    }
    const matches = [];

    for (let i = 0; i < res_data.length; i++) {

      var exists = Object.keys(res_data[i]).some((k) => {
        if (null !== res_data[i][k]) {
          if (prop === 'All') {
            return res_data[i][k].toString().toLowerCase().indexOf(term) > -1;
          }
          return res_data[i][prop].toString().toLowerCase().indexOf(term) > -1;
        }
      });

      if (exists) {
        matches.push(res_data[i]);
      }

    }
    return matches;

  }