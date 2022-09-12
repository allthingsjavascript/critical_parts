'use strict';

const MeetingRoom = function(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.available = true;
  this.schedule = [];
};

/* MeetingRoom.prototype.reserve = function(dtm, len) {
  this.schedule.push({dtm, len});
  function hasSchedule() {
    console.log(this);
    this.hasSchedule = true;
  }
  hasSchedule.bind(this)();
};
MeetingRoom.prototype.company = "ABC Coop"; */

MeetingRoom.prototype = {
  constructor: MeetingRoom,
  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  },
  company: 'ABC'
};

const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);