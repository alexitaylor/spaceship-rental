import spaceships from '../data/spaceships';
import _ from 'lodash';

const search = {
  // updateDestination: (destination) => {
  //   const updatedDestination = [];
  //   _.forEach(spaceships.spaceships, (spaceship) => {
  //     if (spaceship.destinations.includes(destination)) {
  //       _.forEach(spaceship.destinations, (place) => {
  //         if (!updatedDestination.includes(place) && place !== destination) {
  //           updatedDestination.push(place);
  //         }
  //       });
  //     }
  //   });
  //   updatedDestination.unshift(destination);
  //   return updatedDestination;
  // },
  // updateDestination: (destinationOne, destinationTwo, depatureDate, returnDate, price, size) => {
  //
  // },
  updatePriceRange: (destinationOne, destinationTwo) => {
    const priceRange = [];

    const prices =
      {
        1: '$0 - $10,000',
        2: '$10,0001 - $100,000',
        3: '$100,001 - $500,000',
        4: '$500,001 - $1,000,000',
      };

    // filters.filterDestination(destinationOne, price, size);
    // filters.filterDestination(destinationTwo, price, size);

    _.forEach(spaceships.spaceships, (spaceship) => {
      const isToDestination = spaceship.destinations.includes(destinationOne);
      const isFromDestination = spaceship.destinations.includes(destinationTwo);
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
    return priceRange;
  },
  updateSizeRange: (size) => {
    console.log(size);
  },
};

export default search;
