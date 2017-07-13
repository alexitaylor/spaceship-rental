import spaceships from '../data/spaceships';
import _ from 'lodash';

export default {
  updateToDestination: (fromDestination) => {
    const updatedToDestination = [];
    _.forEach(spaceships.spaceships, (spaceship) => {
      if (spaceship.destinations.includes(fromDestination)) {
        _.forEach(spaceship.destinations, (place) => {
          if (!updatedToDestination.includes(place) && place !== fromDestination) {
            updatedToDestination.push(place);
          }
        });
      }
    });
    return updatedToDestination;
  },
  updatePriceRange: (toDestination, fromDestination) => {
    const priceRange = [];

    const prices =
      {
        1: '$0 - $10,000',
        2: '$10,0001 - $100,000',
        3: '$100,001 - $500,000',
        4: '$500,001 - $1,000,000',
      };
    _.forEach(spaceships.spaceships, (spaceship) => {
      const isToDestination = spaceship.destinations.includes(toDestination);
      const isFromDestination = spaceship.destinations.includes(fromDestination);
      if (isToDestination && isFromDestination) {
        if (spaceship.price <= 10000) {
          priceRange.push(prices[1]);
        } else if (spaceship.price >= 10001 && spaceship.price <= 100000) {
          priceRange.push(prices[2]);
        } else if (spaceship.price >= 100001 && spaceship.price <= 500000) {
          priceRange.push(prices[3]);
        } else if (spaceship.price >= 500001 && spaceship.price <= 1000000) {
          priceRange.push(prices[4]);
        }
      }
    });
    console.log('============', priceRange);
    return priceRange;
  },
};
