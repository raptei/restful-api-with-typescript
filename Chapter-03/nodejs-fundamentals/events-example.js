import EventEmitter from 'events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

const message = () => {
    console.log("Submitted Form Successfully");
}
myEmitter.on('notify-message', message);

myEmitter.emit('notify-message');


const  asyncEmitter = new MyEmitter();

asyncEmitter.on('notify', (message, status) => {
  setImmediate(() => {
    console.log(message, status);
  });
});

asyncEmitter.emit('notify', 'Failed to Submit', false);