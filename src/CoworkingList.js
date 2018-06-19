import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Section from './Section';

const mapStateToProps = (state, match) => {
  return { locations: state.locations, match: match };
};

class ConnectedList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.locations.items.map(item => {
            if (item.address.length !== 0) {
              return item.address.map(i => <Link to={"/coworkings/" + item.title} key={item.id + Math.random()}> {i.street} </Link >);
            }
          })
        }
        {this.props.locations.items.map(i => (
          <Route
            key={i.id}
            path={`${this.props.match.match.url}/${i.title}`}
            render={props => <p> Hello {i.title} <Section images={i.images} /> </p>}
          />
        ))}
      </div>
    )
  }
}

const CoworkingList = connect(mapStateToProps)(ConnectedList);

export default CoworkingList;
