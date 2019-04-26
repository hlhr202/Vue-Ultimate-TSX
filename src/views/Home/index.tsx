import UserStore from "@/store/userStore";
import { Observer } from "mobx-vue";
import { inject, ViewModel } from "mmlpx";
import { Component as VueComponent } from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import { computed, observable, action } from "mobx";
import { HomeWrapper, Button } from "./styled";

@ViewModel
class Model {
    @inject() userStore!: UserStore;

    @observable color: "yellow" | "cyan" | "white" = "white";

    @observable text = "";

    @action handleClick = () => {
        switch (this.color) {
            case "yellow":
                this.color = "cyan";
                break;
            case "cyan":
                this.color = "white";
                break;
            case "white":
                this.color = "yellow";
                break;
        }
    };

    @computed get counter2() {
        return this.userStore.counter * 2;
    }
}

@Observer
@Component
export default class Home extends VueComponent<{ me?: string }> {
    @inject() private readonly model!: Model;

    @Prop()
    me?: string;

    render() {
        return (
            <HomeWrapper color={this.model.color}>
                <Button>What the frek</Button>
                <div class="me">{this.me}</div>
                <div>Your input is: {this.model.text}</div>
                <input v-model={this.model.text} />
                <div class="text">Dafuq Awesome Styled Vue TSX</div>
                <button onClick={this.model.handleClick}>Magic color!</button>
                <div>
                    {this.model.userStore.counter} * 2 = {this.model.counter2}
                </div>
                <button onClick={this.model.userStore.increment}>change</button>
            </HomeWrapper>
        );
    }
}
