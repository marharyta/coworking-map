import React from "react";
import CoworkingList from './CoworkingList';
import { store } from "./redux/store";
import { fetchLocations } from "./redux/actions";
import { Route, Link } from "react-router-dom";
import Map from "./Map";

//https://codesandbox.io/s/n9lrxw0670
class App extends React.Component {
    componentDidMount() {
        store.dispatch(fetchLocations("SE"));
    }
    render() {
        return (
            <div className="App" >
                <h1>Coworkings in Helsinki</h1>
                <Link to={"/map"}> Map </Link>
                <Link to={"/coworkings/"}> Coworkings </Link>
                <Route path={`${this.props.match.path}map`} component={Map} />
                <Route path={`${this.props.match.path}coworkings/`} component={CoworkingList} />
            </div>
        );
    }
}

export default App;
