import { observable, action, reaction } from 'mobx'

class CommonStore {
  @observable name = 'mobx';
  @observable data = {foo: 1};
  @observable mapData = new Map();

  @action fetchName() {
    this.name = 'mobx + react';
  }

  @action update(num) {
    this.data.foo = num;
  }

  @action updateMapData(key, value) {
    this.mapData.set(key, value);
  }
}

export default new CommonStore();