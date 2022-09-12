'use strict';

const MeetingRoom = function(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.available = true;
  this.schedule = [];
};

const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);