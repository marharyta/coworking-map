import React from "react";
import { connect } from "react-redux";
import Section from './Section';
import { store } from "./redux/store";
import { getSearchResults } from "./redux/actions";

const mapStateToProps = (state, match) => {
    return { locations: state.locations, searchLocation: state.searchLocation, match: match };
};

class ConnectedSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value, this.props.locations.items, this.props.searchLocation.results);
        store.dispatch(getSearchResults(event.target.value, this.props.locations.items));
        this.setState({
            inputvalue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="search" value={this.props.searchLocation.parameter} onChange={this.handleChange} />
                {
                    this.props.searchLocation.results.map(item => {
                        if (item.address.length !== 0) {
                            return item.address.map(i => <p key={item.id + Math.random()}> {i.street} </p >);
                        }
                    })
                }
            </div>
        )
    }
}

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
