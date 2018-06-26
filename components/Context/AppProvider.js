import React from 'react';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    // state
    address: '',
    location: {
      lat: null,
      lon: null
    },
    reservation: {
      timestamp: null,
      people: 2
    },
    filters: {
      closer: 0,
      better: 0,
      veg: 0, 
      meat: 0, 
      kids: 0, 
      cheap: 0,
      wine: 0, 
      cocktails: 0
    },

    // mutators
    setAddress: (address) => {
      this.setState({ 
        address 
      });
    },
    setReservation: (reservation) => {
      this.setState({ 
        reservation 
      });
    },
    setLocation: (location) => {
      this.setState({
        location
      });
    },
    closer: () => {

    },
    better: () => {

    },
    veg: () => {

    },
    meat: () => {

    },
    kids: () => {

    },
    cheap: () => {

    },
    wine: () => {

    },
    cocktails: () => {

    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;