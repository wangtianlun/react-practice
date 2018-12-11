import { observable, action, reaction } from 'mobx'

class CommonStore {
  @observable name = 'mobx';
  @observable data = {foo: 1};

  @action fetchName() {
    this.name = 'mobx + react';
  }

  @action update(num) {
    this.data.foo = num;
  }
}

export default new CommonStore();