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
};
