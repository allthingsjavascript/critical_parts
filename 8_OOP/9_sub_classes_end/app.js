'use strict';

class Room {
  constructor(name, capacity = 1) {
    this.name = name;
    this.capacity = capacity;
    this.available = true;
    this.schedule = [];
  }

  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  };

  getInfo() {
    return `Name: ${this.name}${(this.capacity > 1) ? ' - Capcity: ' + this.capacity : ''} - Available: ${this.available}`;
  }
};

Room.prototype.company = "ABC Coop";

class MeetingRoom extends Room {

};

class BreakRoom extends Room {
  constructor(name, capacity, kitchen, tables) {
    super(name, capacity);
    this.kitchen = kitchen;
    this.tables = tables;
  }
};

class MeetingPod extends Room {
  constructor(name, phone) {
    super(name);
    this.phone = phone;
  }

  reserve(dtm) {
    this.schedule.push({dtm, len: 30});
  }
};


const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);
const lunchRoomA = new BreakRoom('Lunch Room A', 200, true, 10);
const pod201 = new MeetingPod('Pod 201', true);