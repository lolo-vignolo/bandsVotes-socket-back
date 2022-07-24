const Band = require('./band');

class BandList {
  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('Iron Maiden'),
      new Band('AC/DC'),
      new Band('Nirvana'),
    ];
  }

  getBands() {
    return this.bands;
  }
  addBand(name) {
    this.bands.push(new Band(name));
    return this.bands;
  }

  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
    return this.bands;
  }

  increaseVotes(id) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.votes++;
      }
    });
    return this.bands;
  }

  decreaseVotes(id) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.votes--;
      }
    });
    return this.bands;
  }

  changeName(id, name) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.name = name;
      }
    });
    return this.bands;
  }
}

module.exports = BandList;
