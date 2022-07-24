const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    //on conecta el socket server
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      //emitir al cliente conectado el listado de bandas
      socket.emit('list-bands', this.bandList.getBands());

      socket.on('add-band', ({ name }) => {
        this.bandList.addBand(name);
        this.io.emit('list-bands', this.bandList.getBands());
      });

      socket.on('votar-band', (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit('list-bands', this.bandList.getBands());
      });

      socket.on('delete-band', (id) => {
        this.bandList.removeBand(id);
        this.io.emit('list-bands', this.bandList.getBands());
      });

      socket.on('change-name', ({ id, name }) => {
        this.bandList.changeName(id, name);
        this.io.emit('list-bands', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
