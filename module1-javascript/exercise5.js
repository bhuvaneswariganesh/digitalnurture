function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const concert = new Event("Jazz Night", "2025-08-01", 20);
console.log(concert.checkAvailability()); // true

// List keys and values
console.log(Object.entries(concert));
