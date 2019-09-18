import { Component as VueComponent } from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
const { injectGlobal } = require('vue-styled-components');

const GlobalStyle = injectGlobal`
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
`;

@Component
export default class App extends VueComponent<{}> {
    public render() {
        return (
            <div id='app'>
                <GlobalStyle />
                <router-view />
            </div>
        );
    }
}
