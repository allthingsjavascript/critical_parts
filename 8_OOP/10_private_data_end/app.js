'use strict';

class MeetingRoom {
  #name;
  #capacity;
  available = true;
  schedule = [];
  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
  }

  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  };
  get capacity() {
    return this.#capacity;
  };
  get name() {
    return this.#name;
  };
  set capacity(num) {
    //throw new Error('You are not allowed to change the capacity.')
    if (num < this.#capacity) this.#capacity = num;
  };
};

MeetingRoom.prototype.company = "ABC Coop";


const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);