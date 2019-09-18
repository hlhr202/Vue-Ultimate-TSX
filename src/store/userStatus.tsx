// vue instance store
import { Component, Vue as Vuebase } from 'vue-property-decorator';

@Component
class UserState extends Vuebase {
  public counter = 0;
  public color = 'red';
  public text = '';

  public increment() {
    this.counter++;
  }

  public handleClick() {
    if (this.color === 'red') {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }
  }

  get counter2() {
    return this.counter * 2;
  }

}

export const userUtil = new UserState();
