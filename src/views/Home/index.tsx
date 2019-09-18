// import UserStore from '@/store/userStore';
import { userUtil } from '@/store/userStatus';
import { Component as VueComponent } from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import { HomeWrapper, Button } from './styled';

@Component
export default class Home extends VueComponent<{ me?: string }> {

    @Prop()
    public me?: string;

    public render() {
        return (
            <HomeWrapper color={userUtil.color}>
                <Button>What the frek</Button>
                <div class='me'>{this.me}</div>
                <div>Your input is: {userUtil.text}</div>
                <input v-model={userUtil.text} />
                <div class='text'>Dafuq Awesome Styled Vue TSX</div>
                <button onClick={userUtil.handleClick}>Magic color!</button>
                <div>
                    {userUtil.counter} * 2 = {userUtil.counter2}
                </div>
                <button onClick={userUtil.increment}>change</button>
            </HomeWrapper>
        );
    }
}
