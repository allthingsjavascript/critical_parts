'use strict';

const createRoom = function(name, capacity) {
  return {
    name,
    capacity,
    available: true,
    schedule: [],
    reserve(dtm, len) {
      this.schedule.push({dtm, len})
    }
  };
};

const boardRoom = createRoom('Board Room', 20);
const trainingRoomA = createRoom('Training Room A', 35);