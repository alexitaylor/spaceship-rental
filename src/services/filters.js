import spaceships from '../data/spaceships';
import _ from 'lodash';
import moment from 'moment';

const filters = {
  filterDate: (dateOne, dateTwo) => {
    const dayOfWeek = {
      0: 'Sunday', 1: 'Monday',
      2: 'Tuesday', 3: 'Wednesday',
      4: 'Thursday', 5: 'Friday',
      6: 'Saturday',
    };
    const dayOne = dayOfWeek[moment(dateOne).day()];
    const dayTwo = dayOfWeek[moment(dateTwo).day()];
    console.log(dayOne);
    console.log(dayTwo);

    return _.filter(spaceships.spaceships, (spaceship) => {
      if (!dayOne && dayTwo) {
        return spaceship.flightDays.includes(dayTwo);
      } else if (dayOne && !dayTwo) {
        return spaceship.flightDays.includes(dayOne);
      }
      return spaceship.flightDays.includes(dayOne) && spaceship.flightDays.includes(dayTwo);
    });
  },
  filterPrice: (price, destination, size) => {
    const filtered = _.filter(spaceships.spaceships, (spaceship) => {
      if (destination && size) {
        return spaceship.priceFilter === price
          && spaceship.sizeFilter === size
          && spaceship.destinations.includes(destination);
      } else if (destination && !size) {
        return spaceship.priceFilter === price && spaceship.destinations.includes(destination);
      } else if (!destination && size) {
        return spaceship.priceFilter === price && spaceship.sizeFilter === size;
      }
      return spaceship.priceFilter === price;
    });
    return filtered;
  },
  filterDestination: (destination, price, size) => {
    const filtered = _.filter(spaceships.spaceships, (spaceship) => {
      if (price && size) {
        return spaceship.priceFilter === price
          && spaceship.sizeFilter === size
          && spaceship.destinations.includes(destination);
      } else if (price && !size) {
        return spaceship.priceFilter === price && spaceship.destinations.includes(destination);
      } else if (!price && size) {
        return spaceship.destinations.includes(destination) && spaceship.sizeFilter === size;
      }
      return spaceship.destinations.includes(destination);
    });
    return filtered;
  },
  filterSize: (size, price, destination) => {
    const filtered = _.filter(spaceships.spaceships, (spaceship) => {
      if (price && destination) {
        return spaceship.priceFilter === price
          && spaceship.sizeFilter === size
          && spaceship.destinations.includes(destination);
      } else if (price && !destination) {
        return spaceship.priceFilter === price && spaceship.sizeFilter === size;
      } else if (!price && destination) {
        return spaceship.destinations.includes(destination) && spaceship.sizeFilter === size;
      }
      return spaceship.sizeFilter === size;
    });
    return filtered;
  },
  getCurrentShip: (shipID) => _.filter(spaceships.spaceships, (spaceship) =>
    spaceship.model === shipID
  ),
};

export default filters;
