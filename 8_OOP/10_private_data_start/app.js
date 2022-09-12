'use strict';

class MeetingRoom {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.available = true;
    this.schedule = [];
  }

  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  };
};

MeetingRoom.prototype.company = "ABC Coop";


const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);