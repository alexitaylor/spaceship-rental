import spaceships from '../data/spaceships';
import _ from 'lodash';

const filters = {
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
