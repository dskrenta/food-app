import React from 'react';

import { 
  MAX_CLOSER,
  MAX_BETTER,
  MAX_VEG,
  MAX_MEAT,
  MAX_KIDS,
  MAX_CHEAP,
  MAX_WINE,
  MAX_COCKTAILS 
} from '../../utils/constants';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    // state
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
    setReservation: (reservation) => {
      this.setState({ 
        reservation 
      });
    },
    setLocation: (location = null) => {
      if (location) {
        this.setState({
          location
        });
      }
      else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              location: {
                lat: position.coords.latitude,
                lon: position.coords.longitude
              }
            })
          },
          (error) => {
            console.error(error);
          },
          {
            enableHighAccuracy: true
          }
        );
      }
    },
    handleCloser: () => {
      if (this.state.closer >= MAX_CLOSER) {
        return;
      }
  
      if (this.state.better > 0) {
        this.setState({
          closer: 0,
          better: 0,
        });
      } else {
        this.setState({
          closer: this.state.closer + 1,
          better: 0,
        });
      }
    },
    handleBetter: () => {
      if (this.state.better >= MAX_BETTER) {
        return;
      }
  
      if (this.state.closer > 0) {
        this.setState({
          closer: 0,
          better: 0,
        });
      } else {
        this.setState({
          closer: 0,
          better: this.state.better + 1
        });
      }
    },
    handleVeg: () => {
      if (this.state.better >= MAX_VEG) {
        return;
      }

      this.setState({
        veg: this.state.veg + 1
      });
    },
    handleMeat: () => {
      if (this.state.better >= MAX_MEAT) {
        return;
      }

      this.setState({
        meat: this.state.meat + 1
      });
    },
    handleKids: () => {
      if (this.state.better >= MAX_KIDS) {
        return;
      }

      this.setState({
        kids: this.state.kids + 1
      });
    },
    handleCheap: () => {
      if (this.state.better >= MAX_CHEAP) {
        return;
      }

      this.setState({
        cheap: this.state.cheap + 1
      });
    },
    handleWine: () => {
      if (this.state.better >= MAX_WINE) {
        return;
      }

      this.setState({
        wine: this.state.wine + 1
      });
    },
    handleCocktails: () => {
      if (this.state.better >= MAX_COCKTAILS) {
        return;
      }

      this.setState({
        cocktails: this.state.cocktails + 1
      });
    }
  };

  componentDidMount() {
    this.state.setLocation();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}