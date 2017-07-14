import spaceships from '../data/spaceships';
import _ from 'lodash';
import moment from 'moment';

const filters = {
  filterAll: (departureDate, returnDate, price, size, destination, destinationTwo) => {
    let ships = spaceships.spaceships;
    if (departureDate) {
      ships = filters.filterDate(departureDate, ships);
    }
    if (returnDate) {
      ships = filters.filterDate(returnDate, ships);
    }
    if (price) {
      ships = filters.filterPrice(price, ships);
    }
    if (size) {
      ships = filters.filterSize(size, ships);
    }
    if (destination) {
      ships = filters.filterDestination(destination, ships);
    }
    if (destinationTwo) {
      ships = filters.filterDestination(destinationTwo, ships);
    }
    return ships;
  },
  filterDate: (date, filteredShips) => {
    const dayOfWeek = {
      0: 'Sunday', 1: 'Monday',
      2: 'Tuesday', 3: 'Wednesday',
      4: 'Thursday', 5: 'Friday',
      6: 'Saturday',
    };
    const day = dayOfWeek[moment(date).day()];
    const ships = filteredShips || spaceships.spaceships;
    return _.filter(ships, (spaceship) => spaceship.flightDays.includes(day));
  },
  filterPrice: (price, filteredShips) => {
    const ships = filteredShips || spaceships.spaceships;
    return _.filter(ships, (spaceship) => spaceship.priceFilter === price);
  },
  filterDestination: (destination, filteredShips) => {
    // TODO: deal with two inclusive destinations from search
    const ships = filteredShips || spaceships.spaceships;
    return _.filter(ships, (spaceship) => spaceship.destinations.includes(destination));
  },
  filterSize: (size, filteredShips) => {
    const ships = filteredShips || spaceships.spaceships;
    return _.filter(ships, (spaceship) => spaceship.sizeFilter === size);
  },
  getCurrentShip: (shipID) => _.filter(spaceships.spaceships, (spaceship) =>
    spaceship.model === shipID
  ),
};

export default filters;
