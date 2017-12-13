import EventEmitter from './EventEmitter';

export default class Actor {
  constructor(config, subject) {
    this.config = config;
    this.subject = subject;
    this.observable = new EventEmitter();
  }
  moveTo() {}
}