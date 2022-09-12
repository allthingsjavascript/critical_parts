'use strict';

const MeetingRoom = function(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.available = true;
  this.schedule = [];
};

MeetingRoom.prototype.reserve = function(dtm, len) {
  this.schedule.push({dtm, len});
};
MeetingRoom.prototype.company = "ABC Coop";


const boardRoom = MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);