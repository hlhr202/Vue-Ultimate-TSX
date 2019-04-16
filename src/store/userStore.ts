import { Store } from "mmlpx";
import { observable, action } from "mobx";

@Store
class UserStore {
    @observable counter = 0;
    @action increment = () => {
        this.counter += 1;
    };
}

export default UserStore;
