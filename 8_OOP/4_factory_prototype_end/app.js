'use strict';

const objProto = {
  reserve(dtm, len) {
    this.schedule.push({dtm, len})
  }
};

const createRoom = function(name, capacity) {
  let obj = Object.create(objProto);

  /* obj.name = name;
  obj.capacity = capacity;
  obj.available = true;
  obj.schedule = [];

  return obj; */
  
  return Object.assign(obj, {
    name,
    capacity,
    available: true,
    schedule: []
  });
};

const boardRoom = createRoom('Board Room', 20);
const trainingRoomA = createRoom('Training Room A', 35);

boardRoom.reserve(new Date(), 60);